import { Button } from '@mui/material'
import React from 'react'
import { logout } from '../action/auth'
import { updateAuth } from './Auth'

const Dashboard=props=>{
    return(
        <div style={{height:'100vh',width:'100vw',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <center>
                <h1 style={{margin:'20px'}}>
                    Welcome to RadAssist
                </h1>
                <Button
                    variant='contained'
                    color='error'
                    onClick={()=>{
                        logout()
                        updateAuth()
                    }}>
                        Logout
                    </Button>
            </center>
        </div>
    )
}

export default Dashboard