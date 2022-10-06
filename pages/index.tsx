import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import BrandWordmark from "components/brand/BrandWordmark";
import Link from "next/link";
import ECIcon from "components/brand/ECIcon";
import hcjlogo from "pages/img/html-css-js-logo-combo.png";

const navigation = [
  { name: "Contact", href: "#" },
  { name: "Legal", href: "#" },
];

export default function Homepage() {
  return (
    <div className="relative overflow-hidden bg-black">
      <section>
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 bg-black pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
              <polygon points="50,0 100,0 50,100 0,100" />

            <Popover>
              <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                    <div className="flex w-full items-center justify-between md:w-auto">
                      <Link href="/" passHref>
                        <div className="w-20 h-4 cursor-pointer">
                          <BrandWordmark />
                        </div>
                      </Link>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-black p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Open main menu</span>
                          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="font-medium text-brand hover:text-white"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>

              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                >
                  <div className="overflow-hidden rounded-lg bg-black shadow-md ring-1 ring-black ring-opacity-5">
                    <div className="flex items-center justify-between px-5 pt-4">
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-black p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close main menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="space-y-1 px-2 pt-2 pb-3">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-brand hover:text-white"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl md:content-center md: justify-center">
                  <span className="block xl:inline text-white md:text-center">Bringing the </span>
                  <span className="block text-brand xl:inline md:text-center">element of elegance </span>
                  <span className="block xl:inline text-white md:text-center">to the web.</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 flex gap-2 tracking-tight text-center">
                  With Hikium <ECIcon />
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-brand text-white px-8 py-3 font-medium transition ease-in-out delay-150 b hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-brand duration-300 md:text-lg"
                    >
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl text-center bg-black pt-20">
          No strings attatched.
        </h1>
        <p className="text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl gap-2 tracking-tight text-center">
          Hikium <ECIcon /> uses advanced website building technologies that don't come at a cost. All your work is completely yours. No watermarks, no pay-to-use. Simply build your website with Hikium <ECIcon /> and export your code to host it anywhere, on any platform. The best part? No sign up is required. Simply load up your favourite browser and start creating your own <span className="text-brand">Element of Elagance.</span>
        </p>
      </section>

      <section>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl text-center bg-black pt-20">
          Compile to the most popular web languages in the world.
        </h1>
        <hcjlogo />

        
      </section>
    </div>
  
  );
}
