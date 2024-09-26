import Image from "next/image";
import React from "react";

const FooterTop = () => {
  return (
    <div className="flex justify-between items-center flex-col lg:flex-row px-8 md:px-16 lg:px-24 gap-8 bg-[#f8fbe9af] mt-6 pt-4">
      <div>
        <h1 className="font-bold text-2xl mb-4 md:text-3xl lg:text-4xl font-[Lora]">
          Ready to apply for Visa?
        </h1>
        <p className="text-lg">
          If you are ready to Apply for any type of visa,
          <br />
          Submit your application by clicking "Apply Now Button".
        </p>
        <div className="block py-4 text-white">
          <a href="https://apply.iglobalvisa.com/" rel="noopener noreferrer">
            <button className="bg-blue-500 text-white px-6 py-3 font-semibold rounded-md uppercase">
              Apply Now
            </button>
          </a>
        </div>
      </div>

      <div>
        <Image
          src="/foot1.png"
          alt="Footer intro"
          width={500}
          height={700}
          className="rounded-2xl w-full h-full"
        />
      </div>
    </div>
  );
};

export default FooterTop;
