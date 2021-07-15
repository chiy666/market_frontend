import React ,{useState}from "react";
import placeholder_image from '../../assets/placeholder_image.png';
import { Button} from "antd";
import { MinusOutlined } from "@ant-design/icons";
import {Link} from 'react-router-dom';
import { message } from "antd";



//----------------deleteProduct-------------------
const deleteProduct = (itemId) => {
    return fetch(`/post/delete/${itemId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((response) => {
      if (response.status !== 200) {
        throw Error("Fail to delete item");
      }
    });
  };




// -----------------PostProductView-------------------------
const PostProductView = props => {

  const [deleteme, setDeleteme] = useState(props.deleteme);
    const DeleteButton = ({ itemId }) => {
        const deleteProductOut = () => {
            deleteProduct(itemId)
            message.success("Successfully delete item!")
            setDeleteme(true)
        };
        return (
            <Button    
              type="primary"
              icon={<MinusOutlined />}
              onClick={deleteProductOut}
            />
        );
      };



    const {product} = props;
    console.log(props.deleteme)
    return props.fromMyPostPage && deleteme ? null :(
        <div className="product_card">
            
            
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
                    <span>Status:</span>{product.status === "ON_SALE"? "ON SALE" : "SOLD OUT"}
                </div>
            </div>
            
            {<DeleteButton itemId={product.id} />}
        </div>
    );
}

export default PostProductView;