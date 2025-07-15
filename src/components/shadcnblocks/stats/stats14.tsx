'use client';

import React, { useEffect, useState } from 'react';

import NumberFlow from '@number-flow/react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const MotionNumberFlow = motion.create(NumberFlow);

import { StatsProps } from '@/components/shadcnblocks/types/common';

interface Stats14Props extends StatsProps {
  countdownText?: string;
  endDate?: Date;
  startDate?: Date;
  buttonText?: string;
  showBorder?: boolean;
  borderHeight?: string;
}

const Stats14 = ({
  title = '50 new blocks every month',
  buttonText = 'Join The Waitlist',
  endDate = new Date('2025-12-31'),
  startDate,
  showBorder = true,
  borderHeight = 'h-114',
  className,
}: Stats14Props) => {
  return (
    <section className={`py-32 ${className || ''}`}>
      <div className="container flex items-center justify-center">
        <DottedDiv className={`${borderHeight} w-full`} showBorder={showBorder}>
          <div className="bg-muted/30 flex h-full w-full flex-col items-center justify-center">
            <p className="tracking-tight opacity-50 md:text-lg">{title}</p>
            <AnimatedNumberCountdown
              endDate={endDate}
              startDate={startDate}
              className="my-4"
            />
            <Button
              variant="secondary"
              className="group text-md mt-7 flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight shadow-none"
            >
              <span>{buttonText}</span>
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
            </Button>
          </div>
        </DottedDiv>
      </div>
    </section>
  );
};

export { Stats14 };

const DottedDiv = ({
  children,
  className,
  showBorder = true,
}: {
  children: React.ReactNode;
  className?: string;
  showBorder?: boolean;
}) => (
  <div
    className={cn('relative h-full w-full overflow-hidden sm:p-4', className)}
  >
    {showBorder && (
      <>
        <div className="bg-muted absolute top-4 left-0 hidden h-[1.5px] w-[100%] sm:block" />
        <div className="bg-muted absolute bottom-4 left-0 hidden h-[1.5px] w-[100%] sm:block" />
        <div className="bg-muted absolute -top-25 left-4 hidden h-[130%] w-[1.5px] sm:block" />
        <div className="bg-muted absolute -top-25 right-4 hidden h-[130%] w-[1.5px] sm:block" />
        <div className="bg-foreground absolute top-[12.5px] left-[12.5px] z-10 hidden size-2 rounded-full sm:block" />
        <div className="bg-foreground absolute top-[12.5px] right-[12.5px] z-10 hidden size-2 rounded-full sm:block" />
        <div className="bg-foreground absolute bottom-[12.5px] left-[12.5px] z-10 hidden size-2 rounded-full sm:block" />
        <div className="bg-foreground absolute right-[12.5px] bottom-[12.5px] z-10 hidden size-2 rounded-full sm:block" />
      </>
    )}
    {children}
  </div>
);

interface CountdownProps {
  endDate: Date;
  startDate?: Date;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function AnimatedNumberCountdown({
  endDate,
  startDate,
  className,
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const start = startDate ? new Date(startDate) : new Date();
      const end = new Date(endDate);
      const difference = end.getTime() - start.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endDate, startDate]);

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="flex flex-col items-center">
        <MotionNumberFlow
          value={timeLeft.days}
          className="text-3xl font-semibold tracking-tight sm:text-5xl"
          format={{ minimumIntegerDigits: 2 }}
        />
        <span className="text-sm text-gray-500">Days</span>
      </div>
      <div className="text-2xl font-semibold">:</div>
      <div className="flex flex-col items-center">
        <MotionNumberFlow
          value={timeLeft.hours}
          className="text-3xl font-semibold tracking-tight sm:text-5xl"
          format={{ minimumIntegerDigits: 2 }}
        />
        <span className="text-sm text-gray-500">Hours</span>
      </div>
      <div className="text-2xl font-semibold">:</div>
      <div className="flex flex-col items-center">
        <MotionNumberFlow
          value={timeLeft.minutes}
          className="text-3xl font-semibold tracking-tight sm:text-5xl"
          format={{ minimumIntegerDigits: 2 }}
        />
        <span className="text-sm text-gray-500">Minutes</span>
      </div>
      <div className="text-2xl font-semibold">:</div>
      <div className="flex flex-col items-center">
        <MotionNumberFlow
          value={timeLeft.seconds}
          className="text-3xl font-semibold tracking-tight sm:text-5xl"
          format={{ minimumIntegerDigits: 2 }}
        />
        <span className="text-sm text-gray-500">Seconds</span>
      </div>
    </div>
  );
}
