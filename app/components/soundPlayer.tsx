/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import {Sound} from "react-sound";

interface SoundPlayerProps {
  
}

export class SoundPlayer extends React.Component<SoundPlayerProps, {}> {
  public render(): React.ReactElement<{}> {    
    return (
      <Sound 
        url={""}
        playStatus={Sound.status.PLAYING}
        playFromPosition={null}
        onLoading={null}
        onPlaying={null}
        onFinishedPlaying={null}
      />
    );
  }
}
