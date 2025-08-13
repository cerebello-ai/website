'use client';

import React, { useEffect, useState } from 'react';

const AnimatedTeamHeading = () => {
  const teams = ['Ops', 'Eng', 'Support', 'Sales', 'Product'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teams.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [teams.length]);

  return (
    <h1 className="text-[35px] leading-[64px] font-normal tracking-tight whitespace-normal text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-[48px] lg:text-5xl">
      Help your{' '}
      <span className="relative inline-block w-[150px] sm:w-[200px]">
        <span className="opacity-0">°</span>
        {teams.map((team, index) => {
          const position = (index - currentIndex + teams.length) % teams.length;
          let transform = '';
          let opacity = 0;

          if (position === 0) {
            transform = 'translateY(-100%)';
            opacity = 1;
          } else if (position === 1) {
            transform = 'translateY(0)';
            opacity = 0;
          } else if (position === teams.length - 1) {
            transform = 'translateY(-200%)';
            opacity = 0.5;
          } else if (position === teams.length - 2) {
            transform = 'translateY(-300%)';
            opacity = 0.2;
          } else {
            transform = 'translateY(-400%)';
            opacity = 0;
          }

          return (
            <div
              key={team}
              className="absolute w-full text-center transition-all duration-500 ease-in-out"
              style={{
                transform,
                opacity,
              }}
            >
              <span
                className="inline-block bg-clip-text"
                style={{
                  background:
                    'linear-gradient(135deg, hsl(162, 17%, 86%) 0%, hsl(162, 30%, 70%) 50%, hsl(162, 40%, 55%) 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                }}
              >
                {team}
              </span>
            </div>
          );
        })}
      </span>{' '}
      team
      <br />
      <p className="pt-[.2em]">find information faster</p>
    </h1>
  );
};

export default AnimatedTeamHeading;
