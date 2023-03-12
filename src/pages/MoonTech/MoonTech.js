import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



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
            items: 4
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
    return (
        <section className='container mx-auto mb-24'>
            <h3 className='text-center text-2xl font-bold'>Moon Teach Products</h3>
            <Carousel
                // swipeable={true}
                // draggable={false}
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
                            <div key={i} className="card card-compact w-full bg-base-100 shadow-xl">
                                <figure><img src={moon?.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-md">{moon?.model.length < 20 ? <br></br> : moon?.model}</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
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