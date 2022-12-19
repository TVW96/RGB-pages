import React, { Component } from 'react';
import YouTube from 'react-youtube';

// incredibles 
// https://www.youtube.com/watch?v=M5Pk9FMxrp4
// https://youtu.be/M5Pk9FMxrp4

class YoutubeIncredibles extends Component {
    videoOnReady(event) {
        // access to player in all event handlers via event.target
        const player = event.target
        player.seekTo(5)
        event.target.pauseVideo();
        // console.log(event.target);
      }
    VideoOnPlay (event) {
        const player = event.target
    }
    videoStateChange (event) {
        const player = event.target
        console.log(player.getCurrentTime())
    }
    render() {
        const opts = {
          height: '390',
          width: '640',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
        };
        const {videoId} = this.props
        return <YouTube videoId="M5Pk9FMxrp4" opts={opts} onReady={this.videoOnReady} />;
      }
      
    }

export default YoutubeIncredibles