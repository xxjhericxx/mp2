import React from 'react';

// import components
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Contact = () => {

    return (
        <div>
            <Header />
            <Sidebar />
                <div className='flex justify-center'> 
                    <h1 className='text-5xl font-bold mt-5 mb-5'>
                    
                    </h1>
                </div>
                    <div
                        className="relative overflow-hidden md:flex w-100 h-[500px] bg-gradient-to-tr from-red-400 to-purple-700 i justify-around items-center hidden py-5 rounded-lg mx-auto">
                        <div>
                            <h1 className="text-white font-bold text-4xl font-sans text-center">About us</h1>
                            <h4 className="text-white mt-1 text-center">Welcome to our online clothing store. We are a dedicated team of fashion enthusiasts, committed to bringing the latest trends to our customers. Our goal is to make fashion accessible for everyone, expressing individuality through the power of clothing.</h4>
                            <h4 className="text-white mt-1 text-center">Our journey began with a simple idea - to make high-quality, fashionable clothing available to everyone. Over the years, our passion for fashion has driven us to source the most stylish, high-quality clothing from around the world, and bring it right to your doorstep.</h4>
                            <h4 className="text-white mt-1 text-center">We believe in the power of fashion to express individuality and we strive to make that accessible for everyone. We are proud of the milestones we have reached so far and we are committed to continue delivering value to our customers.</h4>
                            <h4 className="text-white mt-1 text-center">Our team works tirelessly to ensure that we provide not just clothing, but a fashion experience. From sourcing the best materials to designing the most fashionable clothes, every step of our process is carried out with our customers in mind. We are more than just a clothing store - we are a fashion destination.</h4>
                        </div>
                        
                        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>

                        
                    </div>
            <Footer />
        </div>
    );
};

export default Contact;
