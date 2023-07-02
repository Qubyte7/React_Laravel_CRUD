import React from 'react'
import { Routes, Route} from "react-router-dom"
import {Index} from "./products/Index"
import {NotFound} from "./products/NotFound"
export const App = () =>{
return (
    <div>
       <Routes>
            <Route path = '/' element = {<Index />}></Route>
            <Route path = '/*' element = { <NotFound />}></Route>
            
        </Routes>
    </div>
)
}