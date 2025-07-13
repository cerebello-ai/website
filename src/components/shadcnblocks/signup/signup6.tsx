import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Signup6Props {
  heading?: string;
  signupText?: string;
  googleText?: string;
  loginText?: string;
  loginUrl?: string;
}

const Signup6 = ({
  heading = "Signup",
  googleText = "Sign up with Google",
  signupText = "Create an account",
  loginText = "Already have an account?",
  loginUrl = "#",
}: Signup6Props) => {
  return (
    <section className="h-screen">
      <div className="flex h-full items-center justify-center">
        <div className="mx-auto flex w-full flex-col items-center justify-center px-6 py-8 sm:w-[400px]">
          <div className="flex w-full justify-center">
            <h1 className="text-2xl font-semibold">{heading}</h1>
          </div>
          <div className="flex w-full flex-col gap-y-4 rounded-md py-8">
            <Input
              type="email"
              placeholder="Enter your email"
              required
              className="bg-background"
            />
            <Input
              type="password"
              placeholder="Enter your password"
              required
              className="bg-background"
            />
            <div className="flex w-full flex-col gap-y-2 pt-4">
              <Button type="submit" className="w-full">
                {signupText}
              </Button>
              <Button variant="outline" className="w-full">
                <FcGoogle className="mr-2 size-5" />
                {googleText}
              </Button>
            </div>
          </div>
          <div className="text-muted-foreground flex justify-center gap-1 text-sm">
            <p>{loginText}</p>
            <a
              href={loginUrl}
              className="text-primary font-medium hover:underline"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Signup6 };
