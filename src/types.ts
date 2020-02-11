export interface DefaultProps {
  /** Used to add style to components */
  className?: any;
}

export interface BaseCarouselItem {
  title: string;
  image: string;
}

type EventCard = "EventCard";
type GjengfotoCard = "GjengfotoCard";

export type CardType = EventCard | GjengfotoCard;
