import React, { Component } from 'react';
import YouTube from 'react-youtube';



// Toy Story
// https://www.youtube.com/watch?v=wIHAczUp1fQ
// https://youtu.be/wIHAczUp1fQ

class YoutubeToyStory extends Component {

    videoOnReady(event) {
        // access to player in all event handlers via event.target
        const player = event.target
        player.seekTo(10)
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
        return <YouTube videoId="wIHAczUp1fQ" opts={opts} onReady={this.videoOnReady} />;
        
      }
      
    }

export default YoutubeToyStory