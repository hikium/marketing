// First party design
// import LoadingBar from "./LoadingBar";

// Third party design
import { m } from "framer-motion";

interface IconButtonProps {
  icon: React.ReactNode;
  ariaLabel: string;
  onClick?: () => void;
  isActive?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  href?: string;
  openInNewTab?: boolean;
  className?: string;
}

/**
 * Product custom button, showing an icon as its children
 *
 * @beta
 */
export default function IconButton({
  icon,
  ariaLabel,
  onClick,
  isActive,
  isLoading,
  isDisabled,
  href,
  openInNewTab,
  className,
}: IconButtonProps) {
  return isDisabled ? (
    <m.button
      className="border border-gray-800/30 dark:border-white/30 px-5 py-2.5 rounded-full text-gray-400 dark:shadow-gray-800 shadow-none w-fit"
      style={{ cursor: "not-allowed" }}
      disabled={true}
      aria-disabled={true}
      title={ariaLabel}
    >
      <div className="flex items-center">
        <div>{icon}</div>
      </div>
    </m.button>
  ) : (
    <>
      {href ? (
        <m.a
          className={`border border-gray-800/30 dark:border-white/30 px-5 py-2.5 rounded-full w-fit ${
            isLoading
              ? "shadow-none"
              : isActive
              ? "shadow-lg z-10"
              : "shadow-none"
          }`}
          style={{
            cursor: isLoading ? "not-allowed" : "pointer",
            textDecoration: "none",
          }}
          onClick={onClick}
          whileHover={{
            borderColor: "rgba(0, 0, 0, 1)",
          }}
          whileTap={{ scale: 0.98 }}
          title={ariaLabel}
          href={href}
          target={(openInNewTab && "_blank") || undefined}
        >
          <div className="flex items-center">
            <div>{icon}</div>
          </div>
        </m.a>
      ) : (
        <m.button
          className={`border border-gray-800/30 dark:border-white/30 px-5 py-2.5 rounded-full w-fit ${
            isLoading
              ? "shadow-none"
              : isActive
              ? "shadow-lg z-10"
              : "shadow-none"
          } w-full`}
          style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
          onClick={onClick}
          title={ariaLabel}
          whileHover={{
            borderColor: "rgba(0, 0, 0, 1)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center">
            <div>{icon}</div>
          </div>
        </m.button>
      )}
    </>
  );
}
