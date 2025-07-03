'use client'
import React, { useContext, useState } from 'react'; 
import { use } from 'react';
import './CategoryView.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CategoryJSON } from '@/Data/CategoryJSON';
import { AddToCartWrapper } from '@/Context/Addtocart';
import { AddtoCartItem } from '@/Context/DataAddtoCart';
import Image from 'next/image';




export default function Page({params, product}) {
    const { openCart } = useContext(AddToCartWrapper)
    const { addTocartFunc } = useContext(AddtoCartItem)
    const accordionData = [
        { title: "DETAILS", content: "Details content goes here..." },
        { title: "DIMENSIONS", content: "Dimensions content goes here..." },
        { title: "CARE", content: "Care instructions go here..." },
        { title: "SEATING GUIDE", content: "Seating guide info here..." },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const { id } = use(params);
    const DataProduct = CategoryJSON.find(item => item.id === Number(id));
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <>
            <Navbar />
            <section className="my-lg-5 pt-5 my-3">
                {
                    DataProduct ? (
                        <div className="row m-0">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="CategoryView">
                                    <Image
                                        className="img-fluid "
                                        src={selectedImage ? selectedImage : DataProduct.categoryImg}
                                        alt="Product"
                                        width={900}
                                        height={500}
                                    />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div>
                                    <p className="text-uppercase fs-3">Byron Emperador Round Dining Table</p>
                                    <p className="fs-12 fw-bold my-1">
                                        Starting at $3095Member / $4130Regular
                                    </p>
                                    <p className="fs-12 py-lg-4 py-3">
                                        Designed by Harrison and Nicholas Condos of Sydney, Australia, our collection is handcrafted
                                        of reeded American white oak with a richly veined Emperador marble top. Solid vertical
                                        reeding lends juxtaposition to the contemporary, curved silhouette, appearing almost fluid
                                        in nature and seeming to float on a recessed plinth base.
                                    </p>
                                    <div className='py-sm-3 py-1'>
                                        <p className="text-uppercase fs-14 py-1">SHOP THE ENTIRE COLLECTION</p>
                                        <p className="text-uppercase fs-14 py-1">EXPLORE ALL REEDED COLLECTIONS</p>
                                    </div>


                                    <div className="d-flex gap-1 mt-4">
                                        {
                                            DataProduct.images.map((img, i) => (
                                                <div className='categoryView-imges-warp' key={i} onClick={() => handleImageClick(img)}>
                                                    <Image
                                                        src={img}
                                                        className=" cursor-pointer img-fluid"
                                                        width={350}
                                                        height={350}
                                                    />
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div>
                                        <div className="py-4">
                                            {accordionData.map((item, index) => (
                                                <div key={index} style={{ borderBottom: "1px solid #ddd" }}>
                                                    <div
                                                        onClick={() => toggleAccordion(index)}
                                                        className="py-2 d-flex align-items-center justify-content-between"
                                                    >
                                                        <span>{item.title}</span>
                                                        <i className={`fs-12 fw-bold fas ${activeIndex === index ? "fa-minus" : "fa-plus"}`}></i>

                                                    </div>
                                                    {activeIndex === index && (
                                                        <div
                                                            style={{ paddingBottom: "16px", color: "#555", fontSize: "16px" }}
                                                        >
                                                            {item.content}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-5">
                            <h2>Data not found!</h2>
                        </div>
                    )
                }
            </section>

            <section className='mb-5 mb-3'>
                <div className="row m-0 align-items-end">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12 mb-2">
                        <div>
                            <Image className='img-fluid' width={350} height={350} src={DataProduct.categoryImg} alt="Product" />
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                        <div>
                            <p className='text-uppercase fs-22 '>Byron Emperador Dining Table</p>
                            <p className='mb-3 fs-14'> <span className='fw-bold my-2'> Starting at $4195Member </span>/ $5595Regular</p>
                        </div>
                        <div className="row m-0">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-12 mb-2">
                                <select className='bg-transparent w-100 py-2' id="cars">
                                    <option value=""></option>
                                    <option value="saab">72"L</option>
                                    <option value="opel">82"L</option>
                                    <option value="audi">96"L</option>
                                    <option value="audi">108"L</option>
                                </select>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-12 mb-2">
                                <select className=' py-2 bg-transparent w-100' id="cars">
                                    <option value=""></option>
                                    <option value="saab">whitewashed oak white emperador marble</option>
                                    <option value="opel">Greige Oak/grey emperador marble</option>
                                    <option value="audi">96"L</option>
                                    <option value="audi">108"L</option>
                                </select>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-12 mb-2 ">
                                <select className='bg-transparent w-100 py-2 px-4' id="cars">
                                    <option value=""></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                    <option value="32">32</option>
                                    <option value="33">33</option>
                                    <option value="34">34</option>
                                    <option value="35">35</option>
                                    <option value="36">36</option>
                                    <option value="37">37</option>
                                    <option value="38">38</option>
                                    <option value="39">39</option>
                                    <option value="40">40</option>
                                </select>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-12 mb-2 text-lg-end">
                                <button onClick={openCart} className='text-uppercase px-4 py-2  w-100 addTocart-btn'>
                                          <span onClick={() => addTocartFunc(product.id)}>Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mb-5 mb-3'>
                <div className="row m-0 align-items-end">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12 mb-2">
                        <div className='imges-bottom-cetegory'>
                            <Image className='img-fluid' width={500} height={500} src={DataProduct.images[1]} alt="Product" />
                        </div>
                    </div>

                    <div className="col-lg-9 col-md-9 col-sm-12 col-12 mb-2">
                        <div>
                            <p className='fs-5'>Byron Emperador Collection Swatch</p>
                            <p className='fs-14'> <span className='fw-bold'>Starting at $26Member </span>/ $35Regular</p>
                            <p className='fs-10 my-3'>Swatches are shipped at no charge. For free USPS expedited delivery to arrive within 2-3 business days, all swatches must be placed in a separate order from product orders.</p>
                        </div>
                        <div className='row m-0 pe-lg-3'>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                <select className='bg-transparent  w-100  py-2' id="cars">
                                    <option value=""></option>
                                    <option value="saab">whitewashed oak white emperador marble</option>
                                    <option value="opel">Greige Oak/grey emperador marble</option>
                                    <option value="audi">96"L</option>
                                    <option value="audi">108"L</option>
                                </select>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12 ">
                                <div className='w-100 mb-3'>
                                    <select className='w-100 py-2 bg-transparent ' id="cars">
                                        <option value=""></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                        <option value="32">32</option>
                                        <option value="33">33</option>
                                        <option value="34">34</option>
                                        <option value="35">35</option>
                                        <option value="36">36</option>
                                        <option value="37">37</option>
                                        <option value="38">38</option>
                                        <option value="39">39</option>
                                        <option value="40">40</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12 ">
                                <div className='w-100 text-end mb-3'>
                                    <button onClick={openCart} className='text-uppercase addTocart-btn  w-100 px-4  py-2 ms-lg-3'>
                                        {/* <span onClick={()=>addTocartFunc((CategoryJSON.id))}> add to cart</span> */}

                                        <span onClick={() => addTocartFunc(product.id)}>Add to Cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

