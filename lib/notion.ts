// Notion API integration
export const notionConfig = {
  secret: process.env.NOTION_SECRET,
  databaseId: process.env.NOTION_DB_ID,
};

export async function submitToNotion(data: any) {
  // Notion API에 페이지를 추가하는 엔드포인트는 /v1/pages임
  const response = await fetch(`https://api.notion.com/v1/pages`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${notionConfig.secret}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Notion API error: ${error}`);
  }
  return await response.json();
} 