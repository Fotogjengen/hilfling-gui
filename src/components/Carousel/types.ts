import { ReactNodeArray } from "react";
import { DefaultProps } from "../../types";
export interface CarouselProps extends DefaultProps{
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
