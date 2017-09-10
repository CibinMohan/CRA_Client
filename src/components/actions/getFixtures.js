import axios from 'axios';

export function getFixtures(data){
        return axios.post('/api/epl', data);
   
    }
