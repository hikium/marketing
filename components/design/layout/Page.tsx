"use client";

// Third party design
import {
  Page as GeistPage,
  PageProps,
  PageHeaderProps,
  PageFooterProps,
  PageContentProps,
} from "@geist-ui/core";

export function PageHeader({ children, center, className }: PageHeaderProps) {
  return (
    <GeistPage.Header center={center} className={className}>
      {children}
    </GeistPage.Header>
  );
}

export function PageFooter({ children }: PageFooterProps) {
  return <GeistPage.Footer>{children}</GeistPage.Footer>;
}

export function PageContent({ children }: PageContentProps) {
  return <GeistPage.Content>{children}</GeistPage.Content>;
}

export function Page({ children, dotBackdrop }: PageProps) {
  return <GeistPage dotBackdrop={dotBackdrop}>{children}</GeistPage>;
}
