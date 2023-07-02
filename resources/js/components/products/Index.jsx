import React from "react";
import { useNavigate } from "react-router-dom";
 const Index = () => {
const navigate = useNavigate()

const newProduct = ()=>{
    navigate('/product/new')
}


    return (
        <div className="container ">
            <div className="products_list">
                <div className="titlebar">
                    <div className="titlebar_item">
                        <h1>Products</h1>
                    </div>
                    <div className="titlebar_item">
                        <button className="btn" onClick={()=>newProduct()}>
                          Add Products  
                        </button>
                    </div>
                </div>
                <div className="table">
                    <div className="list_header">
                        <p>image</p>
                        <p>Products</p>
                        <p>Type</p>
                        <p>Inventory</p>
                        <p>Actions</p>
                    </div>
                    <div className="list_items">
                        <img src="" height="40px" />
                        <a href="">Product name</a>
                        <p>Category</p>
                        <p>50</p>
                        <div>
                            <button className="btn-icon success">
                            <i className="fas fa-pencil-alt"></i>
                            </button>
                            <button className="btn-icon danger">
                                <i className="far fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Index;