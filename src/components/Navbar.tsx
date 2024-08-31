import { Icons } from "@/components/Icons";
import { ModeToggle } from "@/components/ModeToggle";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center overflow-hidden">
        <div className="flex w-[108rem] flex-none justify-end">
          <picture>
            {/* <source
                srcSet="https://tailwindcss.com/_next/static/media/docs-dark@30.1a9f8cbf.avif"
                type="image/avif"
              /> */}
            <img
              src="https://tailwindcss.com/_next/static/media/docs-dark@30.1a9f8cbf.avif"
              alt=""
              className="-z-50 w-[71.75rem] max-w-none flex-none dark:hidden"
              decoding="async"
            />
          </picture>
          <picture>
            {/* <source
                srcSet="https://tailwindcss.com/_next/static/media/docs-dark@30.1a9f8cbf.avif"
                type="image/avif"
              /> */}
            <img
              src="https://tailwindcss.com/_next/static/media/docs-dark@30.1a9f8cbf.avif"
              alt=""
              className="hidden w-[90rem] max-w-none flex-none dark:block"
              decoding="async"
            />
          </picture>
        </div>
      </div>
      <header
        className="sticky left-0 right-0 top-0 z-50 border-b py-4 backdrop-blur-md"
        id="Navbar"
      >
        <div className="mx-auto flex max-w-6xl justify-between px-6">
          <Link href="/">
            <div className="flex gap-2">
              <Icons.logo className="h-10 w-10 bg-black" />
            </div>
          </Link>
          <nav className="flex h-fit items-center gap-4">
            <Link
              className="text-lg font-semibold"
              href="https://github.com/2xdevs/blog"
            >
              <GitHubLogoIcon className="h-6 w-6" />
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </header>
    </>
  );
};
