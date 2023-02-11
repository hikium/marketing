"use client";

// Types
import type { ReactElement } from "react";

// Third party design
import { Modal as GeistModal } from "@geist-ui/core";

interface ModalProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  title: string;
  children: ReactElement;
  actionButton: string;
  actionButtonOnClick: () => void;
  actionButtonLoading?: boolean;
  actionButtonDisabled?: boolean;
  lockedOpen?: boolean;
}

export default function Modal({
  isOpen,
  setOpen,
  title,
  children,
  actionButton,
  actionButtonOnClick,
  actionButtonLoading,
  actionButtonDisabled,
  lockedOpen,
}: ModalProps) {
  return (
    <GeistModal
      visible={isOpen}
      onClose={() => setOpen(false)}
      disableBackdropClick={lockedOpen}
      keyboard={lockedOpen && false}
    >
      <GeistModal.Title>{title}</GeistModal.Title>
      <GeistModal.Content>{children}</GeistModal.Content>
      <GeistModal.Action
        onClick={() => setOpen(false)}
        disabled={lockedOpen}
        passive={lockedOpen}
      >
        Cancel
      </GeistModal.Action>
      <GeistModal.Action
        onClick={actionButtonOnClick}
        loading={actionButtonLoading}
        disabled={actionButtonDisabled}
        passive={actionButtonDisabled}
      >
        {actionButton}
      </GeistModal.Action>
    </GeistModal>
  );
}
