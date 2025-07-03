'use client';
import '../Category/Category.css'
import { CategoryJSON } from '@/Data/CategoryJSON';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import React, { useState } from 'react';

const Page = () => {
  const [layout, setLayout] = useState('grid');

  return (
    <>
      <Navbar />
      <section className="mx-lg-0 pt-5 mx-2">
        <div className="container-lg py-lg-4 my-lg-5 my-2">
          <div className="d-flex justify-content-end align-items-center gap-2">
            <img
              onClick={() => setLayout('grid')}
              className="img-fluid cursor-pointer"
              src="/assets/img/catgorycol.png"
              width={30}
              alt="3-column"
              title="3 Column Grid"
            />
            <div onClick={() => setLayout('split')} className="cursor-pointer custom-btn mt-1"></div>
          </div>
        </div>
      </section>

      <section className="mx-3 mt-5">
        <div className="container-lg text-center custom-row-container pb-3 pt-2">
          <p className="text-uppercase mb-1 fs-22 custom-font-weight">
            Lorem ipsum dolor consectetur .
          </p>
          <p className="text-uppercase mb-1 fs-10">
            delivered in 2-7 days | $30 rush shipping delivered in 1-2 days
          </p>
        </div>
      </section>

      <section>
        <div className="row m-0 py-5 my-3">
          {CategoryJSON.map((item, index) => {
            if (layout === 'grid') {
              return (
                <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
                  <div className="p-3">
                    <Link href={`/Category/${item.id}`}>
                      <img className="img-fluid mb-2" src={item.categoryImg} alt="" />
                    </Link>
                    <p className="text-uppercase fs-2 m-0">{item.CategoryName}</p>
                    <p className="text-uppercase fs-12 m-0">{item.subTitle}</p>
                    <div className="py-3">
                      <p className="text-uppercase fs-12 m-0">{item.CetgoryChater}</p>
                      <p className="text-uppercase fs-14 m-0">
                        <span className="fw-bold">${item.price} member</span> / ${item.MrpPrice}{' '}
                        regular
                      </p>
                    </div>
                    <p className="m-0">stocked in 6 finishes, delivered in 2-7 days</p>
                    <p className="m-0">
                      shown in whitewashed oak with white emperador marble
                    </p>
                  </div>
                </div>
              );
            } else {
              return (
                <React.Fragment key={index}>
                  <div className="col-lg-4 col-md-4 col-sm-4 d-flex align-items-center">
                    <div className="w-100">
                      <Link href={`/Category/${item.id}`}>
                        <img
                          className="img-fluid custom-height-bootom-img"
                          src={item.categoryImg}
                          alt=""
                        />
                      </Link>
                      <p className="text-uppercase py-2 fs-2">{item.CategoryName}</p>
                      <p className="text-uppercase m-0 fs-12">{item.subTitle}</p>
                      <div className="py-3">
                        <p className="text-uppercase m-0 fs-12">{item.CetgoryChater}</p>
                        <p className="text-uppercase m-0 fs-12">
                          <span className="fw-bold">${item.price} member</span> / $
                          {item.MrpPrice} regular
                        </p>
                      </div>
                      <p className="text-uppercase m-0 fs-12">
                        stocked in 6 finishes, delivered in 2-7 days
                      </p>
                      <p className="text-capitalize fs-12">
                        shown in whitewashed oak with white emperador marble
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-8 col-12 mb-lg-4 d-sm-block d-none">
                    <Link href={`/Category/${item.id}`}>
                      <img
                        className="img-fluid w-100 h-100 object-fit-cover"
                        src={item.categoryImg}
                        alt=""
                      />
                    </Link>
                  </div>
                </React.Fragment>
              );
            }
          })}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Page;
