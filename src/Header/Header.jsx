import React from "react";
import headerLogo from "../html/img/header-logo.png";
import {Link} from "react-router";

export default function Header(){
    return(
        <header className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <Link className="navbar-brand" to={'/public'}>
                            <img src={headerLogo} alt="Bosa Noga"/>
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarMain">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className={'nav-link'} to={'/public'}>Главная</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={'nav-link'} to={'/catalog'}>Каталог</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={'nav-link'} to={'/about'}>О магазине</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={'nav-link'} to={'/contacts'}>Контакты</Link>
                                </li>
                            </ul>
                            <div>
                                <div className="header-controls-pics">
                                    <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                                    {/* Do programmatic navigation on click to /cart.html */}
                                    <div className="header-controls-pic header-controls-cart">
                                        <div className="header-controls-cart-full">1</div>
                                        <div className="header-controls-cart-menu"></div>
                                    </div>
                                </div>
                                <form data-id="search-form" className="header-controls-search-form form-inline invisible">
                                    <input className="form-control" placeholder="Поиск"/>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div id="mainPage"></div>
        </header>
    )
}