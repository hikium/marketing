// Types
import { ReactNode } from "react";

// Routing
import Link from "next/link";

// First party components
import BrandWordmark from "components/brand/BrandWordmark";
import ExternalLink from "components/system/ExternalLink";

// Design
import Button from "components/system/Button";
import { IconArrowRight } from "@tabler/icons";

interface LayoutProps {
  children: ReactNode;
  manualMargin: boolean;
  showOpenECButton?: boolean;
}

// Start component
export default function Layout({
  children,
  manualMargin,
  showOpenECButton,
}: LayoutProps) {
  // Miscellaneous repeated components
  interface ColouredDotArrayProps {
    children: ReactNode;
    label: string;
  }
  function ColouredDotArray({ children, label }: ColouredDotArrayProps) {
    return (
      <span
        className="flex flex-row space-x-1"
        aria-label={label}
        title={label}
      >
        {children}
      </span>
    );
  }
  function ColouredDot({ colour }: { colour: string }) {
    return (
      <div
        className="w-2 h-2 rounded-full border-black dark:border-white"
        style={{ borderWidth: "0.5px", backgroundColor: colour }}
      />
    );
  }

  return (
    <div
      className={`flex flex-col space-y-20 ${
        !manualMargin && "px-5 lg:px-52"
      } min-h-screen`}
    >
      <nav
        className={`${
          manualMargin && "px-5 lg:px-52"
        } pt-10 flex flex-row justify-between`}
      >
        <Link href="/" passHref>
          <div className="w-20 h-4 cursor-pointer">
            <BrandWordmark />
          </div>
        </Link>
        {showOpenECButton && (
          <div className="w-fit">
            <Button icon={<IconArrowRight />} isDisabled>
              Open EC
            </Button>
          </div>
        )}
      </nav>
      <div className="flex-1">{children}</div>
      <footer
        className={`${
          manualMargin && "px-5 lg:px-52"
        } pb-10 flex flex-col space-y-5 lg:flex-row lg:space-x-20 lg:space-y-0`}
      >
        <div className="flex flex-col space-y-1 text-sm">
          <p className="text-gray-600 dark:text-gray-400">Follow our hike</p>
          <ExternalLink
            href="https://twitter.com/hikium"
            className="text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white hover:cursor-pointer flex flex-row space-x-2"
          >
            Twitter @hikium
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-1 text-sm">
          <ExternalLink
            href="https://github.com/hikium"
            className="text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white hover:cursor-pointer flex flex-row space-x-2"
          >
            GitHub
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-1 text-sm">
          <Link href="/legal/privacy">
            <a className="underline underline-offset-4 text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white hover:cursor-pointer">
              Privacy
            </a>
          </Link>
          <Link href="/legal">
            <a className="underline underline-offset-4 text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white hover:cursor-pointer">
              Terms and Legal
            </a>
          </Link>
          <Link href="/legal/security">
            <a className="underline underline-offset-4 text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white hover:cursor-pointer">
              Responsible Disclosure
            </a>
          </Link>
          <Link href="/contact">
            <a className="underline underline-offset-4 text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white hover:cursor-pointer">
              Contact Hikium
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-2 text-sm">
          {/* https://www.schemecolor.com/australian-aboriginal-flag-colors.php */}
          <ColouredDotArray label="Australian Aboriginal Flag">
            <ColouredDot colour="#000000" />
            <ColouredDot colour="#CC0000" />
            <ColouredDot colour="#FFFF00" />
          </ColouredDotArray>
          {/* https://www.schemecolor.com/torres-strait-islander-flag-colors.php */}
          <ColouredDotArray label="Australian Torres Strait Islander Flag">
            <ColouredDot colour="#008264" />
            <ColouredDot colour="#004B87" />
            <ColouredDot colour="#FFFFFF" />
            <ColouredDot colour="#000000" />
          </ColouredDotArray>
          {/* https://www.schemecolor.com/lgbt-flag-colors.php */}
          <ColouredDotArray label="LGBTQIA+">
            <ColouredDot colour="#FF0018" />
            <ColouredDot colour="#FFA52C" />
            <ColouredDot colour="#FFFF41" />
            <ColouredDot colour="#008018" />
            <ColouredDot colour="#0000F9" />
            <ColouredDot colour="#86007D" />
          </ColouredDotArray>
          <ColouredDotArray label="Black Lives Matter">
            <ColouredDot colour="#000000" />
          </ColouredDotArray>
        </div>
      </footer>
    </div>
  );
}
