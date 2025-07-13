"use client";
import {
  AudioLines,
  Captions,
  Eye,
  Languages,
  ListMinus,
  LucideIcon,
  ScanFace,
  TextQuote,
} from "lucide-react";
import { useRef } from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface card {
  video: string;
  Icon: LucideIcon;
  title: string;
  link: string;
  summary: string;
}

const List: Array<card> = [
  {
    video: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-1.mp4",
    Icon: Eye,
    title: "Eye Contact",
    link: "#",
    summary:
      "Go on, read your lines. AI will make it look like you were staring at the camera the entire time.",
  },
  {
    video: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-2.mp4",
    Icon: Languages,
    title: "Languages",
    link: "#",
    summary:
      "Share your content with audiences worldwide without ever leaving your seat.",
  },
  {
    video: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-3.mp4",
    Icon: AudioLines,
    title: "Studio Sound",
    link: "#",
    summary:
      "Forget expensive mics and soundproofing—our app regenerative AI eliminates noise and improves voice quality.",
  },
  {
    video: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-5.mp4",
    Icon: ListMinus,
    title: "Remove filler words",
    link: "#",
    summary:
      "Quickly remove all your 'ums,' 'uhs,' and other filler words—saving you hours of editing.",
  },
  {
    video: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-1.mp4",
    Icon: ScanFace,
    title: "Green Screen",
    link: "#",
    summary:
      "No need to tidy up—Our app’s AI will erase your background, letting you choose a new one.",
  },
  {
    video: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-2.mp4",
    Icon: TextQuote,
    title: "Transcription",
    link: "#",
    summary:
      "Simply drag in an audio or video file, and AI will transcribe it in no time. This is where the magic happens.",
  },
  {
    video: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-3.mp4",
    Icon: Captions,
    title: "Captions",
    link: "#",
    summary:
      "Add captions, enhance accessibility, boost views, and showcase your branding—all with just a few clicks.",
  },
];

const CarouselCard = ({ video, Icon, title, link, summary }: card) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  return (
    <a
      href={link}
      className="group block h-full"
      onMouseEnter={() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <Card className="h-full min-h-[24rem] bg-muted p-8 shadow-none transition-all group-hover:shadow-md">
        <CardContent className="p-0">
          <div className="relative">
            <AspectRatio
              ratio={16 / 9}
              className="overflow-hidden rounded-[0.5rem]"
            >
              <video
                src={video}
                className="block size-full object-cover object-center"
                ref={videoRef}
                controls={false}
                muted={true}
              />
            </AspectRatio>
            <div className="absolute -top-3 -left-2 flex size-9 rounded-[0.5rem] bg-primary">
              <Icon className="m-auto size-4 stroke-primary-foreground" />
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-2">
            <CardTitle className="text-2xl leading-[130%] font-normal tracking-[-0.48px] text-foreground">
              {title}
            </CardTitle>
            <CardDescription className="text-lg leading-[150%] tracking-[-0.36px]">
              {summary}
            </CardDescription>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};
const Feature215 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto mb-16 flex max-w-[47.5rem] flex-col gap-6">
          <h2 className="text-center font-serif text-4xl md:text-5xl xl:text-7xl">
            AI-powered editing in an instant
          </h2>
          <p className="text-center text-xl">
            Refine your appearance, improve your audio, and tackle all the
            obvious, tedious edits—instantly with just a few clicks, thanks to
            your AI editing assistant.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="py-4">
            {List.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <CarouselCard {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex w-full justify-center gap-4">
            <CarouselPrevious className="static size-12" />
            <CarouselNext className="static size-12" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export { Feature215 };
