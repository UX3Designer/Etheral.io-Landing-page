import { addPopup, ApplicationModal, PopupContent, removePopup, setOpenModal } from './reducer'
import { useAppDispatch, useAppSelector } from '../hooks'
import { useCallback, useMemo } from 'react'
import { RootState } from '../store'

export function useModalOpen(modal: ApplicationModal): boolean {
    const openModal = useAppSelector((state: RootState) => state.application.openModal)
    return openModal === modal
  }

export function useToggleModal(modal: ApplicationModal): () => void {
    const open = useModalOpen(modal)
    const dispatch = useAppDispatch()
    return useCallback(() => dispatch(setOpenModal(open ? null : modal)), [dispatch, modal, open])
  }

export function useWalletModalToggle(): () => void {
    return useToggleModal(ApplicationModal.WALLET)
  }