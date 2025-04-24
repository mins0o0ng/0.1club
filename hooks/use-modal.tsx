import { useState } from 'react';

interface ModalState {
  isOpen: boolean;
  title: string;
  description: string;
}

export function useModal(initialState: Partial<ModalState> = {}) {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    title: '',
    description: '',
    ...initialState,
  });

  const openModal = (title: string, description: string) => {
    setModalState({
      isOpen: true,
      title,
      description,
    });
  };

  const closeModal = () => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return {
    modalState,
    openModal,
    closeModal,
  };
} 