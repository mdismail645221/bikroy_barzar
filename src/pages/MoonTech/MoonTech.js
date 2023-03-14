import React, { useEffect, useState } from 'react';
import '../MoonTech/MoonTech.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { toast } from 'react-hot-toast';



const MoonTech = () => {
    const [moonTech, setMoonTeach] = useState([]);
    useEffect(() => {
        fetch('/desktop.json')
            .then(res => res.json())
            .then(data => {
                console.log("moonTech", data)
                setMoonTeach(data)
            })
    }, [])
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    let emoji = <span>&#128512;</span>
    const handleBooking = () => {
        toast.success(<><span>Functionality will coming soon. {emoji}</span></>)
    }


    return (
        <section className='mb-24 bg-[#FF6347] moontechContainer'>
            <h3 className='text-center text-3xl font-bold text-white pb-10'>Teach Desktop Products</h3>
            <Carousel
                // swipeable={true}
                // draggable={false}
                className='gap container mx-auto'
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                transitionDuration={1000}
                // containerClass="carousel-container"
                // customTransition="all .5"

            >
                {
                    moonTech.map((moon, i) => {
                        return (
                            <div key={i} className="card card-compact w-full h-[600px] bg-base-100 shadow-xl">
                                <figure><img src={moon?.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-md text-center justify-center">{moon?.model.length < 20 ? <br></br> : moon?.model}</h2>
                                    <p className='text-center'>{moon?.keyFeature.map(feature => <span>{feature}</span>)}</p>
                                    <h2 className="card-title text-md justify-center">Price: {moon?.price}</h2>
                                    <div className="card-actions justify-end" onClick={handleBooking}>
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>;
        </section>
    );
};

export default MoonTech;