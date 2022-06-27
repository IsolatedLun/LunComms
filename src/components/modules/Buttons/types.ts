import React from "react";
import { Props_Aria, Props_Element, Props_Interactibe } from "../../types";

export interface Props_Button extends Props_Element, Props_Interactibe<React.MouseEvent, [boolean]> { 
    useActive?: boolean
 };

export interface Props_IconButton extends Props_Button, Props_Aria {  };