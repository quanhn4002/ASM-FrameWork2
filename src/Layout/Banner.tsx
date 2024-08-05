import React, { useState, useRef, useEffect } from "react";

type Props = {};

const Banner = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const updateSlider = (index: number) => {
    if (sliderRef.current) {
      const width = sliderRef.current.children[0].clientWidth;
      sliderRef.current.style.transform = `translateX(-${index * width}px)`;
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex - 1;
        updateSlider(newIndex);
        return newIndex;
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < (sliderRef.current?.children.length || 1) - 1) {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        updateSlider(newIndex);
        return newIndex;
      });
    }
  };
  /// sile show tự động'
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full  overflow-hidden">
      <div
        id="slider"
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-in-out"
      >
        {/* Slide1 */}
        <div className="flex-shrink-0 w-full h-[90%] bg-gradient-to-r from-[rgba(91,159,80,0.6)] to-[rgb(236,239,229)] relative">
          <img
            src="../../Ảnh ASM1/fwfqq 1.png"
            alt=""
            className="w-[95%] object-cover ml-10"
          />
          <div className="absolute top-1/2 left-36 transform -translate-y-1/2 font-baloo">
            <h2 className="text-5xl font-bold font-baloo w-[60%]  text-lime-950">
              Chúng tôi chăm sóc khu vườn và ngôi nhà xinh đẹp của bạn
            </h2>
            <p className="mt-4 w-[40%] text-yellow-900 font-mono">
              Lorem Ipsum chỉ đơn giản là văn bản giả của việc in ấn và sắp chữ
              ngành công nghiệp. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn
              của ngành kể từ những năm 1500..
            </p>
            <button className="mt-6 px-8 py-2 text-lime-950 rounded border-2 border-lime-950">
              Lern mehr
            </button>
          </div>
        </div>
        {/* slide2 */}
        <div className="flex-shrink-0 w-full h-[90%] bg-gradient-to-r from-[rgba(91,159,80,0.6)] to-[rgb(236,239,229)] relative">
          <img
            src="../../Ảnh ASM1/fwfqq 1.png"
            alt=""
            className="w-[95%] object-cover ml-20"
          />
          <div className="absolute top-1/2 left-36 transform -translate-y-1/2 font-baloo">
            <h2 className="text-5xl font-bold font-baloo w-[60%]  text-lime-950">
              Chúng tôi chăm sóc khu vườn và ngôi nhà xinh đẹp của bạn
            </h2>
            <p className="mt-4 w-[40%] text-yellow-900 font-mono">
              Lorem Ipsum chỉ đơn giản là văn bản giả của việc in ấn và sắp chữ
              ngành công nghiệp. Lorem Ipsum đã trở thành văn bản giả tiêu chuẩn
              của ngành kể từ những năm 1500.
            </p>
            <button className="mt-6 px-8 py-2 text-lime-950 rounded border-2 border-lime-950">
              Lern mehr
            </button>
          </div>
        </div>
        {/* slide3 */}
      </div>
      {/* Slider controls */}
      <i
        onClick={handlePrev}
        className="fa-solid fa-chevron-left absolute left-8 top-1/2 transform -translate-y-1/2 text-gray-600 text-2xl px-4 py-2 rounded cursor-pointer"
      ></i>
      <i
        onClick={handleNext}
        className="fa-solid fa-chevron-right absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-600 text-2xl px-4 py-2 rounded cursor-pointer"
      ></i>
    </div>
  );
};

export default Banner;
