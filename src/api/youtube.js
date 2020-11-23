import axios from 'axios';

const key = 'AIzaSyDqCLr_YmrOf1Mg7tvd7rWx6-jjqP-tXmU'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet' ,
        maxResults: 5,
        key: {_key},
    }
})
