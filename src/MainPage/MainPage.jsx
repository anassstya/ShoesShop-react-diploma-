import React from "react";
import headerLogo from '../html/img/header-logo.png';
import banner from '../html/img/banner.jpg';
import '../html/css/style.css'
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

export default function MainPage(){
    return (
        <div>
            <Header/>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <div className="banner">
                            <img src={banner} className="img-fluid" alt="К весне готовы!" />
                            <h2 className="banner-header">К весне готовы!</h2>
                        </div>
                        <section className="top-sales">
                            <h2 className="text-center">Хиты продаж!</h2>
                            <div className="preloader">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </section>
                        <section className="catalog">
                            <h2 className="text-center">Каталог</h2>
                            <div className="preloader">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>

    )
}




