import axios from "axios"

import useStore from '../store/use-store';

export const findUser = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        const dataRes = response.data;


        const setData = useStore.getState().setData;
        setData(dataRes); 
    } catch (e) {
        console.error(e);
    }
};
