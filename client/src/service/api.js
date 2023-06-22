import axios from 'axios'

const URL = ''

export const addUser = async (data) => {
    try{
        return await axios.post(`${URL}/add`, data) //api calls async calls
    }catch(error){
        console.log('Error while calling add user api ', error)
    }
}