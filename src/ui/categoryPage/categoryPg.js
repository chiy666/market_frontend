import React, {useEffect, useState,useContext} from "react";
import axios from "axios";
import ProductView from "../CreatProduct/ProductView";
import Grid from "@material-ui/core/Grid";
import {Context} from "../../store";
import SideBar from "../home/Sidebar";
import Banner from "../home/Banner";

const CategoryView = (props) => {
    console.log(props.match.params.category)
    const [state, dispatch] = useContext(Context)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`/category/?category=${props.match.params.category}`).then(
            res =>
                setProducts(res.data)
        ).catch(err => {
            console.log('Error : ' + err);
        })
    },[props.match.params.category])
    console.log(products)
    return (
        <div className="home-page">
            <Banner/>
        <div className="container page">
            <SideBar/>
            <div className="products">
                {
                    products.map((element, index) => {
                        return <ProductView product={element} fromProductViewPage={true}/>
                })}
            </div>
        </div>
        </div>
    );


};

export default CategoryView;