import React from 'react';
import indexShowAllProducts from '../../fetch/product/indexShowAllProducts';

function Home() {
    return (
        <main onLoad={() => {indexShowAllProducts()}}>
        <div className="slider-area ">
            <div className="slider-active">
                <div className="single-slider slider-height" style ={ { backgroundImage: "url('assets/img/hero/h1_hero.jpg')", overflow: "hidden" } } data-background="assets/img/hero/h1_hero.jpg">
                    <div className="container">
                        <div className="row d-flex align-items-center justify-content-between">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-none d-md-block">
                                <div className="hero__img" data-animation="bounceIn" data-delay=".4s">
                                    <img src="assets/img/hero/hero_man.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-8">
                                <div className="hero__caption">
                                    <span data-animation="fadeInRight" data-delay=".4s">Best Prices</span>
                                    <h1 data-animation="fadeInRight" data-delay=".6s">Urbanised <br/> Collections</h1>
                                    <p data-animation="fadeInRight" data-delay=".8s">Wear Latest For Corporate &amp; Occasions</p>
                                    <div className="hero__btn" data-animation="fadeInRight" data-delay="1s">
                                        <a href="industries.html" className="btn hero-btn">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <section className="latest-product-area padding-bottom">
        <br/><br/>
            <div className="container">
                <div className="row product-btn d-flex justify-content-end align-items-end">
                    <div className="col-xl-4 col-lg-5 col-md-5">
                        <div className="section-tittle mb-85">
                            <h2>Shop Now</h2>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-7 col-md-7">
                        <div className="select-this d-flex">
                            <div className="featured">
                                <span>Sort by: </span>
                            </div>
                            <form action="#">
                                <div className="select-itms">
                                    <select name="select" id="select1">
                                        <option value="">All</option>
                                        <option value="">Women Native</option>
                                        <option value="">Women Accessories</option>
                                        <option value="">Men Native</option>
                                        <option value="">Men Accessories</option>
                                        <option value="">Weddings &amp; Dinners</option>
                                        <option value="">Casuals</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="row" id="shopping-table">

                  

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="latest-wrapper lf-padding">
            <div className="latest-area latest-height d-flex align-items-center" style={{backgroundImage: "url('assets/img/collection/latest-offer.png')"}} data-background="assets/img/collection/latest-offer.png">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-xl-5 col-lg-5 col-md-6 offset-xl-1 offset-lg-1">
                            <div className="latest-caption">
                                <h2>Get Our<br/>Latest Offers &amp; News</h2>
                                <p>Subscribe news letter</p>
                            </div>
                        </div>
                         <div className="col-xl-5 col-lg-5 col-md-6 ">
                            <div className="latest-subscribe">
                                <form action="#">
                                    <input type="email" placeholder="Your email here"/>
                                    <button>Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="man-shape">
                    <img src="assets/img/collection/latest-man.png" alt=""/>
                </div>
            </div>
        </div>

        <div className="shop-method-area section-padding30">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="single-method mb-40">
                            <i className="ti-thumb-up"></i>
                            <h6>Top Class Products</h6>
                            <p>Best Quality Fabrics and Creative Design | Stiches.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="single-method mb-40">
                            <i className="ti-package"></i>
                            <h6>Timely Shipping</h6>
                            <p>24hrs To-Door Delivery Within Nigeria.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="single-method mb-40">
                            <i className="ti-unlock"></i>
                            <h6>Secure Payment System</h6>
                            <p>Confide In Our Highly Secure Payment Systems.</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

        <div className="gallery-wrapper lf-padding">
            <div className="gallery-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="gallery-items">
                            <img src="assets/img/gallery/gallery1.jpg" alt="" />
                        </div> 
                        <div className="gallery-items">
                            <img src="assets/img/gallery/gallery2.jpg" alt="" />
                        </div>
                        <div className="gallery-items">
                            <img src="assets/img/gallery/gallery3.jpg" alt="" />
                        </div>
                        <div className="gallery-items">
                            <img src="assets/img/gallery/gallery4.jpg" alt="" />
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}
  
export default Home;
  