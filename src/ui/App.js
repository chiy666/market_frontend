import '../App.css';
import Home from "./home/Home";
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./common/Header";
import Login from "./login/Login";
import Register from "./signup/Signup";
import Logout from "./logout/Logout";
import CreateProduct from './CreatProduct/CreateProduct';
import MyFavorite from "./favorite/MyFavorite";
import MyProduct from "./CreatProduct/MyProduct";
import Upload from "./CreatProduct/UploadImage"
import PostView from "./Mypost/mypost"
import ProductScreen from "./CreatProduct/ProductDetal"
import CategoryView from "./categoryPage/categoryPg"
import Footer from './home/Footer';
function App() {
    return (
        <div>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/favorite" component={MyFavorite} />
                    <Route path="/newproduct" component={CreateProduct} />
                    <Route path="/myproduct" component={PostView} />
                    <Route path="/upload" component={Upload} />
                    <Route path="/product/:id" component={ProductScreen} />
                    <Route path="/category/:category" component={CategoryView} />
                </Switch>
            </Router>
            
        </div>
        
    )
}

export default App;
