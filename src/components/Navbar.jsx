'use client';
import React, { useState, useEffect, useContext } from 'react';
import '../ComponentStyle/Navbar.css'
import { motion, AnimatePresence } from 'framer-motion';

import { MenuContext } from '../Context/MenuProvider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CartSidebar from './CartSidebar';
import Image from 'next/image';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { menu, toggleMenu } = useContext(MenuContext);
  const pathname = usePathname();
  const [isClosing, setIsClosing] = useState(false);

  const whitePaths = ['/'];
  const isWhiteTheme = whitePaths.includes(pathname);
  const currentLogo = isWhiteTheme ? "/assets/img/logo.png" : "/assets/img/black-Logo.png";
  const textColorClass = isWhiteTheme ? 'text-white' : 'text-black';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const sidebarVariants = {
    hidden: { opacity: 0, x: '-0%' },
    visible: {
      opacity: 1,
      x: '0%',
      transition: {
        when: 'beforeChildren',
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 1,
      x: '-23%',
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  const liVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: {
      opacity: 1,
      x: '-0%',
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 1,
      x: '-100%',
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  };

  const ulVariants = {
    visible: {
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.15,
        staggerDirection: -1,
      },
    },
    hidden: {},
    exit: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  const menuItems = [
    'Textiles',
    'Bed',
    'Bathware Assortment',
    'Bedroom',
    'Living Lounge',
    'Office Space',
    'Entertainment Area',
  ];

  const handleCloseClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      toggleMenu();
      setIsClosing(false);
    }, 40);
  };

  return (
    <>
      <CartSidebar />
      <nav
        className={`rolls-navbar ${!isWhiteTheme ? 'not-home' : ''} ${scrolled && !menu ? 'scrolled' : ''
          }`}
      >
        <div className="container">
          <div className="navbar-content">
            <div className="row align-items-center">
              <div className="col-3">
                {!menu && (
                  <Link href="#" onClick={toggleMenu} aria-label="Open menu">
                    <i className={`fa-solid fa-bars fs-22 ${textColorClass}`}></i>
                  </Link>
                )}
              </div>
              <div className="col-6 text-center">
                <Link href="/">
                  <Image className="img-fluid logo-img" width={100} height={100} src={currentLogo} alt="Logo" />
                </Link>
              </div>
              <div className="col-3 text-end">
                <p className={`fs-15 mb-0 p-0 ${textColorClass}`}>Membership Program</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside>
        <AnimatePresence>
          {menu && (
            <>
              <motion.div
                onClick={handleCloseClick}
                className="asidebarWrapper"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              <motion.aside
                className="asidebarOpen"
                variants={sidebarVariants}
                initial="hidden"
                animate={isClosing ? 'exit' : 'visible'}
                exit="exit"
              >
                <div>
                  <Link
                    href="#"
                    onClick={handleCloseClick}
                    className="bg-transparent border-0 fs-2 text-white text-decoration-none"
                    aria-label="Close menu"
                  >
                    ×
                  </Link>
                </div>

                <motion.ul
                  className="text-end my-lg-3"
                  variants={ulVariants}
                  initial="hidden"
                  animate={isClosing ? 'exit' : 'visible'}
                  exit="exit"
                >
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={index}
                      className="list-style-none py-sm-3 py-2"
                      variants={liVariants}
                    >
                      <Link
                        href="/Category"
                        onClick={handleCloseClick}
                        className="text-decoration-none text-white fs-18 text-capitalize"
                      >
                        {item}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </aside>
    </>
  );
}

export default Navbar;
