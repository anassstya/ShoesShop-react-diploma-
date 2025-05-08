import React, {useEffect, useState} from "react";
import banner from '../html/img/banner.jpg';
import '../html/css/style.css'

function TopSales(){
    const [topSales, setTopSales] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const topSalesUrl = import.meta.env.VITE_TOP_SALES;
        fetch(topSalesUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error getting data');
                }
                return response.json();
            })
            .then(data => {
                const products = data.map(item => ({
                    id: item.id,
                    category: item.category,
                    title: item.title,
                    price: item.price,
                    images: item.images
                }));
                setTopSales(products);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <section className="top-sales">
                <h2 className="text-center">Хиты продаж!</h2>
                <div className="preloader">
                    <span></span><span></span><span></span><span></span>
                </div>
            </section>
        );
    }

    if (topSales.length === 0) {

        return null;
    }

    return (
        <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            <div className="row">
                {topSales.map(item => (
                    <div className="col-4" key={item.id}>
                        <div className="card catalog-item-card">
                            <img src={item.images[0]} className="card-img-top img-fluid" alt={item.title} />
                            <div className="card-body">
                                <p className="card-text">{item.title}</p>
                                <p className="card-text">{item.price} ₽</p>
                                <a href={`/products/${item.id}`} className="btn btn-outline-primary">Заказать</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default function MainPage(){
    return (
        <div>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <div className="banner">
                            <img src={banner} className="img-fluid" alt="К весне готовы!" />
                            <h2 className="banner-header">К весне готовы!</h2>
                        </div>
                      <TopSales/>
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
        </div>

    )
}




