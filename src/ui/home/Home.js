import Banner from "./Banner";
import React from "react";
import SideBar from "./Sidebar";
import MainView from "./MainView";
import Footer from './Footer';
import { ToastProvider, useToasts } from 'react-toast-notifications';

const Home =() => {
    return (
        <div className="home-page">
            <Banner/>
            <div className="container page">
                <div className="row">        
                        <SideBar/>
                </div>
                    <MainView/>
                </div>
                <Footer/>
            </div>
    );
}

export default Home;