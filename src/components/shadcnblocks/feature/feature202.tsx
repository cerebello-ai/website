import {
  Building2,
  CircleDot,
  Compass,
  Home,
  Landmark,
  LayoutGrid,
} from 'lucide-react';

const Feature202 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-muted-foreground text-xs md:text-sm">
            ARCHITECTURE
          </div>
          <h2 className="mt-4 mb-8 text-4xl font-semibold text-pretty md:text-6xl">
            Modern solutions. Timeless design.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Residential, commercial, and urban planning. Transform spaces into
            experiences with our comprehensive architectural solutions.
          </p>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <a
            href="#"
            className="group border-border relative isolate h-80 overflow-hidden rounded-2xl border transition-transform duration-300 hover:-translate-y-0.5 lg:col-span-2"
          >
            <div className="from-primary absolute inset-0 -z-10 bg-linear-to-t to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1647517649469-ba454dc72896?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="absolute inset-0 -z-20 size-full rounded-2xl object-cover grayscale-100 transition-all duration-300 group-hover:grayscale-50"
            />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="border-background/20 bg-background/15 flex size-12 items-center justify-center rounded-xl border backdrop-blur-sm">
                <Building2
                  className="text-background size-5"
                  strokeWidth={1.5}
                />
              </span>
              <div>
                <h3 className="text-background font-medium">
                  Sustainable Design
                </h3>
                <p className="text-background/70 mt-2">
                  Create eco-friendly spaces that blend innovation with
                  environmental responsibility. Utilizing renewable materials
                  and energy-efficient solutions for tomorrow's world.
                </p>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="group border-border relative isolate h-80 overflow-hidden rounded-2xl border transition-transform duration-300 hover:-translate-y-0.5"
          >
            <div className="from-primary absolute inset-0 -z-10 bg-linear-to-t to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1698516923132-b0236bc8f3ef?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="absolute inset-0 -z-20 size-full rounded-2xl object-cover grayscale-100 transition-all duration-300 group-hover:grayscale-50"
            />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="border-background/20 bg-background/15 flex size-12 items-center justify-center rounded-xl border backdrop-blur-sm">
                <Landmark
                  className="text-background size-5"
                  strokeWidth={1.5}
                />
              </span>
              <div>
                <h3 className="text-background font-medium">Urban Planning</h3>
                <p className="text-background/70 mt-2">
                  Design thriving communities that balance density with
                  livability, fostering growth.
                </p>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="group border-border relative isolate h-80 overflow-hidden rounded-2xl border transition-transform duration-300 hover:-translate-y-0.5"
          >
            <div className="from-primary absolute inset-0 -z-10 bg-linear-to-t to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1586869871566-d8e41dd50318?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="absolute inset-0 -z-20 size-full rounded-2xl object-cover grayscale-100 transition-all duration-300 group-hover:grayscale-50"
            />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="border-background/20 bg-background/15 flex size-12 items-center justify-center rounded-xl border backdrop-blur-sm">
                <LayoutGrid
                  className="text-background size-5"
                  strokeWidth={1.5}
                />
              </span>
              <div>
                <h3 className="text-background font-medium">
                  Digital Integration
                </h3>
                <p className="text-background/70 mt-2">
                  Blend smart technology with architectural design, creating
                  responsive spaces for living.
                </p>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="group border-border relative isolate h-80 overflow-hidden rounded-2xl border transition-transform duration-300 hover:-translate-y-0.5 lg:col-span-2"
          >
            <div className="from-primary absolute inset-0 -z-10 bg-linear-to-t to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1588742415209-69dbb64791b6?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="absolute inset-0 -z-20 size-full rounded-2xl object-cover grayscale-100 transition-all duration-300 group-hover:grayscale-50"
            />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="border-background/20 bg-background/15 flex size-12 items-center justify-center rounded-xl border backdrop-blur-sm">
                <Compass className="text-background size-5" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="text-background font-medium">BIM Solutions</h3>
                <p className="text-background/70 mt-2">
                  From concept to construction, leverage advanced modeling tools
                  and AI-driven analytics for precise and efficient project
                  delivery.
                </p>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="group border-border relative isolate h-80 overflow-hidden rounded-2xl border transition-transform duration-300 hover:-translate-y-0.5 lg:col-span-2"
          >
            <div className="from-primary absolute inset-0 -z-10 bg-linear-to-t to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1587278163304-99d65f6a58f0?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="absolute inset-0 -z-20 size-full rounded-2xl object-cover grayscale-100 transition-all duration-300 group-hover:grayscale-50"
            />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="border-background/20 bg-background/15 flex size-12 items-center justify-center rounded-xl border backdrop-blur-sm">
                <Home className="text-background size-5" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="text-background font-medium">
                  Heritage Preservation
                </h3>
                <p className="text-background/70 mt-2">
                  Restore and adapt historical structures while preserving their
                  cultural significance and architectural heritage for future
                  generations.
                </p>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="group border-border relative isolate h-80 overflow-hidden rounded-2xl border transition-transform duration-300 hover:-translate-y-0.5"
          >
            <div className="from-primary absolute inset-0 -z-10 bg-linear-to-t to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1589100787575-fad1dcaa9d17?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="absolute inset-0 -z-20 size-full rounded-2xl object-cover grayscale-100 transition-all duration-300 group-hover:grayscale-50"
            />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="border-background/20 bg-background/15 flex size-12 items-center justify-center rounded-xl border backdrop-blur-sm">
                <CircleDot
                  className="text-background size-5"
                  strokeWidth={1.5}
                />
              </span>
              <div>
                <h3 className="text-background font-medium">
                  Interior Innovation
                </h3>
                <p className="text-background/70 mt-2">
                  Transform interior spaces with cutting-edge design solutions
                  for aesthetics functionality.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export { Feature202 };
