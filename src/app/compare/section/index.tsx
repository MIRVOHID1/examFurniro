import React from 'react';
import Image from 'next/image';
import Img1 from '../../../assets/images/Group 156.png'
import Img2 from '../../../assets/images/Group 157.png'
import star from "../../../assets/icons/fullStar.svg"
import halfStar from "../../../assets/icons/halfStar.svg"

const ProductDisplay = () => {
    return (
        <div className="container mx-auto p-4 flex justify-evenly items-center">
            <div className='h-[260px] mt-8'>
                <h2 className="text-[28px] w-[223px] font-medium">Go to Product page for more Products</h2>
                <a href="#" className="text-gray-600 underline mt-2 inline-block">View More</a>
            </div>
            <div className="flex gap-5">
                <div className="flex space-x-4 mt-8">
                    <div className="bg-white p-4 max-w-xs">
                        <Image src={Img1} width={280} height={170} alt="Product" className="rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">Asgaard Sofa</h3>
                            <p className="text-gray-600">Rs. 250,000.00</p>
                            <div className="flex items-center mt-2">
                                <span className="flex">
                                    4.7
                                    <Image src={star} alt="star" className='ml-2' />
                                    <Image src={star} alt="star" />
                                    <Image src={star} alt="star" />
                                    <Image src={star} alt="star" />
                                    <Image src={halfStar} alt="halfStar" />
                                </span>
                                <span className="font-normal text-[13px] text-gray-600 border-l-[1px] pl-3 text-[#9F9F9F]">204 Review</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div className="bg-white p-4 max-w-xs">
                        <Image src={Img2} width={280} height={170} alt="Product" className="rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">Asgaard Sofa</h3>
                            <p className="text-gray-600">Rs. 240,000.00</p>
                            <div className="flex items-center mt-2">
                                <span className="flex">
                                    4.2
                                    <Image src={star} alt="star" className='ml-2' />
                                    <Image src={star} alt="star" />
                                    <Image src={star} alt="star" />
                                    <Image src={star} alt="star" />
                                    <Image src={halfStar} alt="halfStar" />
                                </span>
                                <span className="font-normal text-[13px] text-gray-600 border-l-[1px] pl-3 text-[#9F9F9F]">145 Review</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[200px] mt-8'>
                <h1 className='font-semibold text-[24px] mb-[10px]'>Add A Product</h1>
                <button className="bg-[#B88E2F] w-[242px] h-[39px] text-white px-4 py-2 rounded-lg">Choose a Product</button>
            </div>
        </div>
    );
};

export default ProductDisplay;
