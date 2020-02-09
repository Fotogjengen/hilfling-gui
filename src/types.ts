export interface DefaultProps {
  /** Used to add style to components */
  className?: any;
}

export interface BaseCarouselItem {
  title: string;
  image: string;
}


type UKA = "uka";
type SAMFUNDET = "samfundet";
type ISFIT = "isfit";
type ANNET = "annet";

export type EventType = UKA | SAMFUNDET | ISFIT | ANNET;

