import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Carousel from "./index";
import CarouselItems from "../CarouselItem";
import { BaseCarouselItem } from "../../types";

const width = 900;
const height = 600;
const items: BaseCarouselItem[] = [
  {
    title: "Test",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgGfL49kTB0zjHmH-pV8rK8-QWcRawdK7qASmj32j1BnWZl2UO&s",
  },
  {
    title: "Test",
    image:
      "http://images6.fanpop.com/image/photos/39900000/IMG-6250-PNG-kion-39961687-1024-577.png",
  },
  {
    title: "Test",
    image: "http://qnimate.com/wp-content/uploads/2014/03/images2.jpg",
  },
  {
    title: "Test",
    image:
      "https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg",
  },
  {
    title: "Test",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgGfL49kTB0zjHmH-pV8rK8-QWcRawdK7qASmj32j1BnWZl2UO&s",
  },
  {
    title: "Test",
    image:
      "http://images6.fanpop.com/image/photos/39900000/IMG-6250-PNG-kion-39961687-1024-577.png",
  },
  {
    title: "Test",
    image: "http://qnimate.com/wp-content/uploads/2014/03/images2.jpg",
  },
  {
    title: "Test",
    image:
      "https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg",
  },
  {
    title: "Test",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgGfL49kTB0zjHmH-pV8rK8-QWcRawdK7qASmj32j1BnWZl2UO&s",
  },
  {
    title: "Test",
    image:
      "http://images6.fanpop.com/image/photos/39900000/IMG-6250-PNG-kion-39961687-1024-577.png",
  },
  {
    title: "Test",
    image: "http://qnimate.com/wp-content/uploads/2014/03/images2.jpg",
  },
  {
    title: "Test",
    image:
      "https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg",
  },
];

storiesOf("Carousel", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Autoscroll", () => (
    <Carousel delay={5000} width={width} height={height}>
      {CarouselItems({ width, height, items })}
    </Carousel>
  ));
