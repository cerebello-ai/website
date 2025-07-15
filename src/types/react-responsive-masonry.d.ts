declare module 'react-responsive-masonry' {
  import { ReactNode } from 'react';

  export interface ResponsiveMasonryProps {
    columnsCountBreakPoints?: Record<number, number>;
    children: ReactNode;
    className?: string;
  }

  export interface MasonryProps {
    columnsCount?: number;
    children: ReactNode;
    className?: string;
    gutter?: string;
  }

  export const ResponsiveMasonry: React.FC<ResponsiveMasonryProps>;
  export default function Masonry(props: MasonryProps): JSX.Element;
}
