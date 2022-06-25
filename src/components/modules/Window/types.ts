import { Props_Element } from "../../types";

export interface Props_Window extends Props_Element { 
    id: string;
    title: string;

    minMaxHeight: [number, number];
    minMaxWidth: [number, number];
};

export interface Props_WindowStatus {
    isMouseDown: boolean;
    isMouseInBounds: boolean;
}