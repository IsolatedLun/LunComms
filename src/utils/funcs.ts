import React from "react";
import { Props_CubeCSS, Props_Element, Setter } from "../components/types";
import { Props_MouseMoveOffset } from "./types";
import firebase from 'firebase/compat/app';

export function propOrDefault<T>(x: T | undefined, def: any): T {
    return x ? x : def;
}

/**
 * 
 * @param props 
 * @returns Defaulted props
 */
 export function prepareProps<T extends Props_Element>(props: T, extraCls: Props_CubeCSS = {}): T {
    return {
        ...props,
        variant: propOrDefault<string>(props.variant as string, 'default'),
        secondaryVariant: propOrDefault<string>(props.secondaryVariant as string, 'default'),
        blockClass: propOrDefault(props.blockClass, '') + ' ' + propOrDefault(extraCls.blockClass, ''),
        compostClass: propOrDefault(props.compostClass, '') + ' ' + propOrDefault(extraCls.compostClass, ''),
        utilClass: propOrDefault(props.utilClass, '') + ' ' + propOrDefault(extraCls.utilClass, ''),
        id: propOrDefault(props.id, ''),
    }
}

export function createCubeCSSClass(vars: Props_CubeCSS): string {
    return `
        [ ${propOrDefault(vars.blockClass, '')} ] 
        [ ${propOrDefault(vars.compostClass, '')} ] 
        [ ${propOrDefault(vars.utilClass, '')} ]`;
}

/**
 * @param e
*/
export function getMoveWindowData(e: React.MouseEvent<any>): Props_MouseMoveOffset {
    e.stopPropagation();
    e.preventDefault();

    const windowEl = (e.target as HTMLElement).closest('.window') as HTMLElement;
    if(windowEl) {
        return {
            offsetX: windowEl.offsetLeft - e.clientX,
            offsetY: windowEl.offsetTop - e.clientY
        }
    }

    return { offsetX: 0, offsetY: 0 };
}

/**
 * @param id
 * @param centerOnBlock
 * @summary Toggles an element display (block || none) and if centerOnBlock it centers the element to the
 * screen eg. a element that has a position: absolute
*/
export function toggleElement(id: string, centerOnBlock: boolean) {
    const el = document.getElementById(id) as HTMLElement;

    if(el) {
        if(!el.style.display || el.style.display === 'none') {
            el.style.display = 'block';

            // Centers the window
            if(centerOnBlock) {
                el.style.left = document.body.clientWidth / 2 - ( el.clientWidth / 2 ) + 'px';
                el.style.top = document.body.clientHeight / 2 - ( el.clientHeight / 2 ) + 'px';
            }
        }
            
        else
            el.style.display = 'none';
    }
}

export function isImage(imgFile: File) {
    return imgFile && imgFile['type'].split('/')[0] === 'image';
}

/**
 * @param id
 * @param imgFile
*/
export function previewImg(id: string, imgFile: File) {
    if(isImage(imgFile)) {
        const imgEl = document.getElementById(id) as HTMLImageElement;
        const url = window.URL.createObjectURL(imgFile);

        if(imgEl && url) {
            imgEl.src = url;
        }
    }
}

export function changeVideoAudio(videoId: string, vol: number) {
    const videoEl = document.getElementById(videoId) as HTMLVideoElement;

    videoEl.volume = vol;
}

export function createUUID(): string {
    return String(Math.floor(Math.random() * 100))
}