import React from 'react'
import { Props_Element } from "../../types";

export interface Props_Input<T, E> extends Props_Element {
    label?: string;

    onInput?: (e: E) => void;
    value: T;
}

export interface Props_TextInput extends Props_Input<string, React.FormEvent<HTMLInputElement>> {  };