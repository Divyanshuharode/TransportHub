import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function TransportSlider() {

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            className="w-full"
        >
            <SwiperSlide>
                <div
                    className="flex h-[400px] w-full flex-col items-center justify-center bg-cover bg-center text-white md:h-[450px]"
                    style={{
                        backgroundImage: "linear-gradient(#0007, #0007), url('https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1920&q=90')",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <h2 className="text-3xl font-bold md:text-5xl">
                        Welcome to Transport Hub
                    </h2>
                    <p className="mt-3 text-lg">
                        Your Goods, Our Responsibility
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div
                    className="flex h-[400px] w-full flex-col items-center justify-center bg-cover bg-center text-white md:h-[450px]"
                    style={{
                        backgroundImage: "linear-gradient(#0007, #0007), url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=90')",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <h2 className="text-3xl font-bold md:text-5xl">
                        Grow Your Business
                    </h2>
                    <p className="mt-3 text-lg">
                        Connect with More Customers
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div
                    className="flex h-[400px] w-full flex-col items-center justify-center bg-cover bg-center text-white md:h-[450px]"
                    style={{
                        backgroundImage: "linear-gradient(#0007, #0007), url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=90')",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <h2 className="text-3xl font-bold md:text-5xl">
                        Reliable Transportation
                    </h2>
                    <p className="mt-3 text-lg">
                        Safe, Simple and Secure
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default TransportSlider;