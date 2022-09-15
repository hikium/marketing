// Routing
import Link from "next/link";

// Design
import { IconExternalLink } from "@tabler/icons";

// First party components
import BrandWordmark from "components/brand/BrandWordmark";

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
      <nav className={`${manualMargin && "px-5 lg:px-52"} pt-10 w-fit`}>
        <Link href="/" passHref>
          <div className="w-20 h-4 cursor-pointer">
            <BrandWordmark />
          </div>
        </Link>
      </nav>
      <div className="flex-1">{children}</div>
      <footer
        className={`${
          manualMargin && "px-5 lg:px-52"
        } pb-10 flex flex-col space-y-5 lg:flex-row lg:space-x-20 lg:space-y-0`}
      >
        <div className="flex flex-col space-y-1 text-sm">
          <p className="text-gray-600 dark:text-gray-400">Follow our hike</p>
          <Link href="https://twitter.com/hikium" passHref>
            <a
              target="_blank"
              className="text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white hover:cursor-pointer flex flex-row space-x-2"
            >
              <span className="underline underline-offset-4">
                Twitter @hikium
              </span>
              {/* Center the icon with the parent*/}
              <span className="flex items-center justify-center">
                <IconExternalLink width={12} height={12} />
              </span>
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-1 text-sm">
          <Link href="https://github.com/hikium" passHref>
            <a
              target="_blank"
              className="text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white hover:cursor-pointer flex flex-row space-x-2"
            >
              <span className="underline underline-offset-4">GitHub</span>
              {/* Center the icon with the parent*/}
              <span className="flex items-center justify-center">
                <IconExternalLink width={12} height={12} />
              </span>
            </a>
          </Link>
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
          <Link href="/legal/project-affiliation">
            <a className="underline underline-offset-4 text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white hover:cursor-pointer">
              Project Affiliation
            </a>
          </Link>
        </div>
      </footer>
    </div>
  );
}
