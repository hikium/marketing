// First party design
// import LoadingBar from "./LoadingBar";

// Third party design
import { m } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  isActive?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  href?: string;
  openInNewTab?: boolean;
  className?: string;
}

/**
 * Product custom button
 *
 * @beta
 */
export default function Button({
  children,
  onClick,
  icon,
  isActive,
  isLoading,
  isDisabled,
  href,
  openInNewTab,
  className,
}: ButtonProps) {
  return isDisabled ? (
    <m.button
      className="border border-gray-800/30 dark:border-white/30 contrast-more:border-black dark:contrast-more:border-white px-5 py-2.5 rounded-full text-gray-400 dark:shadow-gray-800 shadow-none"
      style={{ cursor: "not-allowed" }}
      disabled={true}
      aria-disabled={true}
    >
      <div className="flex flex-row space-x-2 items-center">
        <div className="flex-none">{icon}</div>
        <div className="flex-1">{children}</div>
        <div />
      </div>
    </m.button>
  ) : (
    <>
      {href ? (
        <m.a
          className={`border border-gray-800/30 dark:border-white/30 contrast-more:border-black dark:contrast-more:border-white px-5 py-2.5 rounded-full ${
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
          href={href}
          target={(openInNewTab && "_blank") || undefined}
        >
          {icon ? (
            // Keep children in the center but keep icon on the
            // left side of the button
            <div className="flex flex-row space-x-2 items-center">
              <div className="flex-none">{icon}</div>
              <div className="flex-1">
                {isLoading ? (
                  <div className="flex justify-center">Loading</div>
                ) : (
                  <div className="flex justify-center">{children}</div>
                )}
              </div>
              <div />
            </div>
          ) : isLoading ? (
            <div className="flex justify-center">Loading</div>
          ) : (
            <div className="flex justify-center">{children}</div>
          )}
        </m.a>
      ) : (
        <m.button
          className={`border border-gray-800/30 dark:border-white/30 contrast-more:border-black dark:contrast-more:border-white px-5 py-2.5 rounded-full ${
            isLoading
              ? "shadow-none"
              : isActive
              ? "shadow-lg z-10"
              : "shadow-none"
          } w-full`}
          style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
          onClick={onClick}
          whileHover={{
            borderColor: "rgba(0, 0, 0, 1)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          {icon ? (
            // Keep children in the center but keep icon on the
            // left side of the button
            <div className="flex flex-row space-x-2 items-center">
              <div className="flex-none">{icon}</div>
              <div className="flex-1">
                {isLoading ? (
                  <div className="flex justify-center">Loading</div>
                ) : (
                  <div className="flex items-center justify-center">
                    {children}
                  </div>
                )}
              </div>
              <div />
            </div>
          ) : isLoading ? (
            <div className="flex justify-center">Loading</div>
          ) : (
            <div className="flex justify-center">{children}</div>
          )}
        </m.button>
      )}
    </>
  );
}
