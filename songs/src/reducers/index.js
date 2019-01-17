const songsReducer = () => {
    return [
        {title: 'Amigo Vulnerable', duration: '5:14'},
        {title: 'Ring My Bells', duration: '2:10'},
        {title: 'MOVE TO MIAMI', duration: '4:16'},
        {title: 'El Perdón', duration: '3:26'},
    ]
}

const songSelectedReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}