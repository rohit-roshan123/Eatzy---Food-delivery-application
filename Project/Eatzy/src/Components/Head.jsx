import React from "react";

function Head() {
  return (
    <div className="w-full shadow-md h-22 flex justify-center items-center">
      <div className="w-[80%] flex justify-between">
        <div className="flex items-center">
          <img
            className="w-20"
            src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
          />
          <div className="flex items-center gap-2">
            <p className="font-bold border-b-2 border-black">Other</p>
            <i className="fi mt-2 text-orange-500 text-2xl fi-rs-angle-small-down"></i>
          </div>
        </div>

        <div className="flex items-center gap-12">

            <div className="flex">
                <i className="fi fi-rr-shopping-bag"></i>
                <p>Swiggy corporate</p>
            </div>

            <div className="flex">
                <i className="fi fi-rr-shopping-bag"></i>
                <p>Search</p>

            </div>
            <div className="flex">
                <i className="fi fi-rr-shopping-bag"></i>
                <p>Offers</p>
            </div>
            <div className="flex">
                <i className="fi fi-rr-shopping-bag"></i>
                <p>Help</p>
            </div>
            <div className="flex">
                <i className="fi fi-rr-shopping-bag"></i>
                <p>Sign in</p>
            </div>
            <div className="flex">
                <i className="fi fi-rr-shopping-bag"></i>
                <p>Cart</p>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Head;
