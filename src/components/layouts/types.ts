import firebase from "firebase/compat/app";
import { Setter } from "../types";

export interface Props_CommsControls {
    startStreamFn: (localId: string, remoteId: string) => void;
}

export interface Props_AllWindows {
    callCodeSetter: Setter<string>;
    callInputSetter: Setter<string>;

    callCode: string;
    callInput: string;

    PC: RTCPeerConnection;
    fs: firebase.firestore.Firestore,
}