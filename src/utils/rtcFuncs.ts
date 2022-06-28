import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { Setter } from "../components/types";

/**
 * 
*/
export async function RTC_Init(PC: RTCPeerConnection, localId: string)
{
    const localEl = document.getElementById(localId) as HTMLVideoElement;
    const localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

    localStream.getVideoTracks().forEach(track => PC.addTrack(track, localStream));
    localEl.srcObject = localStream;

    return localStream;
}