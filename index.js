const NodeMediaServer = require('node-media-server');
const YOUTUBE_STREAMKEY = 'YOUR_YOUTUBE_STREAMKEY'
const FACEBOOK_STREAMKEY = 'YOUR_FACEBOOK_STREAMKEY'

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  relay: {
    ffmpeg: '/usr/local/Cellar/ffmpeg/4.2.2_2/bin/ffmpeg',
    tasks: [{
        app: 'live',
        mode: 'push',
        edge: `rtmp://a.rtmp.youtube.com/live2/${YOUTUBE_STREAMKEY}`,
        appendName: false
      },
      {
        app: 'live',
        mode: 'push',
        edge: `rtmps://live-api-s.facebook.com:443/rtmp/${FACEBOOK_STREAMKEY}`,
        appendName: false
      }
    ]
  }
}

var nms = new NodeMediaServer(config)
nms.run();