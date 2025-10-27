import React from 'react';
import ReactDOM from 'react-dom/client'
import { Header } from './Header';
import { BodyComponent } from './BodyComponent';
import { Outlet } from 'react-router';

const AppLayOutComponent = () => (
    <div className='app'>
       <Header></Header>
       <Outlet></Outlet>
    </div>
    
)
export default AppLayOutComponent;

