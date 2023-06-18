import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, useLocation as Location } from 'react-router-dom';
import Home from './components/Home/home';
import logo from './assets/logo.png';
import NavTab from './components/NavTab/navTab';
import Pay from './components/Pay/pay';
import Order from './components/Order/order';
import Shop from './components/Shop/shop';
import Other from './components/Other/other';

function App() {
    const [curLocation, setCurLocation] = useState<string>('');
    const location = Location();

    useEffect(() => {
        if (location.pathname === '/') {
            setCurLocation('/home');
            return;
        }
        setCurLocation(location.pathname);
    }, [location.pathname]);

    return (
        <div id='app'>
            <div id='component-root'>
                <div className='component-wrapper'>
                    <img className='logo' src={logo} alt='logo' />
                    <h1 className='component__title'>스타벅스</h1>
                    <div className='component__intro'>
                        <p>커피 이상의</p>
                        <p>특별한 경험을 소개합니다.</p>
                    </div>
                </div>
            </div>
            <div id='application'>
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/home' Component={Home} />
                    <Route path='/pay' Component={Pay} />
                    <Route path='/order' Component={Order} />
                    <Route path='/shop' Component={Shop} />
                    <Route path='/other' Component={Other} />
                </Routes>
                <NavTab curLocation={curLocation} />
            </div>
        </div>
    );
}

export default App;
