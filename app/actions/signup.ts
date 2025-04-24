'use server'

import { submitToNotion } from '@/lib/notion'

interface SignupData {
  name: string;
  email: string;
}

export async function handleSignup(data: SignupData) {
  try {
    const response = await submitToNotion({
      parent: { database_id: process.env.NOTION_DB_ID },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: data.name
              }
            }
          ]
        },
        Email: {
          email: data.email
        },
        Status: {
          select: {
            name: "Pending"
          }
        },
        "Sign Up Date": {
          date: {
            start: new Date().toISOString()
          }
        }
      }
    });

    return { success: true, data: response };
  } catch (error) {
    console.error('Error in signup:', error);
    return { success: false, error: 'Failed to process signup' };
  }
} 