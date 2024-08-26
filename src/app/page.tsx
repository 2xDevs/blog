import { Blogs } from "@/components/Blogs";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogsData } from "@/test/data";

export default function HomePage() {
  return (
    <main className="">
      <Navbar />
      <section id="Hero" className="mx-auto mb-8 max-w-6xl pt-16">
        <div className="mx-auto max-w-2xl space-y-6">
          <h1 className="text-center text-5xl font-bold">Latest Blogs</h1>
          <h2 className="text-center text-xl font-medium text-secondary-foreground">
            Join us on our coding journey! Discover tips, real-world
            experiences, and more. Learn, grow, and code with us at
            blog@2xdevs.com
          </h2>
          <div className="mx-auto flex max-w-sm gap-4">
            <Input />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
      <Blogs blogs={blogsData} />
    </main>
  );
}
