export interface BaseCarouselItem {
  title: string;
  image: string;
}

export interface CarouselItemProps extends BaseCarouselItem {
  height: number;
  width: number;
}

export interface CarouselItemsProps {
  items: BaseCarouselItem[];
  height: number;
  width: number;
}
