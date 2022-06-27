import React from 'react'
import { EventFn, Props_Element } from "../../types";

export interface Props_Input<T, E> extends Props_Element {
    label?: string;

    onInput?: EventFn<E, any>;
    value: T;

    readOnly?: boolean;
}

export interface Props_TextInput extends Props_Input<string, React.FormEvent<HTMLInputElement>> {  };
export interface Props_ImageInput extends Props_Input<File | null, React.FormEvent<HTMLInputElement>> {  };