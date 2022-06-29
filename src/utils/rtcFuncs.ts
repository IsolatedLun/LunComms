import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { Setter } from "../components/types";
import { APP_ID, TOKEN } from "../consts";
import { createUUID } from "./funcs";

/**
 * 
*/
export async function RTC_Init
(
    PC: RTCPeerConnection, 
    localId: string, 
    remoteId: string,

    clientSetter: Setter<any>
)
{
    const client = (AgoraRTM as any).createInstance(APP_ID);
    await client.login({ uid: createUUID(), TOKEN });

    const channel = client.createChannel('main'); // random ID
    await channel.join()

    channel.on('MemberJoined', (id: string) => RTC_CreateOffer(PC, remoteId, id, client));
    channel.on('MessageFromPeer', handleMsgFromPeer)

    const localEl = document.getElementById(localId) as HTMLVideoElement;
    const localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

    localStream.getVideoTracks().forEach(track => PC.addTrack(track, localStream));
    localEl.srcObject = localStream;

    return localStream;
}

export async function RTC_CreateOffer
(
    PC: RTCPeerConnection, 
    remoteId: string, 
    userId: string,
    client: any
) 
{
    const remoteEl = document.getElementById(remoteId) as HTMLVideoElement;
    const remoteStream = new MediaStream();

    remoteEl.srcObject = remoteStream;

    PC.ontrack = (e) => e.streams[0].getVideoTracks().forEach(track => {
        PC.addTrack(track)
    })

    PC.onicecandidate = (e) => {
        if(e.candidate) {}
    }

    let offer = await PC.createOffer()
    await PC.setLocalDescription(offer); // setting LD, fires onicecandidate event

    client.sendMessageToPeer({
        text: JSON.stringify({ 
            type: 'offer',
            offer: offer 
        })
    }, 
        userId
    );
}

async function handleMsgFromPeer(msg: any, userId: string) {
    console.log('MESSAGE: '+JSON.parse(msg))
}