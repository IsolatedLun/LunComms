import React from "react";
import firebase from "firebase/compat/app";

export interface Props_GlobalState {
    fs: firebase.firestore.Firestore
} 

export interface Props_CubeCSS {
    blockClass?: string;
    compostClass?: string;
    utilClass?: string;
}

export interface Props_Variant {
    variant?: string | number | boolean;
    secondaryVariant?: string;
}

export interface Props_Children {
    children?: React.ReactNode;
}

export interface Props_Aria {
    ariaLabel: string;
}

export interface Props_Element extends Props_Children, Props_CubeCSS, Props_Variant { 
    id?: string;
};

export interface EventFn<E, args> {
    (e: E, ...args: any[]): void;
}

export interface Props_Interactibe<E, args> extends Props_Element {
    onInteract?: EventFn<E, args>;
}

export type Setter<Type> = React.Dispatch<React.SetStateAction<Type>>;