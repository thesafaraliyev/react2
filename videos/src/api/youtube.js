import Axios from 'axios';

const KEY = 'AIzaSyAwsUf708KcxPl-Tl23O6zmVBe-tPtgSRQ';

export default Axios.create({
    baseURI: 'https://www.googleapis.com/youtube/v3',
    params: {
        maxResults: 5,
        part: 'snippet',
        key: KEY
    }
});