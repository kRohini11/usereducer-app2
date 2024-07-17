"use client"

import usersAction from '@/actions/usersAction'
import { appCtx } from '@/context/appContect'
import React, { useContext } from 'react'

const Users = () => {
    const {dispatch } = useContext(appCtx)
    const fnUsers = () => {
        usersAction(dispatch)
    }
    return (

        <div>
            <h1>Users</h1>
            <button onClick={fnUsers}>Get Users</button>
        </div>

    )
}

export default Users
