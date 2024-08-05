import React from "react";

type Props = {};

const ImageLayout = (props: Props) => {
  return (
    <>
      <div className="w-full p-4 flex">
        <div className="w-[40%] mt-1 ml-40 p-2 flex items-center justify-center relative">
          <div className="h-[500px] w-[500px] overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src="../../Ảnh ASM1/AdobeStock_204287225_Preview 1.png"
              alt="Large Image"
            />
          </div>
          <h3 className="absolute top-[20px] left-2 w-full py-2 bg-gradient-to-r from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)] text-[#665345] font-semibold text-[14px] px-4">
            Garten Spaten
          </h3>
        </div>
        <div className="w-1/3 p-2 flex flex-wrap content-center items-center justify-center">
          <div className="w-1/2 p-2 flex items-center justify-center relative">
            <div className="h-[240px] w-[240px] overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="../../Ảnh ASM1/gtgre 1.png"
                alt="Small Image 1"
              />
            </div>
            <h3 className="absolute top-[20px] left-2 w-full py-2 bg-gradient-to-r from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)] text-[#665345] font-semibold text-[14px] px-4">
              Sand
            </h3>
          </div>
          <div className="w-1/2 p-2 flex items-center justify-center relative">
            <div className="h-[240px] w-[240px] overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="../../Ảnh ASM1/ffgdsa 1.png"
                alt="Small Image 2"
              />
            </div>
            <h3 className="absolute top-[20px] left-2 w-full py-2 bg-gradient-to-r from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)] text-[#665345] font-semibold text-[14px] px-4">
              Pflanzer
            </h3>
          </div>
          <div className="w-1/2 p-2 flex items-center justify-center relative">
            <div className="h-[240px] w-[240px] overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="../../Ảnh ASM1/gggrrr 1.png"
                alt="Small Image 3"
              />
            </div>
            <h3 className="absolute top-[20px] left-2 w-full py-2 bg-gradient-to-r from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)] text-[#665345] font-semibold text-[14px] px-4">
              Schlammkuchen
            </h3>
          </div>
          <div className="w-1/2 p-2 flex items-center justify-center relative">
            <div className="h-[240px] w-[240px] overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="../../Ảnh ASM1/bfdsA 1.png"
                alt="Small Image 4"
              />
            </div>
            <h3 className="absolute top-[20px] left-2 w-full py-2 bg-gradient-to-r from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)] text-[#665345] font-semibold text-[14px] px-4">
              Klemmen{" "}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageLayout;
