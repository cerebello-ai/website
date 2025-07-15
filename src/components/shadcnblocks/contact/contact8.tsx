const Contact8 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center">
          <h1 className="mb-3 text-5xl font-semibold">Contact</h1>
          <p className="text-muted-foreground text-lg">
            Find the right solution
          </p>
        </div>
        <div className="mx-auto mt-24 grid max-w-7xl gap-4 md:grid-cols-2">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder"
            className="h-full rounded-lg object-cover"
          />
          <div className="bg-accent flex flex-col gap-2 rounded-lg p-2">
            <div className="bg-background flex h-full flex-col justify-between gap-6 rounded-lg p-6">
              <p className="text-2xl">Email</p>
              <div className="flex flex-col">
                <a>help@example.com</a>
                <a>support@example.com</a>
              </div>
            </div>
            <div className="bg-background flex h-full flex-col justify-between gap-6 rounded-md p-6">
              <p className="text-2xl">Offices</p>
              <div className="grid gap-8 md:grid-cols-2 md:gap-4">
                <div>
                  <p className="text-muted-foreground mb-2 text-xl md:mb-4">
                    New York
                  </p>
                  <p>123 6th St. Melbourne, FL 32904, USA</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2 text-xl md:mb-4">
                    London
                  </p>
                  <p>123 3rd St. London, TL 32904, UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact8 };
