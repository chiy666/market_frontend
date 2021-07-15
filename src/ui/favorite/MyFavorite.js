import React, {useContext, useState, useEffect} from 'react';
import {Context} from "../../store";
import axios from 'axios'
import FavoriteProductView from "../CreatProduct/FavoriteProductView";
import { message } from "antd";

const MyFavorite = () => {
    const [state, dispatch] = useContext(Context)
    const [posts, setPosts] = useState(null);

    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(`/favorite/all`).then(
            res =>
                setProducts(res.data)
        ).catch(err => {
            console.log('Error : ' + err);
        })
    },[...products])

    return (
        <div className="container page">
        <div className="products">
            {
                products.map((element, index) => {
                    return <FavoriteProductView product={element} favorite={true} fromFavoritePage={true}/>
                })}
        </div>
        </div>
    );

};

export default MyFavorite;