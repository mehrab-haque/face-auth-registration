import React, { useState } from 'react'
import { checkAuth } from '../action/auth'
import Dashboard from './Dashboard'
import Credentials from './Credentials'

var updateAuth

const Auth=props=>{
    var initialAuth=checkAuth()
    const [auth,setAuth]=useState(initialAuth)
    
    updateAuth=()=>{
        var a=checkAuth()
        setAuth(a)
    }

    return(
        <>
            {auth&&<Dashboard/>}
            {!auth&&<Credentials/>}
        </>
    )


}

export default Auth
export {updateAuth}