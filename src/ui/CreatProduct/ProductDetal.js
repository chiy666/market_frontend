
import React, {useEffect, useState,useContext} from "react";
import { message } from "antd";
import axios from "axios";
import {Context} from "../../store";

export default function ProductScreen(props){
    console.log(props.match.params.id)
    console.log(props)
    const [state, dispatch] = useContext(Context)
    console.log(state.auth.currentUser)

    const [product, setProduct] = useState([]);
    function handleOnClick() {
        console.log(state.auth.currentUser)
        if(state.auth.currentUser === null){
            console.log(state.auth.currentUser)
            // window.location.href = "/login";
            message.error("Please login!")
        }else{
            axios.post(`/favorite/` + product.id)
            .then(()=>message.success("Added in Favorite list!"))
            .catch(err => {
                    console.log('Error : ' + err);
                })
        }

    }
    useEffect(() => {
        axios.get(`/post/${props.match.params.id}`).then(
            res =>
                setProduct(res.data)
        ).catch(err => {
            console.log('Error : ' + err);
        })
    },[])
    console.log(product)
    var name = !product.user? '': product.user.email
    return (
        <div className="product-details">
            <div className="details">
                <div className="big-img">
                    <img src={product.previewImageUrl } alt=""/>
                </div>
                <div className="box">
                    <div className="row">
                        <h2>{product.itemName}</h2>
                        <span>${product.price} </span>
                    </div>
                    <p>{product.description}</p>
                    <span>Seller's Email: {!product.user? '': product.user.email}</span>
                    <p className="cantact">If you are interested in this item, please cantact with the Seller's Email. Thanks.</p>
                    <button onClick={handleOnClick} className="cart">Add to Favorite</button>
                </div>
                
            </div>
        </div>

    )
}

