import { useState } from 'react'
import { ModalState, ModalInitialState, ModalType } from '@/types/modal'

export function useModal(initialState: ModalInitialState) {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    title: initialState.title,
    description: initialState.description,
    type: initialState.type || 'signup'
  })

  const openModal = (title: string, description: string) => {
    const type: ModalType = title.includes('뉴스레터') ? 'newsletter' : 'signup'
    setModalState({
      isOpen: true,
      title,
      description,
      type
    })
  }

  const closeModal = () => {
    setModalState(prev => ({
      ...prev,
      isOpen: false
    }))
  }

  return {
    modalState,
    openModal,
    closeModal
  }
} 