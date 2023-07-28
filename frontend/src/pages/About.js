import React from "react";
// import components
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
    return ( 
        <div>
            <Header />
            <Sidebar />
                <section>
                <div className='flex justify-center'> 
                    <h1 className='text-5xl font-bold'>
                    About
                    </h1>
                </div>
                </section>
            <Footer />
        </div>
    );
}

export default About;