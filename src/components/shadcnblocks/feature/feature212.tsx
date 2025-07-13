import { Route } from "lucide-react";

interface CardData {
  title: string;
  summary: string;
  className: string;
  Component: React.FC;
}

const CARDS: Array<CardData> = [
  {
    title: "Improved Interactivity",
    summary:
      "Buttons provide a clear call to action, making interfaces more intuitive and interactive for all users.",
    className: "lg:col-span-2",
    Component: () => (
      <div className="ml-auto aspect-[0.581818182] w-full max-w-[35%] overflow-hidden rounded-tl-2xl">
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
          alt=""
          className="size-full object-cover object-center"
        />
      </div>
    ),
  },
  {
    title: "Focused User Attention",
    summary:
      "Modals isolate important content or decisions, helping users stay focused on critical tasks and workflows.",
    className: "lg:col-span-2",
    Component: () => (
      <div className="relative overflow-hidden">
        <div className="relative bottom-0 left-1/2 -translate-x-1/2 overflow-hidden">
          <div className="mb-2 flex items-start justify-center gap-[2%]">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-muted-2 aspect-video w-[6.25rem] shrink-0 rounded-lg"
              ></div>
            ))}
          </div>
          <div className="mb-2 flex items-start justify-center gap-[2%]">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="bg-muted-2 aspect-video w-[6.25rem] shrink-0 rounded-lg"
              ></div>
            ))}
          </div>
          <div className="flex items-start justify-center gap-[2%]">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-muted-2 aspect-video w-[6.25rem] shrink-0 rounded-lg"
              ></div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Enhanced Clarity",
    summary:
      "Tooltips offer extra context without cluttering the interface, aiding comprehension and user guidance during interaction.",
    className: "lg:col-span-2",
    Component: () => (
      <div className="">
        <div className="relative aspect-[2.234375] w-full overflow-hidden">
          <div className="relative bottom-0 right-0 flex w-fit justify-end gap-[5%]">
            <div
              style={{
                top: "0",
                right: "0",
                rotate: "2.6deg",
              }}
              className="aspect-[0.845360825] w-[35%] shrink-0 translate-y-[9.5%] overflow-hidden rounded-[0.5rem] shadow-md"
            >
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                alt=""
                className="block size-full object-cover object-center"
              />
            </div>
            <div
              style={{
                top: "0",
                right: "0",
                rotate: "-2.8deg",
              }}
              className="aspect-[0.845360825] w-[35%] shrink-0 translate-y-[14%] overflow-hidden rounded-[0.5rem] shadow-md"
            >
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                alt=""
                className="block size-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Streamlined Navigation",
    summary:
      "Dropdown menus reduce screen clutter by hiding complex options until needed, simplifying user decision-making.",
    className: "lg:col-span-3",
    Component: () => (
      <div className="size-full p-4">
        <div className="flex aspect-[3.556692913] size-full min-h-[11.25rem]">
          <div className="bg-background m-auto flex aspect-square w-12 rounded-xl shadow-2xl lg:w-[10%] xl:rounded-2xl">
            <Route className="stroke-foreground m-auto size-6" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Efficient Space Usage",
    summary:
      "Tabs allow users to switch views easily, organizing content in a user-friendly way for better discoverability.",
    className: "lg:col-span-3 [&_p]:max-w-[22.5rem]",
    Component: () => {
      const FILLER_WORDS = [
        {
          word: "Noise",
          className: "right-[18%] top-0 xl:top-[12%]",
        },
        {
          word: "Confusion",
          className: "right-[0%] top-[28%]",
        },
        {
          word: "Inaccessibility",
          className: "left-[0%] top-[44%]",
        },
        {
          word: "Clutter",
          className: "hidden sm:block left-[65%] top-[44%]",
        },
        {
          word: "Inconsistency",
          className: "right-[35%] top-[60%]",
        },
        {
          word: "Inefficiency",
          className: "right-[8%] top-[75%]",
        },
      ];
      return (
        <div className="relative aspect-[3.556692913] size-full min-h-[14.375rem] xl:static">
          {FILLER_WORDS.map((item, i) => (
            <div
              key={`filler-words-${i}`}
              className={`${item.className} text-black/18 absolute w-fit select-none text-2xl font-medium tracking-tighter line-through sm:text-[2rem] md:text-[2rem] lg:text-[1.75rem] xl:text-4xl`}
            >
              {item.word}
            </div>
          ))}
        </div>
      );
    },
  },
  {
    title: "Content Organization",
    summary:
      "Accordions let users manage and reveal information progressively, making long content more digestible and accessible.",
    className: "lg:col-span-2",
    Component: () => (
      <div className="flex size-full items-end justify-end">
        <div className="aspect-[1.541436464] w-1/2 overflow-hidden rounded-tl-2xl">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg"
            className="block size-full object-cover object-center"
            alt=""
          />
        </div>
      </div>
    ),
  },
  {
    title: "User Input Collection",
    summary:
      "Input fields allow for data entry and personalization, enabling dynamic and responsive UI experiences across devices.",
    className: "lg:col-span-2",
    Component: () => (
      <div className="flex size-full min-h-[12.5rem] items-end justify-center">
        <div>
          <div className="aspect-[16/9] max-h-[300px] w-full overflow-hidden">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg"
              className="block object-cover object-top"
              alt=""
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Visual Hierarchy",
    summary:
      "Cards compartmentalize information, improving layout structure and scannability for enhanced user content engagement.",
    className: "lg:col-span-2",
    Component: () => (
      <div className="relative min-h-[12.5rem] whitespace-nowrap text-4xl md:text-5xl lg:text-3xl xl:text-4xl">
        <div className="absolute bottom-32 right-0 rotate-6 lg:bottom-24">
          Get <span className="bg-blue-500 text-white">Started with</span>
        </div>
        <div className="-rotate-4 absolute bottom-7 right-4 bg-black text-white">
          Shadcnblocks.com
        </div>
      </div>
    ),
  },
];

const Card = ({ title, summary, className, Component }: CardData) => {
  return (
    <div
      className={`bg-muted relative overflow-hidden rounded-2xl ${className}`}
    >
      <div className="flex size-full flex-col justify-between gap-10">
        <div className="flex w-full flex-col gap-4 pl-6 pr-6 pt-6">
          <h2 className="text-lg font-semibold leading-none">{title}</h2>
          <p>{summary}</p>
        </div>
        <Component />
      </div>
    </div>
  );
};

const Feature212 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
          {CARDS.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature212 };
