import { Check, Minus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type PlanFeature = {
  feature: string;
  pro: string | boolean;
  entreprise: string | boolean;
};

const planData: PlanFeature[] = [
  {
    feature: "Projects",
    pro: "Unlimited",
    entreprise: "Unlimited",
  },
  {
    feature: "Integrations",
    pro: "Unlimited",
    entreprise: "Unlimited",
  },
  { feature: "Live Collaboration", pro: true, entreprise: true },
  {
    feature: "Custom permissions",
    pro: true,
    entreprise: true,
  },
  {
    feature: "Team members",
    pro: "$5/month per member",
    entreprise: "$5/month per member",
  },
  {
    feature: "Basic reports",
    pro: true,
    entreprise: true,
  },
  { feature: "Advanced reports", pro: false, entreprise: true },
  { feature: "Export data", pro: false, entreprise: true },
];
const Pricing5 = () => {
  return (
    <section className="py-32">
      <div className="container max-w-5xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="mb-2 text-3xl font-semibold lg:text-5xl">Pricing</h2>
          <p className="text-muted-foreground lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:gap-0">
          <Card className="flex w-full flex-col justify-between gap-8 text-center lg:rounded-r-none lg:border-r-0">
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <p className="text-muted-foreground">Lorem ipsum dolor sit.</p>
            </CardHeader>
            <CardContent>
              <span className="text-5xl font-bold">$10</span>
              <p className="mt-3 text-muted-foreground">per user per month</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
          <Separator
            orientation="vertical"
            className="hidden h-auto lg:block"
          />
          <Card className="flex w-full flex-col justify-between gap-8 rounded-l-none border-l-0 text-center">
            <CardHeader>
              <CardTitle>Entreprise</CardTitle>
              <p className="text-muted-foreground">Lorem ipsum dolor sit.</p>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">Contact us</span>
              <p className="mt-3 text-muted-foreground">Get in touch with us</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Get Started
              </Button>
            </CardFooter>
          </Card>
        </div>
        <Table className="mt-10 min-w-[420px]">
          <TableHeader>
            <TableRow className="hover:bg-background">
              <TableHead></TableHead>
              <TableHead className="font-bold text-primary">Pro</TableHead>
              <TableHead className="font-bold text-primary">
                Entreprise
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {planData.map((item) => (
              <TableRow key={item.feature} className="hover:bg-background">
                <TableCell>{item.feature}</TableCell>
                <TableCell>
                  {typeof item.pro === "boolean" ? (
                    item.pro ? (
                      <Check className="size-6" />
                    ) : (
                      <Minus className="size-6" />
                    )
                  ) : (
                    item.pro
                  )}
                </TableCell>
                <TableCell>
                  {typeof item.entreprise === "boolean" ? (
                    item.entreprise ? (
                      <Check className="size-6" />
                    ) : (
                      <Minus className="size-6" />
                    )
                  ) : (
                    item.entreprise
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export { Pricing5 };
