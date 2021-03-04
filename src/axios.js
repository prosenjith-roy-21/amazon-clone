import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://us-central1-clone-a1ac1.cloudfunctions.net/api'
    //'http://localhost:5001/clone-a1ac1/us-central1/api'
})
export default instance