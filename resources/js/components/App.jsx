import React from 'react'
import { Routes, Route} from "react-router-dom"
import Index from './products/Index'
import {NotFound} from "./products/NotFound"
import NewProduct from './products/New'
export const App = () =>{
return (
    <div>
       <Routes>
            <Route path = '/' element = {<Index />}></Route>
            <Route path='/product/new' element = { <NewProduct />}></Route>
            <Route path = '/*' element = { <NotFound />}></Route>
          
        </Routes>
    </div>
)
}