import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Sidebar from './pages/sidebar'

export default function Router(){
    
    return(
        <BrowserRouter>
            <Routes >
                <Route path="/" exact element={(<Home />)} />
            </Routes>
            <Sidebar style={{display:'inline-block'}}/>
        </BrowserRouter>
    )
}