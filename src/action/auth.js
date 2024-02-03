import Cookies from 'universal-cookie'
import { API_URL } from '../utils/config';
import axios from 'axios';

const cookies = new Cookies();
const COOKIE_AGE=31536000

export const checkAuth=()=>{
    if(cookies.get('radassist_token')===undefined || cookies.get('radassist_token')===null)
        return false
    return true
}

export const login=async (login,password)=>{
    try{
        const res=await axios.post(`${API_URL}/auth/login`,{login,password})
        if(res.data.success){
            cookies.set('radassist_token',res.data.token,{ path: '/', maxAge: COOKIE_AGE })
            return true
        }
        return false
    }catch(err){
        return false
    }
}

export const logout=()=>{
    cookies.remove('radassist_token',{ path: '/' })
}