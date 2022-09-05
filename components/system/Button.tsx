// First party components
import LoadingBar from "./LoadingBar";

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
}: ButtonProps) {
  return (
    <>
      {!children ? (
        <m.button
          className={`bg-white/90 dark:bg-slate-800/70 p-3 rounded-lg dark:shadow-gray-800 ${
            isLoading
              ? "shadow-none"
              : isActive
              ? "shadow-xl z-10"
              : "shadow-sm"
          } w-full`}
          style={{
            cursor: isLoading ? "not-allowed" : "pointer",
            textDecoration: "none",
          }}
          onClick={onClick}
          whileHover={{ scale: isLoading ? 1 : 0.97 }}
          whileTap={{ scale: isLoading ? 1 : isActive ? 0.85 : 0.75 }}
        >
          {icon ? <div className="flex justify-center">{icon}</div> : ""}
        </m.button>
      ) : (
        <>
          {isDisabled ? (
            <m.button
              className={`bg-white/90 dark:bg-slate-800/70 p-3 rounded-lg text-gray-400 dark:shadow-gray-800 shadow-none w-full`}
              style={{ cursor: "not-allowed", textDecoration: "none" }}
              disabled={true}
              aria-disabled={true}
            >
              <div className="flex flex-row space-x-2">
                <div className="flex-none">{icon}</div>
                <div className="flex-1">{children}</div>
                <div />
              </div>
            </m.button>
          ) : (
            <>
              {href ? (
                <m.a
                  className={`bg-white/90 dark:bg-slate-800/70 p-3 rounded-lg dark:shadow-gray-800 ${
                    isLoading
                      ? "shadow-none"
                      : isActive
                      ? "shadow-xl z-10"
                      : "shadow-sm"
                  }`}
                  style={{
                    cursor: isLoading ? "not-allowed" : "pointer",
                    textDecoration: "none",
                  }}
                  onClick={onClick}
                  whileHover={{ scale: isLoading ? 1 : 0.97 }}
                  whileTap={{ scale: isLoading ? 1 : isActive ? 0.85 : 0.75 }}
                  href={href}
                  target={(openInNewTab && "_blank") || undefined}
                >
                  {icon ? (
                    // Keep children in the center but keep icon on the
                    // left side of the button
                    <div className="flex flex-row space-x-2">
                      <div className="flex-none">{icon}</div>
                      <div className="flex-1">
                        {isLoading ? (
                          <div className="flex flex-row justify-center">
                            <LoadingBar />
                          </div>
                        ) : (
                          <div className="flex flex-row justify-center">
                            {children}
                          </div>
                        )}
                      </div>
                      <div />
                    </div>
                  ) : isLoading ? (
                    <div className="flex flex-row justify-center">
                      <LoadingBar />
                    </div>
                  ) : (
                    <div className="flex flex-row justify-center">
                      {children}
                    </div>
                  )}
                </m.a>
              ) : (
                <m.button
                  className={`bg-white/90 dark:bg-slate-800/70 p-3 rounded-lg dark:shadow-gray-800 ${
                    isLoading
                      ? "shadow-none"
                      : isActive
                      ? "shadow-xl z-10"
                      : "shadow-sm"
                  } w-full`}
                  style={{
                    cursor: isLoading ? "not-allowed" : "pointer",
                    textDecoration: "none",
                  }}
                  onClick={onClick}
                  whileHover={{ scale: isLoading ? 1 : 0.97 }}
                  whileTap={{ scale: isLoading ? 1 : isActive ? 0.85 : 0.75 }}
                >
                  {icon ? (
                    // Keep children in the center but keep icon on the
                    // left side of the button
                    <div className="flex flex-row space-x-2">
                      <div className="flex-none">{icon}</div>
                      <div className="flex-1">
                        {isLoading ? (
                          <div className="flex flex-row justify-center">
                            <LoadingBar />
                          </div>
                        ) : (
                          <div className="flex flex-row justify-center">
                            {children}
                          </div>
                        )}
                      </div>
                      <div />
                    </div>
                  ) : isLoading ? (
                    <div className="flex flex-row justify-center">
                      <LoadingBar />
                    </div>
                  ) : (
                    <div
                      className="flex flex-row justify-center"
                      aria-label={ariaLabel}
                    >
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
