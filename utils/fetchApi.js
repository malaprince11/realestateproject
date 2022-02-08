import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers:{
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '90af643a33msha21e514a1c0d3d9p1806edjsndd525d9bf6e0'
        }
    
    })
    return data;
}