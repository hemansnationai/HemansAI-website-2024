"use client";
import { LandingPageNavigation } from "./navigation";
import Link from "next/navigation";
import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";

const HomePage = () => {
  return (
    <>
      {/* NavigationMenuDemo */}
      <LandingPageNavigation />
      <section className="px-5 mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <a className="underline" href="">How to solve 7 AI implementation pains? FREE ebook</a>
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">Premium AI Solutions without the headache of implementation</h1>
        <span className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl" data-br=":R1jfau6la:" data-brr={1} style={{ display: "inline-block", verticalAlign: "top", textDecoration: "inherit", maxWidth: 333 }}>
          Build customized solutions around your business problem with our team of AI/ML engineers and consultants.
        </span>
        <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
          <a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
            href=""
          >
             Let&apos;s Talk
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            href=""
          >
            Case Studies
          </a>
        </div>
      </section>

      {/* section 2 */}
      <section className="min-h-full h-full w-full flex items-center justify-center bg-gray-300 py-8 md:py-12 lg:py-24">
          <h2 className="text-center text-lg font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">Our clients and partners</h2>
      </section>

      {/* section 3 */}
      <section className="min-h-full h-full w-full py-8 md:py-12 lg:py-24">
        <div className="container">
          <h2 className="text-center text-lg font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">Core Capabilities</h2>
          <div className="p-8">
            <div className="grid gap-3 grid-cols-1 md:grid-cols-3 ">
              <div className="rounded-xl border bg-card text-card-foreground shadow flex flex-col space-y-1.5 p-6">
                <h3 className="font-semibold leading-none tracking-tight">AI Consulting</h3>
              </div>
              <div className="rounded-xl border bg-card text-card-foreground shadow flex flex-col space-y-1.5 p-6">
                <h3 className="font-semibold leading-none tracking-tight">MLOps</h3>
              </div>
              <div className="rounded-xl border bg-card text-card-foreground shadow flex flex-col space-y-1.5 p-6">
                <h3 className="font-semibold leading-none tracking-tight">Data Engineering</h3>
              </div>
              <div className="rounded-xl border bg-card text-card-foreground shadow flex flex-col space-y-1.5 p-6">
                <h3 className="font-semibold leading-none tracking-tight">NLP Solution</h3>
              </div>
              <div className="rounded-xl border bg-card text-card-foreground shadow flex flex-col space-y-1.5 p-6">
                <h3 className="font-semibold leading-none tracking-tight">Generative AI Consulting</h3>
              </div>
              <div className="rounded-xl border bg-card text-card-foreground shadow flex flex-col space-y-1.5 p-6">
                <h3 className="font-semibold leading-none tracking-tight">Advanced-Data Analytics & Consulting</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
