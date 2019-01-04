import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ec202932d9b3b16cbb6472de52529c15b8eb503d3b936611774e4d47962eec1b'
    }
});