import { ModeToggle } from "@/components/ModeToggle";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <section
        className="stycky left-0 right-0 top-0 z-50 flex justify-around border-b px-6 py-4"
        id="Navbar"
      >
        <Link href="/" className="text-2xl font-bold leading-normal">
          2xdevs logo
        </Link>
        <nav className="flex h-fit items-center gap-4">
          <Link
            className="text-lg font-semibold"
            href="https://github.com/2xdevs/blog"
          >
            <GitHubLogoIcon className="h-8 w-8" />
          </Link>
          <ModeToggle />
        </nav>
      </section>
    </>
  );
};
