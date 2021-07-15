import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'
import S3 from "react-aws-s3"; // Use the AWS-S3 to save the image
import {Context} from "../../store";
import {LOGIN} from "../../constants/reducerConstants";
import { message } from "antd";


const config = {
    bucketName: process.env.REACT_APP_bucketName,
    region: process.env.REACT_APP_region,
    dirName:process.env.REACT_APP_dirName,
    accessKeyId: process.env.REACT_APP_accessKeyId,
    secretAccessKey: process.env.REACT_APP_secretAccessKey,
};

const initialState = {
    // id:'',
    category:'',
    description:'',
    itemName:'',
    previewImageUrl:'',
    detailedImageUrls:[],
    price:'',
    title:'',
    userEmail:'',
    city:'',
    state:'',
    zipcode:''

}
function CreateProduct() {

    const [product, setProduct] = useState(initialState)
    const [images, setImages] = useState(false)
    const [state, dispatch] = useContext(Context)
    let history = useHistory();
    if(!state.auth.currentUser){
        alert("Please Login")
        window.location.href = "/";
    }

    var username = state.auth.currentUser.username
    

    console.log(product);
    const uploadMyImage = (e) =>{

       
        let file = e.target.files[0];
        let newFileName = file.name.replace(/\..+$/, "");
        const ReactS3Client = new S3(config);
        ReactS3Client.uploadFile(file, newFileName).then((data) => {
            if (data.status === 204) {
              console.log("success");
              setProduct({...product, 'previewImageUrl':data.location})
              setImages(true);
            } else {
              console.log("fail");
            }
          });
    }

    useEffect(() => {

    }, [])

    const handleUpload = async e =>{

    }

    const handleDestroy = async () => {
  
    }

    const handleChangeInput = e =>{
        const {name, value} = e.target
        setProduct({...product, [name]:value})
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try{
            await axios.post("/post/add", {...product})
            message.success("Successfully upload item!")
            history.push('/')
        } catch (err) {
            message.error(err.message)
        }
    }

    const styleUpload = {
        display: images ? "block" : "none"
    }

  
    return (
        <div className="create_product">
            <div className="upload">
                <input type="file" onChange={uploadMyImage}/>
                {<div id="file_img" style={styleUpload}>
                    <img src={images ? product.previewImageUrl : ''} alt=""/>
                </div>}

                
            </div>

            <form onSubmit={handleSubmit}>
                
                <div className="row">
                    <label htmlFor="previewImageUrl">Image URL: </label>
                    
                    <span>{product.previewImageUrl}</span>
 
                     
                </div>



                <div className="row">
                    <label htmlFor="itemName">Product name</label>
                    <textarea type="text" name="itemName" id="itemName" placeholder='Input your item name'
                     value={product.itemName} onChange={handleChangeInput}/>

                <div className="row">
                    <label htmlFor="zipCode">zipCode</label>
                    <input type="text" name="zipCode" id="zipCode" placeholder='Input your zipCode'
                     value={product.zipCode} onChange={handleChangeInput}  />
                </div>  
                </div>
                <div className="row">
                    <label htmlFor="userEmail">User email</label>
                    <input type="email" name="userEmail" id="userEmail" placeholder={username}
                     value={product.userEmail} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" placeholder='Input your Price'
                     value={product.price} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" name="description" id="description" placeholder='Input your description'
                     value={product.description} rows="5"onChange={handleChangeInput}/>
                </div>


          

                <div className="row">
                    <label htmlFor="category">Categories: </label>
                    <select name="category" value={product.category} onChange={handleChangeInput} >
                        <option category="">Please select a category</option>
                        <option category="ELECTRONICS">ELECTRONICS</option>
                        <option category="BOOKS">BOOKS</option>
                        <option category="FURNITURE">FURNITURE</option>
                        <option category="OTHER">OTHER</option>


            
                    </select>
                </div>

                <button type="submit">Upload</button>
                
            </form>
        </div>
    )
}

export default CreateProduct
