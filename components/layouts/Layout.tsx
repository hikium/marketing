// Routing
import Link from "next/link";

// First party components
import BrandWordmark from "components/brand/BrandWordmark";
import ExternalLink from "components/system/ExternalLink";

interface LayoutProps {
  children: React.ReactNode;
  manualMargin: boolean;
}

// Start component
export default function Layout({ children, manualMargin }: LayoutProps) {
  return (
    <div
      className={`flex flex-col space-y-20 ${
        !manualMargin && "px-5 lg:px-52"
      } min-h-screen`}
    >
      <nav
        className={`flex flex-row space-x-10 ${
          manualMargin && "px-5 lg:px-52"
        } pt-10 w-fit`}
      >
        <div className="flex justify-center items-center">
          <Link href="/" passHref>
            <div className="w-20 h-4 cursor-pointer">
              <BrandWordmark />
            </div>
          </Link>
        </div>
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
      </footer>
    </div>
  );
}
