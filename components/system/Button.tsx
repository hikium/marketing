// First party components
import LoadingBar from "./LoadingBar";

// Third party design
import { m } from "framer-motion";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  ariaLabel?: string;
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
 * @remarks A `<button>` (or `<a>` if `href` is provided).
 *
 * @beta
 */
export default function Button({
  children,
  onClick,
  icon,
  ariaLabel,
  isActive,
  isLoading,
  isDisabled,
  href,
  openInNewTab,
  className,
}: ButtonProps) {
  // Check for dark mode
  // Do not know how to implement!
  // const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

  return (
    <>
      {!children ? (
        <m.button
          className={`${
            isActive
              ? "bg-gray-800/10 dark:bg-white/10"
              : "bg-gray-800/5 dark:bg-white/5"
          } p-3 rounded-full ${
            isLoading
              ? "shadow-inner"
              : isActive
              ? "shadow-md z-10"
              : "shadow-inner"
          } w-full ${className}`}
          style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
          onClick={onClick}
          whileHover={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          {icon ? <div className="flex justify-center">{icon}</div> : ""}
        </m.button>
      ) : (
        <>
          {isDisabled ? (
            <m.button
              className={`bg-gray-800/5 dark:bg-white/5 p-3 rounded-lg text-gray-400 dark:shadow-gray-800 shadow-none w-full ${className}`}
              style={{ cursor: "not-allowed" }}
              disabled={true}
              aria-disabled={true}
            >
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex-none">{icon}</div>
                <div className="flex-1 px-2">{children}</div>
                <div />
              </div>
            </m.button>
          ) : (
            <>
              {href ? (
                <m.a
                  className={`${
                    isActive
                      ? "bg-gray-800/10 dark:bg-white/10"
                      : "bg-gray-800/5 dark:bg-white/5"
                  } p-3 rounded-lg ${
                    isLoading
                      ? "shadow-inner"
                      : isActive
                      ? "shadow-md z-10"
                      : "shadow-inner"
                  } ${className}`}
                  style={{
                    cursor: isLoading ? "not-allowed" : "pointer",
                    textDecoration: "none",
                  }}
                  onClick={onClick}
                  whileHover={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
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
                      <div className="flex-1 px-2">
                        {isLoading ? (
                          <div className="flex justify-center">
                            <LoadingBar />
                          </div>
                        ) : (
                          <div className="flex justify-center">{children}</div>
                        )}
                      </div>
                      <div />
                    </div>
                  ) : isLoading ? (
                    <div className="flex justify-center">
                      <LoadingBar />
                    </div>
                  ) : (
                    <div className="flex justify-center">{children}</div>
                  )}
                </m.a>
              ) : (
                <m.button
                  className={`${
                    isActive
                      ? "bg-white/10 dark:bg-white/10"
                      : "bg-gray-800/5 dark:bg-white/5"
                  } p-3 rounded-lg ${
                    isLoading
                      ? "shadow-inner"
                      : isActive
                      ? "shadow-md z-10"
                      : "shadow-inner"
                  } w-full ${className}`}
                  style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                  onClick={onClick}
                  whileHover={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {icon ? (
                    // Keep children in the center but keep icon on the
                    // left side of the button
                    <div className="flex flex-row space-x-2 items-center">
                      <div className="flex-none">{icon}</div>
                      <div className="flex-1 px-2">
                        {isLoading ? (
                          <div className="flex justify-center">
                            <LoadingBar />
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            {children}
                          </div>
                        )}
                      </div>
                      <div />
                    </div>
                  ) : isLoading ? (
                    <div className="flex justify-center">
                      <LoadingBar />
                    </div>
                  ) : (
                    <div className="flex justify-center" aria-label={ariaLabel}>
                      {children}
                    </div>
                  )}
                </m.button>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
