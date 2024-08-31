import clsx from "clsx";

import { Props } from "./";
import { getMonthANDDay, getTime } from "./../../services";

import "./style.css";

const Card = ({ flight, className, ...rest }: Props) => {
  const renderFrontCard = (
    <div className="flip-card-front bg-white overflow-hidden rounded-md h-[200px]">
      <div className="w-full h-full relative">
        <span className="absolute top-4 left-[-40px] rotate-[-50deg] bg-red-600 w-32 py-1 text-white text-xs">
          {flight.class}
        </span>
        <div className="flex justify-between items-center w-full h-full px-3">
          <div className="w-40 h-auto mr-14">
            <img src={flight.logoSrc} alt="" />
          </div>
          <div className="flex items-center justify-between w-full">
            <div>
              <span className="block text-base text-gray-400">
                {flight.src.country}
              </span>
              <span className="block text-3xl text-gray-900 font-bold">
                {getTime(flight.src.time)}
              </span>
              <span className="block text-base text-gray-400">
                {getMonthANDDay(flight.src.time)}
              </span>
            </div>
            <div className="mx-4">
              <img src="/assets/img/airplane.png" alt="airplane" />
            </div>
            <div>
              <span className="block text-base text-gray-400">
                {flight.dst.country}
              </span>
              <span className="block text-3xl text-gray-900 font-bold">
                {getTime(flight.dst.time)}
              </span>
              <span className="block text-base text-gray-400">
                {getMonthANDDay(flight.dst.time)}
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border-2 border-dotted border-gray-500 text-lg font-bold rounded px-5 ">
          {flight.price}
        </div>
      </div>
    </div>
  );

  const renderBackCard = (
    <div className="flip-card-back ">
      {/* first section */}
      <div className="w-full relative bg-white overflow-hidden rounded-xl h-[150px] border-b-2 border-dotted border-gray-300">
        <span className="absolute top-4 left-[-40px] rotate-[-50deg] bg-red-600 w-32 py-1 text-white text-xs">
          {flight.class}
        </span>
        <div className="flex justify-between items-center w-full h-full  px-10">
          <div className="flex flex-col justify-center items-center">
            <span className="text-gray-900 font-bold text-lg">From</span>
            <span className="text-gray-900 font-bold text-4xl">
              {flight.src.iso3}
            </span>
            <span className="text-gray-900 font-medium text-lg">
              {flight.src.country}
            </span>
          </div>
          <div className="w-32 flex flex-col justify-center items-center">
            <div className="w-1/2 h-auto mb-2 relative">
              <img src="/assets/img/airplane.png" alt="" />
            </div>
            <div className="bg-gray-300 rounded-md text-2xl text-gray-900 font-bold w-full">
              {flight.price}$
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-gray-900 font-bold text-lg">To</span>
            <span className="text-gray-900 font-bold text-4xl">
              {flight.dst.iso3}
            </span>
            <span className="text-gray-900 font-medium text-lg">
              {flight.dst.country}
            </span>
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="w-full h-[150px] bg-white rounded-xl px-10 flex flex-col justify-center items-center">
        <div className="flex justify-between items-center w-full">
          <div className="basis-1/3">
            <div className="text-2xl font-bold text-gray-900">
              <span>{getTime(flight.src.time)}</span>-
              <span>{getTime(flight.dst.time)}</span>
            </div>
            <span className="text-xl text-gray-600 font-normal">
              Flight Time
            </span>
          </div>
          <div className="basis-1/3">
            <div className="text-2xl font-bold text-gray-900">
              <span className="mr-3">2h</span>
              <span>25min</span>
            </div>
            <span className="text-xl text-gray-600 font-normal">Duration</span>
          </div>
          <div className="basis-1/3">
            <span className="block text-2xl font-bold text-gray-900">5:35</span>
            <span className="text-xl text-gray-600 font-normal">Boarding</span>
          </div>
        </div>
        <div className="flex justify-between items-center w-full mt-2">
          <div className="basis-1/3">
            <span className="block text-2xl font-bold text-gray-900">No</span>
            <span className="text-xl text-gray-600 font-normal">Transfer</span>
          </div>
          <div className="basis-1/3">
            <span className="block text-2xl font-bold text-gray-900">
              {flight.gates}
            </span>
            <span className="text-xl text-gray-600 font-normal">Gate</span>
          </div>
          <div className="basis-1/3">
            <span className="block text-2xl font-bold text-gray-900">
              {flight.seat}
            </span>
            <span className="text-xl text-gray-600 font-normal">Seat</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      {...rest}
      className={clsx([
        "flip-card",
        "transition-all duration-300 ease-linear h-[200px] hover:h-[300px]",
        className,
      ])}
    >
      <div className="flip-card-inner">
        <>{renderFrontCard}</>
        <>{renderBackCard}</>
      </div>
    </div>
  );
};

export default Card;
