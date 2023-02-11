"use client";

// Types
import type { ReactElement } from "react";

// Third party design
import { Drawer as GeistDrawer } from "@geist-ui/core";

interface DrawerProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  title: string;
  children: ReactElement;
  isInputDrawer?: boolean;
  lockedOpen?: boolean;
}

export default function Drawer({
  isOpen,
  setOpen,
  title,
  children,
  isInputDrawer,
  lockedOpen,
}: DrawerProps) {
  return (
    <GeistDrawer
      visible={isOpen}
      onClose={() => setOpen(false)}
      disableBackdropClick={lockedOpen}
      keyboard={lockedOpen && false}
      placement={isInputDrawer ? "right" : "left"}
      style={{ maxWidth: "34%", minWidth: "25%" }}
    >
      <GeistDrawer.Title>{title}</GeistDrawer.Title>
      <GeistDrawer.Content>{children}</GeistDrawer.Content>
    </GeistDrawer>
  );
}
