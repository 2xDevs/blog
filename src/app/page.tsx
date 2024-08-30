import { Blogs } from "@/components/Blogs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

async function fetchAllBlogs() {
  const responce = await fetch("http://localhost:3000/api/blogs");
  if (!responce.ok) {
    throw new Error("Failed to fetch blogs");
  }
  return responce.json();
}

export default async function HomePage() {
  const blogs = await fetchAllBlogs();
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
                    className="bg-secondary pl-12 placeholder:text-slate-500 focus-visible:ring-offset-0"
                    aria-label="Email address"
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
      <Blogs blogs={blogs} />
    </main>
  );
}
