import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <main>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </main>
    );
};

export default Main;