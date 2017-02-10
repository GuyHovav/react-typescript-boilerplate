
declare module "react-sound" {
    import * as React from 'react';

    interface SoundProps {
        url:string
        playStatus:any
        playFromPosition:number /* in milliseconds */
        onLoading:(onLoadingPayload: OnLoadingPayload)=>void
        onPlaying:(onPlayingPayload: OnPlayingPayload)=>void
        onFinishedPlaying:()=>void
    }


    interface OnLoadingPayload {
        bytesLoaded: number
        bytesTotal:number
        duration:number
    }

    interface OnPlayingPayload {
        position: number
        duration: number
    }

    interface SoundStatus {
        PLAYING: any
        STOPPED: any
        PAUSED: any
    }

    export class Sound extends React.Component<SoundProps, {}> {
        public status: SoundStatus;
    }
}
