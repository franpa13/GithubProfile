import axios from "axios";
import useStore from '../store/use-store';
export const traerRepos = async (username)=>{


    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        const dataRes = response.data;
        const setRepo = useStore.getState().setRepo;
        setRepo(dataRes); 
    } catch (e) {
        console.error(e);
    }
}