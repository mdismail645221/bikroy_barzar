import React from 'react';

const LaptopHeroSection = () => {
    return (
        <section className='mb-24'>
            <div className="hero h-5/6 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/vYjbXmK/woman-Laptop-User.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Best Buy</h1>
                        <p className="py-6">As an AI language model, I don't have access to real-time data or statistics, but I can tell you that the demand for laptops has been steadily increasing in recent years. With the ongoing COVID-19 pandemic and the shift to remote work and online learning, many people have had to purchase new laptops to accommodate their changing needs.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LaptopHeroSection;