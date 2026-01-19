import React from "react";

function Hero() {
  return (
    <section className="bg-black min-h-screen flex items-center justify-center">
      <div className="text-center max-w-3xl -mt-16 px-4">
        {/* Badge */}
        <div className="mb-4 flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 px-4 py-1 text-xs text-white">
            See what’s new
            <span className="text-white/50">|</span>
            <span className="text-sky-300">AI Diagram</span>
          </span>
        </div>

        <h1 className="text-4xl font-bold text-sky-300 leading-tight sm:text-6xl">
          Where ideas become
        </h1>
        <h1 className="mt-1 text-4xl font-bold text-white leading-tight sm:text-6xl">
          documents and diagrams.
        </h1>

        <p className="mt-4 text-base text-slate-300 sm:text-lg">
          Write, draw, and build diagrams — all in one workspace
        </p>

        <div className="mt-6 flex justify-center">
          <a
            href="#"
            className="rounded bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-slate-200"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
