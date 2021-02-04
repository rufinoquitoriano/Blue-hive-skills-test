import React from "react";

function Home() {
  return (
    <div className="px-32 bg-gray-200 h-screen">
      <div className="text-center text-4xl font-bold pt-12">
        Blue Hive Test Skills
      </div>
      <div className="flex justify-between border-2 py-12">
        <div className="border-2 border-gray-400 flex flex-col w-1/4 ">
          <div className="border-b-2 border-gray-400 text-center">
            <input
              className="w-full text-center"
              placeholder="Invoice number here"
            />
          </div>
          <input className="w-full border-gray-500 text-center" />
        </div>
        <div className=" border-2 border-gray-400 flex flex-col w-1/4 ">
          <input className="w-full border-b-2 border-gray-500 text-center" />
          <input className="w-full border-gray-500 text-center" />
        </div>
        <div className="border-2 border-gray-400 flex flex-col w-1/4 ">
          <input className="w-full border-b-2 border-gray-500 text-center" />
          <input className="w-full border-gray-500 text-center" />
        </div>
        <div className="border-2 border-gray-400 flex flex-col w-1/4 ">
          <input
            className="w-full border-b-2 border-gray-500 text-center"
            placeholder="Invoice Date Here"
          />
          <input
            className="w-full text-center "
            placeholder="Customer Name Here"
          />
        </div>
      </div>
      <div className="flex justify-between border-2 border-red-700">
        <div className="border-r border-red-700 w-1/4">
          <div className="bg-gray-600 text-gray-200 text-center">
            Product Name
          </div>
          <div className="bg-gray-400">
            <input className="w-full border-b-2 border-red-500 text-center" />
            <input className="w-full border-b-2 border-red-500 text-center" />
            <input className="w-full border-b-2 border-red-500 text-center" />
            <input className="w-full  text-center" />
          </div>
        </div>

        <div className="border-r border-red-700 w-1/4">
          <div className="bg-gray-600 text-gray-200 text-center">Quantity</div>
          <div className="bg-gray-400">
            <input className="w-full border-b-2 border-red-500 text-center" />
            <input className="w-full border-b-2 border-red-500 text-center" />
            <input className="w-full border-b-2 border-red-500 text-center" />
            <input className="w-full  text-center" />
          </div>
        </div>

        <div className="border-r border-red-700 w-1/4">
          <div className="bg-gray-600 text-gray-200 text-center">Price</div>
          <div className="bg-gray-400">
            <input className="w-full border-b-2 border-red-500 text-center" />
            <input className="w-full border-b-2 border-red-500 text-center" />
            <input className="w-full border-b-2 border-red-500 text-center" />
            <input className="w-full  text-center" />
          </div>
        </div>

        <div className="border-r border-red-700 w-1/4">
          <div className="bg-gray-600 text-gray-200 text-center">Subtotal</div>
          <div className="bg-gray-400">
            <input className="w-full border-b-2 border-red-500 text-center" />
            <input className="w-full border-b-2 border-red-500 text-center" />
            <input className="w-full border-b-2 border-red-500 text-center" />
            <input className="w-full  text-center" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
