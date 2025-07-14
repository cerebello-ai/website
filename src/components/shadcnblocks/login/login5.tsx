import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Login5 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2">
          <div className="relative overflow-hidden py-10">
            <div className="mx-auto my-auto flex h-full w-full max-w-md flex-col justify-center gap-4 p-6">
              <div className="mb-6 flex flex-col items-center text-center">
                <a
                  href="https://www.shadcnblocks.com"
                  className="mb-6 flex items-center gap-2"
                >
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-wordmark.svg"
                    className="max-h-12"
                    alt="Shadcn UI Navbar"
                  />
                </a>
              </div>
              <div className="bg-background w-full rounded-md">
                <div>
                  <div className="grid gap-4">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="remember"
                          className="border-muted-foreground"
                        />
                        <label
                          htmlFor="remember"
                          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Remember me
                        </label>
                      </div>
                      <a href="#" className="text-primary text-sm font-medium">
                        Forgot password
                      </a>
                    </div>
                    <Button type="submit" className="mt-2 w-full">
                      Login
                    </Button>
                    <Button variant="outline" className="w-full">
                      <img
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg"
                        className="mr-2 size-4"
                        alt="Google"
                      />
                      Login with Google
                    </Button>
                  </div>
                </div>
              </div>
              <div className="text-muted-foreground mx-auto mt-3 flex justify-center gap-1 text-sm">
                <p>Don&apos; have an account?</p>
                <a href="#" className="text-primary font-medium">
                  Signup
                </a>
              </div>
            </div>
          </div>

          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder"
            className="hidden h-full max-h-screen rounded-md object-cover lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export { Login5 };
