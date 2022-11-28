import React from 'react';
import phone1 from '../../../assets/images/phone1.jpg'
import phone2 from '../../../assets/images/phone2.png'
import phone3 from '../../../assets/images/phone3.png'
// import phone4 from '../../../assets/images/phone4.jpg'

const Carosel = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full hidden md:block">
                {/* <img src={phone1} className="w-full h-96" /> */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className="hero bg-base-200 z-1 py-16">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={phone1} className="max-w-sm h-[200px] md:h-[500px] rounded-lg shadow-2xl" alt='sampony' />
                        <div className='w-1/2'>
                            <h1 className="text-2xl lg:text-5xl font-bold">SAMPNONY 2020</h1>
                            <p className="py-6">Symphony is a Bangladeshi brand that manufactures Android smartphones, feature phones and Android tablet computers or tabs.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                {/* <img src={phone2} className="w-full h-96" /> */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="hero bg-base-200 z-1">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={phone2} className="max-w-sm h-[200px] md:h-[500px] rounded-lg shadow-2xl bg-[F2F2F2]"  alt='oppo x pro'/>
                        <div className='w-1/2'>
                            <h1 className="text-2xl lg:text-5xl font-bold">OPPO X PRO</h1>
                            <p className="py-6">OPPO, a mobile phone brand enjoyed by young people around the world, specializes in designing innovative mobile photography technology.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                {/* <img src={phone3} className="w-full h-96" /> */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>

                <div className="hero bg-base-200 z-1">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={phone3} className="max-w-sm h-[200px] md:h-[500px] rounded-lg shadow-2xl" alt='nokiya phone'/>
                        <div className='w-1/2'>
                            <h1 className="text-2xl lg:text-5xl font-bold">NOKIYA A 250</h1>
                            <p className="py-6">It is the largest mobile phone manufacturer in the world. Nokia manufactures portable electronic devices, mainly mobile phones.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>

            </div>
            {/* <div id="slide4" className="carousel-item relative w-full">
                <img src="https://placeimg.com/800/200/arch" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> */}
        </div>
    );
};

export default Carosel;