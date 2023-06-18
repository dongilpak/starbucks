import React from 'react';
import { ReactComponent as Home } from '../../assets/icons/home.svg';
import { ReactComponent as Pay } from '../../assets/icons/pay.svg';
import { ReactComponent as Order } from '../../assets/icons/order.svg';
import { ReactComponent as Shop } from '../../assets/icons/shop.svg';
import { ReactComponent as Other } from '../../assets/icons/other.svg';
import './navTab.css';
import { Link } from 'react-router-dom';

const NavTab = ({ curLocation }: { curLocation: string }) => {
    return (
        <nav id='navTab'>
            <Link to='/home'>
                <div
                    className={`tab-wrapper ${
                        curLocation === '/home' ? 'on' : ''
                    }`}
                >
                    <Home />
                    <span>Home</span>
                </div>
            </Link>
            <Link to='/pay'>
                <div
                    className={`tab-wrapper ${
                        curLocation === '/pay' ? 'on' : ''
                    }`}
                >
                    <Pay />
                    <span>Pay</span>
                </div>
            </Link>
            <Link to='/order'>
                <div
                    className={`tab-wrapper ${
                        curLocation === '/order' ? 'on' : ''
                    }`}
                >
                    <Order />
                    <span>Order</span>
                </div>
            </Link>
            <Link to='/shop'>
                <div
                    className={`tab-wrapper ${
                        curLocation === '/shop' ? 'on' : ''
                    }`}
                >
                    <Shop />
                    <span>Shop</span>
                </div>
            </Link>
            <Link to='/other'>
                <div
                    className={`tab-wrapper ${
                        curLocation === '/other' ? 'on' : ''
                    }`}
                >
                    <Other />
                    <span>Other</span>
                </div>
            </Link>
        </nav>
    );
};

export default NavTab;
