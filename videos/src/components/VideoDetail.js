import React from 'react'

const VideoDetail = ({video}) => {
    if (!video) return <div>loading</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
      <div>
          <div className="ui segment">
              <div className="ui embed">
                  <iframe title="video player" src={videoSrc} frameBorder="0"/>
              </div>
              <h4 className="ui header">
                  {video.snippet.title}
              </h4>
              <p>
                  {video.snippet.description}
              </p>
          </div>

      </div>
    )
}

export default VideoDetail