import { HandHelping, ShoppingCart, Users, Zap } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Hero132 = () => {
  return (
    <section className="font-manrope px-8 py-12 md:py-20">
      <div className="relative mx-auto w-full max-w-[77rem]">
        <div className="relative z-10 grid grid-cols-1 items-center gap-20 xl:grid-cols-2 xl:grid-rows-[48.875rem] xl:gap-0">
          {/* Image Section (Left Side) */}
          <div className="relative self-stretch justify-self-stretch bg-purple-300">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt=""
              className="h-full object-cover"
            />

            {/* White Card - Left Side Corner */}
            <div className="bg-background absolute left-4 top-4 rounded-lg p-6">
              <p className="text-muted-foreground text-sm">Total Enrollments</p>
              <p className="text-2xl font-bold">15,000+</p>
            </div>

            {/* White Card - Left Bottom Corner */}
            <div className="bg-background absolute bottom-4 left-4 min-w-[280px] rounded-lg p-6">
              <div className="flex flex-col gap-4">
                <Avatar className="flex size-8 shrink-0 rounded-full ring-2 ring-black">
                  <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" alt="" />
                </Avatar>
                <div>
                  <p className="text-3xl font-bold">100+ Courses</p>
                </div>
              </div>
              <div className="mt-24">
                <div className="flex justify-between">
                  <p className="text-muted-foreground mb-4 text-sm">
                    Completion Rate
                  </p>
                  <p className="mb-4">95%</p>
                </div>
                <Button variant="default" size="sm" className="w-full py-8">
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>

          {/* Content Section (Right Side) */}
          <div className="flex flex-col gap-4 text-center lg:gap-12 lg:text-left xl:pl-20">
            {/* Title */}
            <h1 className="text-[3.375rem] font-extrabold leading-none md:text-6xl lg:text-[5rem]">
              Transform your{" "}
              <span className="after:bg-muted2 relative after:absolute after:left-0 after:top-[15%] after:z-[-1] after:inline-block after:h-[70%] after:w-[100%] after:content-['']">
                learning
              </span>
              journey.
            </h1>

            {/* Description and Buttons */}
            <div className="flex flex-col gap-6">
              <p className="text-xl">
                Effortlessly access engaging courses that make learning
                impactful.
              </p>
              <div className="flex flex-col items-center gap-2 md:flex-row">
                <Button asChild variant="default" size="lg" className="py-8">
                  <a href="#">
                    <ShoppingCart className="h-6 w-6 fill-white" />
                    <div>Explore Courses</div>
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="py-8">
                  <a href="#">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Dashed Lines */}
        <div className="absolute left-0 top-0 -z-10 flex h-[175%] w-full justify-between">
          <div className="h-full w-[1px] border-r border-dashed border-black/20" />
          <div className="h-full w-[1px] border-r border-dashed border-black/20" />
          <div className="h-full w-[1px] border-r border-dashed border-black/20" />
          <div className="h-full w-[1px] border-r border-dashed border-black/20" />
          <div className="h-full w-[1px] border-r border-dashed border-black/20" />
        </div>

        {/* Horizontal Dashed Lines */}
        <div className="absolute left-0 top-0 w-full border-t border-dashed border-black/20" />
      </div>

      {/* New Section Below */}
      <div className="mt-20 text-center">
        <h2 className="text-muted-foreground mb-12 text-2xl font-medium">
          FEATURES
        </h2>
        <h2 className="mb-6 text-4xl font-bold">Why Choose Us?</h2>
        <div className="mx-auto mt-10 flex max-w-5xl flex-col md:flex-row">
          <div className="flex grow basis-0 flex-col items-center p-4">
            <div className="mb-6 flex size-14 items-center justify-center rounded-md bg-black">
              <HandHelping className="w-6 text-white" />
            </div>
            <h3 className="mb-2 font-semibold">Expert Instructors</h3>
            <p className="text-muted-foreground text-sm">
              Learn from industry experts with years of teaching experience.
            </p>
          </div>

          <div className="flex grow basis-0 flex-col items-center p-4">
            <div className="mb-6 flex size-14 items-center justify-center rounded-md bg-black">
              <Users className="w-6 text-white" />
            </div>
            <h3 className="mb-2 font-semibold">Interactive Learning</h3>
            <p className="text-muted-foreground text-sm">
              Engage with interactive lessons and hands-on projects.
            </p>
          </div>

          <div className="flex grow basis-0 flex-col items-center p-4">
            <div className="mb-6 flex size-14 items-center justify-center rounded-md bg-black">
              <Zap className="w-6 text-white" />
            </div>
            <h3 className="mb-2 font-semibold">Flexible Scheduling</h3>
            <p className="text-muted-foreground text-sm">
              Study at your own pace with flexible course schedules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero132 };
