const Hero137 = () => {
  return (
    <section className="bg-muted-2 relative flex flex-col gap-20 px-10 py-16 font-sans lg:h-svh lg:flex-row lg:items-end lg:justify-start lg:pr-0 lg:pl-20">
      <div className="relative z-10 flex max-w-[51rem] flex-col gap-10">
        <h1 className="text-foreground text-5xl font-medium md:text-7xl lg:text-8xl lg:font-normal">
          The all-in-one writing space
        </h1>
        <p className="text-muted-foreground max-w-[27.5rem] text-lg">
          Our app unites your notes, documents, and writing projects into
          collaborative workspaces powered by AI.
        </p>
      </div>
      <div className="static top-[4rem] right-0 bottom-[4rem] left-[35rem] w-full overflow-hidden lg:absolute lg:w-auto">
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
          alt=""
          className="block h-full w-full object-cover object-top-left"
        />
      </div>
    </section>
  );
};

export { Hero137 };
