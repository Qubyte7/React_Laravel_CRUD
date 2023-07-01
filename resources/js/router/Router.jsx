import React from 'react'
import {Routes, Route} from "react"
import { Index } from '../components/products'
import { NotFound } from '../components/products/NotFound'

export const Router = () =>{
    return (
        <div>
        <Routes>
            <Route path = '/' element = {<Index />}></Route>
            <Route path = '/*' element = { <NotFound />}></Route>
        </Routes>
        </div>
    )
}
