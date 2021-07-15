import React, {useEffect, useState,useContext} from "react";
import axios from "axios";
import PostProductView from "../CreatProduct/PostProductView";
import Grid from "@material-ui/core/Grid";
import {Context} from "../../store";

const PostView = () => {
    const [state, dispatch] = useContext(Context)
    const [products, setProducts] = useState([]);
    if(!state.auth.currentUser){
        alert("Please Login")
        window.location.href = "/";
    }
    useEffect(() => {
        axios.get(`/post/all?userEmail=${state.auth.currentUser.username}`).then(
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
                        return <PostProductView product={element} deleteme={false} fromMyPostPage={true}/>
                })}
            </div>
        </div>
    );


};

export default PostView;