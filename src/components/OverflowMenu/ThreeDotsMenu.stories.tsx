import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import ThreeDotsMenu from "."

storiesOf("ThreeDotsMenu", module)
    .addDecorator(withInfo({ inline: true }))

    .add("ThreeDotsMenu", ()=> (
        <div>
            <ThreeDotsMenu>
                
            </ThreeDotsMenu>
        </div>
        
    ));