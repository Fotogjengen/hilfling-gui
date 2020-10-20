import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import DropdownTab from "."
import "./DropdownTab.module.css"

storiesOf("DropdownTab", module)
    .addDecorator(withInfo({ inline: true }))

    .add("DropdownTab: Album pen?", ()=> (
        <div>
            <DropdownTab color="red" name="Album" />  
            <DropdownTab color="blue" name="Kategori" />
            <DropdownTab color="purple" name="Sted" />
            <DropdownTab color="green" name="Medium"  />
            <DropdownTab color="yellow" name="Statistikk" />
        </div>
        
    ));


    
    // .add("DropdownTab: Album", ()=> (
    //     <div>
    //         <DropdownTab color="red" name="Album" />
            
    //     </div>
    // ))
    // .add("DropdownTab: Sted", ()=> (
    //     <div>
    //         <DropdownTab color="purple" name="Sted"/>
    //     </div>
    // ))
    // .add("DropdownTab: Medium", ()=> (
    //     <div>
    //         <DropdownTab color="yellow" name="Medium"/>
    //     </div>
    // ))
    // .add("DropdownTab: Kategori", ()=> (
    //     <div>
    //         <DropdownTab color="blue" name="Kategori"/>
    //     </div>
    // ))
    // .add("DropdownTab: Statistikk", ()=> (
    //     <div>
    //         <DropdownTab color="yellow" name="Statistikk"/>
    //     </div>
    // ));