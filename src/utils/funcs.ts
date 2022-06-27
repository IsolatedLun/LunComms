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
        if(el.style.display === 'none') {
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

export async function offerSignal
(
    PC: RTCPeerConnection, 
    fs: firebase.firestore.Firestore,
    callInputSetter: Setter<string>
) 
{
    const callDoc = (fs.collection('calls').doc());
    const offerCandidates = (callDoc.collection('offerCandidates'));
    const answerCandidates = (callDoc.collection('answerCandidates'));

    // Gets candidates for the caller and saves to the db
    PC.onicecandidate = (e) => {
      e.candidate && offerCandidates.add(e.candidate.toJSON());
    }

    callInputSetter(callDoc.id) // Create's a unique id for connecting to calls
    const offerDescription = await PC.createOffer();
    await PC.setLocalDescription(offerDescription);

    const offer = {
      sdp: offerDescription.sdp,
      type: offerDescription.type
    }

    await callDoc.set({ offer });

    callDoc.onSnapshot((snapshot) => {
      const data = snapshot.data();
      if(!PC.currentRemoteDescription && data?.answer) {
        const answerDescription = new RTCSessionDescription(data.answer);
        PC.setRemoteDescription(answerDescription)
      }
    })

    // When call entered, add candidate to peer connection
    answerCandidates.onSnapshot((snap) => {
      snap.docChanges().forEach(change => {
        if(change.type === 'added') {
          const candidate = new RTCIceCandidate(change.doc.data());
          
          PC.addIceCandidate(candidate)
        }
      })
    })
}

export async function createSignal
(
    PC: RTCPeerConnection, 
    fs: firebase.firestore.Firestore,
    callInput: string
) 
{
    const callDoc = fs.collection('calls').doc(callInput);
    const answerCandidates = callDoc.collection('answerCandidates');
    const offerCandidates = callDoc.collection('offerCandidates');

    PC.onicecandidate = e => {
    e.candidate && answerCandidates.add(e.candidate.toJSON());
    }

    const callData = (await callDoc.get()).data()!;

    const offerDesc = callData.offer;
    await PC.setRemoteDescription(new RTCSessionDescription(offerDesc));

    const answerDesc = await PC.createAnswer();
    await PC.setLocalDescription(answerDesc);

    const answer = {
    sdp: answerDesc.sdp,
    type: answerDesc.type
    }

    await callDoc.update({ answer });

    offerCandidates.onSnapshot((snap) => {
    snap.docChanges().forEach(change => {
        if(change.type === 'added') {
            const candidate = new RTCIceCandidate(change.doc.data());
            
            PC.addIceCandidate(candidate);
        }
        })
    })
}