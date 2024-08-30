import { Blogs } from "@/components/Blogs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogsData } from "@/test/data";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

export default function HomePage() {
  return (
    <main className="">
      <section id="Hero" className="max-w-6xl px-4 py-16 sm:mx-auto">
        <div className="mx-auto max-w-2xl space-y-6">
          <h1 className="text-center text-display-4 font-bold lg:text-5xl">
            Latest Blogs
          </h1>
          <h2 className="text-center text-xl font-medium text-secondary-foreground">
            Join us on our coding journey! Discover tips, real-world
            experiences, and more. Learn, grow, and code with us at
            blog@2xdevs.com
          </h2>
          <div className="mx-auto flex max-w-sm gap-4">
            <form className="-mx-2 flex flex-wrap">
              <div className="mt-3 grow-[9999] basis-64 px-2">
                <div className="group relative">
                  <EnvelopeClosedIcon className="pointer-events-none absolute inset-y-0 left-3 h-full w-6 text-slate-400 group-focus-within:text-sky-500 dark:group-focus-within:text-slate-400" />
                  <Input
                    name="email_address"
                    type="email"
                    required
                    autoComplete="email"
                    aria-label="Email address"
                    className="block w-full appearance-none rounded-md border border-transparent bg-white py-2 pl-12 pr-3 leading-5 text-slate-900 shadow ring-1 ring-slate-900/5 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-slate-700/20 dark:text-white dark:ring-slate-200/20 dark:focus:ring-sky-500 sm:text-sm"
                    placeholder="Subscribe via email"
                  />
                </div>
              </div>
              <div className="mt-3 flex grow px-2">
                <Button type="submit" className="flex-auto">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Blogs blogs={blogsData} />
    </main>
  );
}
