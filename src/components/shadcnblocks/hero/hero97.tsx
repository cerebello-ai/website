"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
  })
  .required({ email: true });

function HeroFrom() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="mx-auto flex w-full max-w-full flex-col items-start justify-center gap-2 sm:flex-row md:max-w-[30rem]">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    id="emailInput"
                    placeholder="Your email"
                    className="block w-full flex-1 rounded-lg px-4 py-2 text-base leading-normal"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="h-fit w-full rounded-lg px-4 py-2 text-center text-base leading-normal sm:w-fit"
          >
            Request early access
          </Button>
        </div>
      </form>
    </Form>
  );
}

const Hero97 = () => {
  return (
    <section className="overflow-hidden bg-muted bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2736%27%20height%3D%2736%27%20viewBox%3D%270%200%2036%2036%27%20fill%3D%27none%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Ccircle%20opacity%3D%270.07%27%20cx%3D%2718%27%20cy%3D%2718%27%20r%3D%272%27%20fill%3D%27%230F0F0E%27/%3E%3C/svg%3E')] bg-repeat py-12 font-sans md:py-20">
      <div className="flex flex-col items-center gap-20">
        <div className="mx-auto flex w-full max-w-[43.75rem] flex-col items-center gap-6 px-4">
          <h1 className="text-center font-serif text-4xl text-foreground md:text-5xl">
            Where creators thrive
          </h1>
          <p className="text-center text-xl/normal font-light text-balance text-muted-foreground">
            We’re creating a fresh approach to organizing and collaborating on
            assets like design, web, video, and more.
          </p>
          <HeroFrom />
        </div>
        <div className="w-full">
          <div className="relative mx-auto w-full max-w-[87.5rem]">
            <div className="relative z-20 mx-auto w-full">
              <div className="border-muted2 mx-10 w-full max-w-[calc(100%-5rem)] overflow-hidden rounded-lg border shadow-xl">
                <AspectRatio ratio={2.191222571}>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt=""
                    className="size-full object-cover object-center"
                  />
                </AspectRatio>
              </div>
            </div>
            <div className="border-muted2 absolute top-1/2 -right-1/2 w-[65%] max-w-[68.75rem] -translate-y-1/2 overflow-hidden rounded-lg border shadow-md md:w-[80%]">
              <AspectRatio ratio={2.191222571}>
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                  alt=""
                  className="size-full object-cover object-center"
                />
              </AspectRatio>
            </div>
            <div className="border-muted2 absolute top-1/2 -left-1/2 w-[65%] max-w-[68.75rem] -translate-y-1/2 overflow-hidden rounded-lg border shadow-md md:w-[80%]">
              <AspectRatio ratio={2.191222571}>
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                  alt=""
                  className="size-full object-cover object-center"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero97 };
