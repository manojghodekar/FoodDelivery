import React from 'react';
import ReactDOM from 'react-dom/client'
import { Header } from './Header';
import { BodyComponent } from './BodyComponent';

export const AppLayOutComponent = () => (
    <div className='app'>
       <Header></Header>
       <BodyComponent></BodyComponent>
    </div>
    
)

