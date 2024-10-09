import Page from "@/components/Page";
import React from "react";

const priceList = [
  {
    title: "Service Call (Visit Fee)",
    amount: 65.0,
  },
  {
    title: "Lockout Service",
    amount: "75 - 225",
    description: "Depends on the security grade of the locking system",
  },
  {
    title: "Lock Change",
    amount: "35 - 65",
    description:
      "Labor charge per lock, prices and options for the locks or hardware will be given on-site after visual inspection",
  },
  {
    title: "Lock Rekey",
    amount: "25 - 45",
    description:
      "Labor charge per lock, prices and options for the replacement cylinders (if required) will be given on-site after visual inspection",
  },
  {
    title: "Lock Repair",
    amount: "65 - 150",
    description:
      "Labor charge per lock, prices and options for the replacement parts (if required) will be given on-site after visual inspection",
  },
  {
    title: "Cut Out Holes For New Lock (Wooden Door)",
    amount: "85",
    description: "Price depends on the material of the door",
  },
  {
    title: "Cut Out Holes For New Lock (Steel Door)",
    amount: "120",
    description: "Price depends on the material of the door",
  },
  {
    title: "Broken Key Extraction",
    amount: 105.0,
    description: "Flat rate fee",
  },
  {
    title: "Safe Opening",
    amount: "185 - 425",
    description: "Depends on the security grade of the locking system",
  },
  {
    title: "Car Key Making (Non Transponder Key)",
    amount: "165 - 225",
    description: "Depends on the complexity",
  },
  {
    title: "Car Key Making (Transponder Key)",
    amount: "225 - 285",
    description: "Depends on the complexity and initial cost of the key",
  },
  {
    title: "Car Key Making (SMART Key / PROX Key)",
    amount: "300 - 499",
    description: "Depends on the complexity and initial cost of the key",
  },
  {
    title: "Car Ignition Lock Cylinder Change / Repair",
    amount: "65 - 150",
    description:
      "Labor charge, prices and options for replacement parts will be given on-site after visual inspection",
  },
];

const Price = () => {
  return (
    <Page imgURL="/shaking-hands.webp" title="Our Prices" description="">
      <div className="demo-container p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {priceList.map((price) => (
          <div className="rounded-[30px] md:rounded-[36px] bg-[#FAFAFA] overflow-hidden border-[1px] border-gray-200 p-8 relative lg:col-span-1">
            <div className="h-full">
              <div className="h-full z-10 relative lg:flex lg:flex-col lg:justify-start lg:w-full lg:pr-8 lg:items-center">
                <div className="flex flex-col flex-1 lg:w-full justify-between h-full space-y-5">
                  <div className="flex justify-between flex-col">
                    <div className="text-xl md:text-2xl font-bold text-gray-900 flex justify-between">
                      <span>{price.title}</span>
                    </div>
                    <div className="pt-5 text-gray-500 font-medium text-base space-y-1">
                      <div className="flex items-center align-bottom">
                        <span className="pt-1.5">$</span>
                        <div className="ml-1 mr-2 text-2xl md:text-3xl font-bold text-gray-900">
                          <span>
                            {typeof price.amount === "string" ? (
                              price.amount.includes(" - ") ? (
                                <>
                                  {price.amount.split(" - ")[0]}
                                  {"-"}
                                  <span className="pl-1 pt-1.5 text-gray-500 font-normal text-base">
                                    $
                                  </span>{" "}
                                  {price.amount.split(" - ")[1]}
                                </>
                              ) : (
                                price.amount
                              )
                            ) : (
                              price.amount
                            )}
                          </span>
                        </div>
                      </div>

                      <div className="text-base">One time payment</div>
                    </div>
                    <div className="lg:hidden">
                      <ul className="space-y-2 pt-8 lg:pt-0">
                        {price.description && (
                          <li className="flex items-center font-medium space-x-2 text-gray-600">
                            <svg
                              className="h-4 w-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                            <span>{price.description}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                  <div className="pt-2">
                    <a
                      href="/billing"
                      type="button"
                      target="_blank"
                      className="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 bg-[#751318] text-white py-4 px-5 rounded-2xl cursor-pointer"
                    >
                      <span className="w-full font-semibold text-base">
                        Choose
                      </span>
                      <svg
                        className="inline-block h-6"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 12.4999H21L14 19.4999M14 5.5L18 9.5"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <ul className="space-y-2 pt-8 lg:pt-8">
                    {price.description && (
                      <li className="flex items-center font-medium space-x-2 text-gray-600">
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <span>{price.description}</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="rounded-[30px] md:rounded-[36px] bg-[#FAFAFA] overflow-hidden border-[1px] border-[#751318] p-8 relative sm:col-span-2 lg:col-span-1">
          <div className="h-full">
            <div className="flex flex-col justify-between h-full space-y-5">
              <div className="flex justify-between flex-col">
                <div className="text-xl md:text-2xl font-bold text-[#751318] flex justify-between">
                  <span>Important</span>
                </div>
                <div className="pt-5 text-[#751318]">
                  Contact us for a custom quote and a custom onboarding process.
                </div>
              </div>
              <div className="pt-2">
                <a
                  href="/contact"
                  type="button"
                  className="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 bg-[#751318] text-white py-4 px-5 rounded-2xl cursor-pointer"
                >
                  <span className="w-full font-semibold text-base">
                    Contact Us
                  </span>
                  <svg
                    className="inline-block h-6"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 12.4999H21L14 19.4999M14 5.5L18 9.5"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Price;
