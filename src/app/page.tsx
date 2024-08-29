import { Blogs } from "@/components/Blogs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogsData } from "@/test/data";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

export default function HomePage() {
  return (
    <main className="">
      <section id="Hero" className="mx-auto mb-8 max-w-6xl pt-16">
        <div className="mx-auto max-w-2xl space-y-6">
          <h1 className="text-center text-5xl font-bold">Latest Blogs</h1>
          <h2 className="text-center text-xl font-medium text-secondary-foreground">
            Join us on our coding journey! Discover tips, real-world
            experiences, and more. Learn, grow, and code with us at
            blog@2xdevs.com
          </h2>
          <div className="mx-auto flex max-w-sm gap-4">
            <div className="relative">
              <EnvelopeClosedIcon className="pointer-events-none absolute inset-y-0 left-3 h-full w-6 text-slate-400 group-focus-within:text-sky-500 dark:group-focus-within:text-slate-400" />
              <Input />
            </div>
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
      <Blogs blogs={blogsData} />
    </main>
  );
}
