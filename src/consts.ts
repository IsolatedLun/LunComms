export const ICON_MICROPHONE = `\uf130`;
export const ICON_PHONE = `\uf095`;
export const ICON_HEADPHONE = `\uf025`;

export const ICON_PLUG = `\uf1e6`;
export const ICON_USER = `\uf007`;
export const ICON_WIFI = `\uf1eb`;

export const EMPTY_IMG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAw\
    CAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=';

export const RTC_PEER_CONFIG = {
    iceServers : [
        {
            urls: [
                'stun:stun1.1.google.com:19302',
                'stun:stun2.1.google.com:19302'
            ]
        }
    ],

    iceCandidatePoolSize: 10
}

export const WINDOW_1 = {
    id: 'connect',
    title: 'Join call'
};

export const WINDOW_2 = {
    id: 'my-user',
    title: 'Customize your appearance'
};

export const WINDOW_3 = {
    id: 'create-call',
    title: 'Create call'
};

// IDS
export const LOCAL_ID = 'local-stream';
export const REMOTE_ID = 'remote-stream';