import { Fragment, ReactElement } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import BrandWordmark from "components/brand/BrandWordmark";
import Link from "next/link";
import ECIcon from "components/brand/ECIcon";
import Layout from "components/layouts/Layout";
import Button from "components/system/Button";
import { IconArrowRight } from "@tabler/icons";

/* const navigation = [
  { name: "Contact", href: "#" },
  { name: "Legal", href: "#" },
]; */

export default function Homepage() {
  return (
    <><div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">

          <Popover>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              show={true}
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-black hover:bg-white-100 hover:text-black -500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>




          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl md:content-center md: justify-center">
                <span className="block xl:inline text-black sm:text-center">
                  Bringing the{" "}
                </span>
                <span className="block text-brand xl:inline sm:text-center">
                  element of elegance{" "}
                </span>
                <span className="block xl:inline text-black md:text-center">
                  to the web.
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 flex gap-2 tracking-tight text-left">
                With Hikium Experience Composer, the free, no-account website
                builder.
              </p>
              <Button icon={<IconArrowRight />} isDisabled className="mt-[2%]">
                Open the EC App
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
    <section>
        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl text-center bg-white pt-20">
          No strings attached.
        </h1>
        <p className="sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl gap-2 text-center bg-white">
          Hikium EC uses advanced website building technologies that don't come
          at a cost. All your work is completely yours. No watermarks, no
          pay-to-use. Simply build your website with Hikium EC and export your
          code to host it anywhere, on any platform. The best part? No sign up
          is required. Simply load up your favourite browser and start creating
          your own <span className="text-brand">Element of Elegance.</span>
        </p>
      </section>
      <section>
        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl text-center bg-white pt-20">
          Compile to the most popular web languages in the world.
        </h1>
      </section></>
  );
}

Homepage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout manualMargin={true} showOpenECButton={true}>
      {page}
    </Layout>
  );
};

