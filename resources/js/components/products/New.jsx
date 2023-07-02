import React from "react"


export const NewProduct = () =>{
    return (
        <div className="container">
            <div className="products_create">
                <div className="titlebar">
                    <div className="titlebar_item">
                        <h1>Add Product</h1>
                    </div>
                    <div className="titlebar_item">
                        <button className="btn">Save</button>
                    </div>
                </div>
                <div className="card_wrapper">
                    <div className="wrapper_left">Wrapper left</div>
                     <div className="wrapper_right"> Wrapper Right</div>
                
                </div>
            </div>
        </div>
    )
}



