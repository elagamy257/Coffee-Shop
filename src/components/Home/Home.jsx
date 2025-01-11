// eslint-disable-next-line no-unused-vars
import React from 'react'
import HomePng from "../../assets/coffee2.png";

const Home = () => {
    return (
        <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
            <div className="container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* Text content section */}
                    <div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                            We serve the richest{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive">
                            Coffee</span>{" "} in the city
                        </h1>
                        <div data-aos="fade-up" data-aos-delay="400">
                            <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                            Coffee And Code
                            </button>
                        </div>
                    </div>

                    {/* Image content section */}
                    <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
                        <img src={HomePng} alt="biryani img" className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin "/>
                        <div data-aos="fade-left" className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute top-10 left-10">
                            <h1 className="text-white">Hey Coder</h1>
                        </div>
                        <div data-aos="fade-right" data-aos-offset="0" className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute bottom-10 right-10">
                            <h1 className="text-white">Best Coffee</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
