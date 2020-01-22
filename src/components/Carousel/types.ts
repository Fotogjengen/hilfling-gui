import { ReactNodeArray } from "react";
export interface CarouselProps {
  children: ReactNodeArray;
  delay: number;
  width?: number;
  height?: number;
  bottomNavigation?: boolean;
  bottomNavigationOpacity?: number;
  inactiveImageButtonColor?: string;
  activeImageButtonColor?: string;
  onClick?: (activeItem: number) => void;
}
