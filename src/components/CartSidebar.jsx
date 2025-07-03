'use client';
import React, { useContext, useEffect } from 'react';
import '../ComponentStyle/CartSidebar.css'; 
import { AddToCartWrapper } from '../Context/Addtocart';

import Image from 'next/image'; 
import Link from 'next/link';

const CartSidebar = () => {
  const { isCartOpen, closeCart } = useContext(AddToCartWrapper);

  useEffect(() => {
    const cartComp = document.getElementById('cartComp');
    const WraperCart = document.getElementById('WraperCart');

    if (!cartComp || !WraperCart) return;

    if (isCartOpen) {
      cartComp.style.display = 'flex';
      setTimeout(() => {
        WraperCart.style.left = '0px';
      }, 10);
    } else {
      WraperCart.style.left = '400px';
      setTimeout(() => {
        cartComp.style.display = 'none';
      }, 300);
    }
  }, [isCartOpen]);

  return (
    <div className="CartContainer" id="cartComp">
      <div className="Wrapper-bg-Cart" onClick={closeCart}></div>
      <div className="cart-wraper d-flex flex-column" id="WraperCart">
        <div className='d-flex justify-content-between align-items-center my-3 ms-4 me-4'>
          <h5 className='mt-1 fw-light'>Shopping cart</h5>
          <div className='cart-remove-btn' onClick={closeCart}>
            <i className="fa-solid fa-xmark fs-5"></i>
          </div>
        </div>

        <div className='aside-cart-height'>
          <div className='d-flex justify-content-between gap-2 mx-3 mb-4'>
            <div>
              <Image className='img-fluid' width={180} height={180} src="/assets/img/Product1.webp" alt="Product 1" />
            </div>
            <div className='px-3'>
              <p>Lorem ipsum dolor sit amet consectetur.</p> 
              <button className='px-3 border-0 aadtocartBtn-left'>-</button>
              <button className='px-4 border-0 py-1'>1</button>
              <button className='px-3 border-0 addtocartBtn-right'>+</button>
            </div>
            <div className='px-4'>
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>

          <div className='d-flex justify-content-between gap-2 mx-3 mb-4'>
            <div>
              <Image className='img-fluid' width={180} height={180} src="/assets/img/Product2.webp" alt="Product 2" />
            </div>
            <div className='px-3'>
              <p>Lorem ipsum dolor sit amet consectetur.</p> 
              <button className='px-3 border-0 aadtocartBtn-left'>-</button>
              <button className='px-4 border-0 py-1'>1</button>
              <button className='px-3 border-0 addtocartBtn-right'>+</button>
            </div>
            <div className='px-4'>
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
        </div>

        <div className='d-flex justify-content-between align-items-center px-3 pe-4'>
          <p className='fs-5 text-capitalize'>subtotal</p>
          <p>&#x20B9; 1000</p>
        </div>
        <p className='m-0 ps-3'>Taxes and shipping calculated at checkout</p>

        <div className='mx-3 me-4 my-2'>
          <button className='bg-dark text-white w-100 rounded-3 text-capitalize mb-3 py-1'>
          <Link className='text-white text-decoration-none' href="/CheckOut" >  Check Out</Link>
          </button>
          <button className='bg-dark text-white w-100 rounded-3 text-capitalize mb-3 py-1'>
           <Link className='text-white text-decoration-none' href="/ViewCart" > View Cart</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
