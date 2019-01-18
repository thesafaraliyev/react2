import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

class SongList extends Component {
    renderList () {
        return this.props.songs.map((song) => {
            return (
              <div className="item" key={song.title}>
                  <div className="right floated content">
                      <button
                        className="ui button warning"
                        onClick={() => {this.props.selectSong(song)}}
                      >
                          Select
                      </button>
                  </div>
                  <div className="content">{song.title}</div>
              </div>
            )
        })
    }

    render () {
        return (
          <div className="ui divided list">
              {this.renderList()}
          </div>
        )
    }
}

const mapStateToProps = props => {
    console.log(props)
    return {songs: props.songs}
}

export default connect(mapStateToProps, {selectSong})(SongList)