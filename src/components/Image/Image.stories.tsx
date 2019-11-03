import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Image, ProfileImage } from ".";

storiesOf("Image", module)
  .addDecorator(withInfo({ inline: true }))
  .add("Image", () => (
    <Image
      src={
        "https://pbs.twimg.com/profile_images/3572978953/8c522d3ea384cd42e46a4a2498300c35_400x400.jpeg"
      }
      alt={"image"}
    />
  ))
  .add("ProfileImage", () => {
    const style = {
      height: "200px",
      width: "200px"
    }
    return <div style={style}>
      <ProfileImage src={require("../../../assets/profile_picture.jpg")} alt="test"
                    onClick={() => console.log('test')}/>
    </div>
  })
;
