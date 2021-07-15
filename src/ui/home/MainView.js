import React, {useEffect, useState} from "react";
import axios from "axios";
import ProductView from "../CreatProduct/ProductView";
import Grid from "@material-ui/core/Grid";

const MainView = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(`/post/all`).then(
            res =>
                setProducts(res.data)
        ).catch(err => {
            console.log('Error : ' + err);
        })
    },[...products])

    return (
        <div className="products">
            {
                products.map((element, index) => {
                    return <ProductView product={element} favorite={false}/>
                })}
        </div>
    );


};

export default MainView;