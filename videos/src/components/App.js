import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import VideoList from './VideoList'

class App extends React.Component {
    state = {videos: [], selectedVideo: null}

    onTermSubmit = async term => {
        const video = await youtube.get('/search/', {
            params: {
                q: term
            }
        })
        this.setState({videos: video.data.items})
    }

    handleVideoSelect = video => {
        console.log(video)
    }

    render () {
        return (
          <div className="ui container">
              <SearchBar onFormSubmit={this.onTermSubmit}/>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.handleVideoSelect}
              />
          </div>
        )
    }
}

export default App