import axios from 'axios'

const URL = 'http://localhost:3009/users'

const login = (user) => {
    return axios.post(URL , user)
}


export default {login}