export type ModalType = 'newsletter' | 'signup';

export interface ModalState {
  isOpen: boolean;
  title: string;
  description: string;
  type: ModalType;
}

export interface ModalInitialState {
  title: string;
  description: string;
  type?: ModalType;
} 