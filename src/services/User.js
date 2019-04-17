import fetch from 'node-fetch';

import {USER_SERVICE_PATH} from '../config/constants';

export const getUsers = async () => {
    try {
        const res = await fetch(USER_SERVICE_PATH);
        return res.json();
    }
    catch (e) {
        console.log(e);
    }
    
}
