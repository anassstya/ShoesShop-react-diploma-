import React from "react";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";

export default function Layout({children}){
    return(
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}