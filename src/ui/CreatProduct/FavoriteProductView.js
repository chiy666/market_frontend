import React,{useState}from "react";
import placeholder_image from '../../assets/placeholder_image.png';
import { Button} from "antd";
import { MinusOutlined } from "@ant-design/icons";
import axios from 'axios'
import {Link} from 'react-router-dom';
import { message } from "antd";
const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';



// -----------------FavoriteProductView-------------------------
const FavoriteProductView = props => {




    const {product} = props;
    const [favorite, setFavorite] = useState(props.favorite);

    function handleOnClick() {
        if (favorite) {
            setFavorite(false);
            axios.post(`/unfavorite/` + product.id)
            .then(()=>message.success("Removed from Favorite list!"))
            .catch(err => {
                console.log('Error : ' + err);
                message.error(err.message)
            })
        } else {
            setFavorite(true);
            axios.post(`/favorite/` + product.id)
            .then(()=>message.success("Added in Favorite list!"))
            .catch(err => {
                console.log('Error : ' + err);
                message.error(err.message)
            })
        }
    }
    return props.fromFavoritePage && !favorite ? null : (
        <div className="product_card">
            
            <button onClick={handleOnClick} className={favorite ? FAVORITED_CLASS : NOT_FAVORITED_CLASS}>
                <i className="ion-heart"></i>
            </button>
            
            <Link to={`/product/${product.id}`}>
              <img src={product.previewImageUrl ? product.previewImageUrl : placeholder_image} alt=""/>
            </Link>
            <div className="product_box">
                <div>
                    <span>Title:</span>{product.itemName}
                </div>
                <div>
                    <span>Price:</span>{product.price}
                </div>
                <div>
                    <span>Status:</span>{product.status === "ON_SALE"? "In stock" : "SOLD OUT"}
                </div>
            </div>
            
        </div>
    );
}

export default FavoriteProductView;