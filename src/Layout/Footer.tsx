import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="">
      <div className="bg-[#053D29] h-[283px] flex">
        <div className="w-[307px] text-[Open Sans] text-[#F9F3EE] text-[12.55px] mt-[90px] ml-[100px]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="flex mt-[20px]">
            <img
              className="mr-[20px]"
              src="src/assets/image/Social.png"
              alt=""
            />
            <svg
              className="mr-[20px]"
              xmlns="http://www.w3.org/2000/svg"
              width="1.6em"
              height="1.6em"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M16 6c-3.766 0-7.094.39-9.125.688c-1.68.246-3.035 1.511-3.344 3.187C3.27 11.301 3 13.387 3 16s.27 4.7.531 6.125c.309 1.676 1.664 2.945 3.344 3.188c2.04.296 5.379.687 9.125.687c3.746 0 7.086-.39 9.125-.688c1.68-.242 3.035-1.511 3.344-3.187c.261-1.43.531-3.52.531-6.125s-.266-4.695-.531-6.125c-.309-1.676-1.664-2.941-3.344-3.188C23.094 6.391 19.765 6 16 6m0 2c3.633 0 6.879.371 8.844.656A1.966 1.966 0 0 1 26.5 10.25c.242 1.32.5 3.277.5 5.75c0 2.469-.258 4.43-.5 5.75a1.957 1.957 0 0 1-1.656 1.594C22.87 23.629 19.609 24 16 24c-3.61 0-6.875-.371-8.844-.656A1.962 1.962 0 0 1 5.5 21.75C5.258 20.43 5 18.477 5 16c0-2.48.258-4.43.5-5.75a1.962 1.962 0 0 1 1.656-1.594C9.117 8.371 12.367 8 16 8m-3 2.281V21.72l1.5-.844l7-4L23 16l-1.5-.875l-7-4zm2 3.438L18.969 16L15 18.281z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.6em"
              height="1.6em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
              />
            </svg>
          </div>
        </div>
        <div className=" text-[#F9F3EE] flex ml-[150px] mt-[30px]">
          <div className="mr-[100px]">
            <h3 className="font-[roboto]">Um</h3>
            <div className="text-[Open sans]">
              <h4 className="mt-[20px]">Kontaktiere uns</h4>
              <h4 className="mt-[10px]">Über uns</h4>
              <h4 className="mt-[10px]">Karriere</h4>
              <h4 className="mt-[10px]">Unternehmensinformationen </h4>
            </div>
          </div>
          <div className="mr-[180px]">
            <h3 className="font-[roboto]">Hilfe</h3>
            <div className="text-[Open sans]">
              <h4 className="mt-[20px]">Unsere Produzenten</h4>
              <h4 className="mt-[10px]">Zahlung</h4>
              <h4 className="mt-[10px]">Versand</h4>
              <h4 className="mt-[10px]">Stornierung & Rückgabe</h4>
              <h4 className="mt-[10px]">Verstoß melden</h4>
            </div>
          </div>
          <div>
            <h3 className="font-[roboto]">politik</h3>
            <div className="text-[Open sans]">
              <h4 className="mt-[20px]">Rücknahmegarantie</h4>
              <h4 className="mt-[10px]">Nutzungsbedingungen</h4>
              <h4 className="mt-[10px]">Sicherheit</h4>
              <h4 className="mt-[10px]">Privatsphäre</h4>
              <h4 className="mt-[10px]">Seitenverzeichnis</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#062F21] h-[43.5px] justify-between flex text-[#FFFFFF] text-[Open sans] text-[11.71px]">
        <div className="mt-[10px] ml-[80px]">
          <p>2023 hood.de , Inc.</p>
        </div>
        <div className="mt-[10px]">
          <img src="src/assets/image/payment.png" alt="" />
        </div>
        <div className="flex mt-[10px] mr-[68px]">
          <p>Scroll to top</p>
          <img
            className="w-[13.38px] h-[13.38px] mt-[2px] ml-[5px]"
            src="src/assets/img/Arrow_top.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
