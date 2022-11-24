import React from 'react';
import aboutImg from '../../assets/images/aboutImg.jpg'

const AboutUs = () => {
    return (
        <section className='container mx-auto my-24'>
            <div className='about-container md:flex justify-between gap-4 p-8'>
                <div className='about-us-left w-full lg:w-1/2'>
                    <div className='text-3xl font-semibold'>
                        ABOUT US
                    </div>
                    <div>
                        <p className='text-justify'>Are you looking out for free stunning, appealing and functional website templates and themes for your Second Hand Mobile Phones Dealer business? Then you have come to the right place. These templates are supported by all browsers and mobile phones. Our mobile responsive website templates make it easy for your customers to buy your products and items easily, even from their smartphones. These website templates come with a secure, integrated payment gateway with express checkout</p>
                    </div>
                </div>
                {/* about-us-rigtht===> */}
                <div className='about-us-right w-full lg:w-1/2 mt-10'>
                    <img className='w-1/2 mx-auto md:w-96 justify-center' src={aboutImg} alt="about Img" />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;