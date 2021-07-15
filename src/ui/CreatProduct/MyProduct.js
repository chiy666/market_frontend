import React, {useContext} from 'react';
import {Context} from "../../store";

const MyProduct = () => {
    const [state, dispatch] = useContext(Context)
    
    return (
        <div className="container page">
            <div className="row">
                My Products
            </div>
        </div>
    );
};

export default MyProduct;