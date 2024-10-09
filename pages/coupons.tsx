"use client";

import Page from "@/components/Page";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import React from "react";

const coupons = [
  {
    id: 1,
    src: "/coupons/1.webp",
  },
  {
    id: 2,
    src: "/coupons/2.webp",
  },
  {
    id: 3,
    src: "/coupons/3.webp",
  },
  {
    id: 4,
    src: "/coupons/4.webp",
  },
];
const handlePrint = (coupon: any) => {
  window.print();
  //   const printWindow = window.open("", "_blank");
  //   printWindow.document.write(`
  //       <html>
  //         <head>
  //           <title>Print Coupon</title>
  //           <style>
  //             body, html { margin: 0; padding: 0; }
  //             img { width: 100%; height: auto; }
  //           </style>
  //         </head>
  //         <body onload="window.print(); window.close();">
  //           <img src="${coupon.src}" alt="Coupon" />
  //         </body>
  //       </html>
  //     `);
  //   printWindow.document.close();
};

const Coupons = () => {
  return (
    <Page imgURL="/black.webp" title="Coupons" description="">
      <div className="flex justify-center items-center w-full h-full px-10">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 bg-gray-100 shadow-lg p-5 rounded-lg">
          {coupons.map((coupon: any) => (
            <div
              onClick={() => {
                handlePrint(coupon);
              }}
              className="hover:cursor-pointer"
            >
              <img className="w-full h-full object-cover" src={coupon.src} />
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Coupons;
