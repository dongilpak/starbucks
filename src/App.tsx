import React from 'react';
import './App.css';
import Vessel from './components/Vessel/vessel';
import logo from './assets/logo.png';

function App() {
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
            <Vessel />
        </div>
    );
}

export default App;
