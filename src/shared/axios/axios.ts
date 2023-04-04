import axios from 'axios';

let instance: any;
instance = axios.create({
    baseURL: 'http://localhost:4444'
});

axios.get('/api/users')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });
export default instance
