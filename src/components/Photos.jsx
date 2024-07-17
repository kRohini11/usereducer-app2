"use client"

import photoAction from '@/actions/photosAction'
import { appCtx } from '@/context/appContect'
import React, { useContext } from 'react'

const Photos = () => {
    const { state, dispatch } = useContext(appCtx)
    const fnPhotos = () => {
        photoAction(dispatch)
    }
    return (
        <div>
            <h1>Photos</h1>
            <button onClick={fnPhotos}>Get Photos</button>
            <h2>{state?.photos?.[0]?.title}</h2>
        </div>

    )
}

export default Photos
