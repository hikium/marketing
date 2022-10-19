interface SupplementaryTextProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Supplementary (helper) text.
 *
 * @public
 */
export default function SupplementaryText({
  children,
  className,
}: SupplementaryTextProps) {
  return (
    <p
      className={`text-sm text-gray-600 dark:text-gray-400 contrast-more:text-black contrast-more:dark:text-white ${className}`}
    >
      {children}
    </p>
  );
}
