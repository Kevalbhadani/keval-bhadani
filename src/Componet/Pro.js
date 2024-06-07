import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { GiAndroidMask } from "react-icons/gi";
import { GiOctopus, GiTreeBranch, GiCrownedSkull } from "react-icons/gi";
import { TfiAlignJustify } from "react-icons/tfi";
import { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";
// import { SiAxios } from 'react-icons/si';
import { useEffect } from 'react';
import axios from 'axios';
function Pro() {
    const [data, setData] = useState([]);
    const [rec, setrec] = useState([]);
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then((response) => setData(response.data.products))
    }, [])

    useEffect(() => {
        axios.get('https://dummyjson.com/products/category-list')
            .then((response) => setrec(response.data))
    }, [])

    return (
        <>
            <header>
                <div className="product">
                    <div className="container">
                        <div className="categories">
                            <h3>category</h3>
                        </div>

                        {/* <div className="product__image">
              <img src={require('./img/l.webp')} />
            </div> */}

                        <div className="input" >
                            <input type="text" placeholder="Search" />
                        </div>

                        <a href="cart"><div  on- className="icon btn-1"> viwe to cart </div></a>
                    </div>
                </div>
            </header >

            <div className="products">
                <div className="item-1">
                    {
                        rec.map((v) => {
                            return (
                                <>

                                    <ul>
                                        <li>
                                            {v}
                                        </li>
                                    </ul>
                                </>
                            )
                        })
                    }
                </div>
                <div className="col-1">
                    <div className="col-2">
                        <div className='item'>
                            {
                                data.map((v) => {
                                    return (
                                        <>
                                            <div className="text-section">
                                                <a href={`detail/${v.id}`}>
                                                    <div className="item_img">
                                                        <img src={v.thumbnail} alt="" />
                                                    </div>
                                                    <div className="item_text ">
                                                        <ul>
                                                            <li>{v.title} </li>
                                                            <li><span>DiscountPercentage:-</span>{v.discountPercentage}%</li>
                                                            <li><div className="d-flex-2 box">
                                                                <li>{v.rating}<FaStar /> </li>
                                                            </div></li>
                                                            <li><span>Price:-</span>{v.price}</li>
                                                        </ul>
                                                        <div className="btn-2">Add to Cart </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Pro;