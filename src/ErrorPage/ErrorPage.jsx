import React from "react";
import banner from '../html/img/banner.jpg';
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";

export default function ErrorPage(){
    return(
        <div>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <div className="banner">
                            <img src={banner} className="img-fluid" alt="К весне готовы!"/>
                                <h2 className="banner-header">К весне готовы!</h2>
                        </div>
                        <section className="top-sales">
                            <h2 className="text-center">Страница не найдена</h2>
                            <p>
                                Извините, такая страница не найдена!
                            </p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}