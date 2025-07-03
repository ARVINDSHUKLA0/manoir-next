'use client'
import styles from './page.module.css';  
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from "next/link";
import Navbar from '@/components/Navbar';
import Image from 'next/image';
export default function Home() {
  const ProductArr = [
    { id: 1, ProdcutImg: "/assets/img/Product1.webp", name: "kintsu" },
    { id: 1, ProdcutImg: "/assets/img/Product2.webp", name: "bird" },
    { id: 1, ProdcutImg: "/assets/img/Product3.webp", name: "mougin" },
  ]
  const ProductSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Navbar/>
      <Banner />
      <section className='py-lg-5 custom-block-bg py-3'>
        <Slider {...ProductSlider} r>
          {
            ProductArr.map((item, index) => (
              <div className='px-2 position-relative' key={index}>
                <div className={`${styles.ProductWarper}`}>
                  <Image src={item.ProdcutImg} width={300} height={300} alt="Product image" />
                </div>
                <div className={`${styles.BorderLeftCustom}`}>
                  <h5 className='text-uppercase py-2'>seasonal sakura</h5>
                  <h4 className='text-capitalize'>Japan</h4>
                  <p className=' py-2 m-0'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis molestias aliquam amet, deleniti molestiae asperiores culpa porro praesentium exercitationem reprehenderit! Placeat quod nesciunt veniam. Molestiae impedit doloremque tempora laudantium porro fuga ratione sequi nemo. Fugiat excepturi praesentium dolore commodi recusandae.</p>
                  <p>
                    <Link href="#"  className=' text-white text-capitalize m-0 p-0'>discover over</Link>
                  </p>
                </div>
              </div>
            ))
          }
        </Slider>
      </section>

      <Footer />

    </>
  );
}
