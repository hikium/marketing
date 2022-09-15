interface CardProps {
  children: React.ReactNode;
}

/**
 * Presentational container
 *
 * @remarks A `<div>`.
 *
 * @public
 */
export default function Card({ children }: CardProps) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-5">
      {children}
    </div>
  );
}
