"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import star from '../../../assets/icons/fullStar.svg';
import halfStar from '../../../assets/icons/halfStar.svg';
import Face from "../../../assets/icons/face.svg"
import In from "../../../assets/icons/inn.svg"
import Twitter from "../../../assets/icons/twitter.svg"
import Left from "../../../assets/images/singleLeftImage.png"
import Right from "../../../assets/images/singleRightImage.png"

const Page = ({ params }: { params: { productId: string } }) => {
  interface Product {
    _id: string;
    title: string;
    price: number;
    image: string;
    description: string;
    rate: number;
    images: string[];
  }

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<string>('');

  useEffect(() => {
    axios
      .get(`https://ecommerce-backend-fawn-eight.vercel.app/api/products/${params.productId}`)
      .then((response) => {
        const fetchedProduct = response.data;
        setProduct(fetchedProduct);
        setSelectedImage(fetchedProduct.image);
        setLoading(false);
      })
      .catch((error) => {
        console.error('There was an error fetching the product!', error);
        setLoading(false);
      });
  }, [params.productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>No product found.</div>;
  }

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {Array(fullStars)
          .fill(null)
          .map((_, index) => (
            <Image key={`full-${index}`} src={star} alt="star" width={20} height={20} />
          ))}
        {Array(halfStars)
          .fill(null)
          .map((_, index) => (
            <Image key={`half-${index}`} src={halfStar} alt="half star" width={20} height={20} />
          ))}
        {Array(emptyStars)
          .fill(null)
          .map((_, index) => (
            <Image key={`empty-${index}`} src={star} alt="empty star" width={20} height={20} style={{ opacity: 0.2 }} />
          ))}
      </>
    );
  };

  const addToCart = (e: React.MouseEvent<HTMLButtonElement>, product: Product) => {
    e.preventDefault();

    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]') as Product[];

    const productExists = existingCart.some(item => item._id === product._id);

    if (productExists) {
        alert('Product already in cart');
        return;
    }

    const updatedCart = [...existingCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('Product added to cart');
};

  return (
    <div>
      <div className="container mx-auto w-full mb-24">
        <div className="mt-14 flex justify-between">
          <div className='flex'>
            <div className="flex flex-col items-center mr-10">
              {product.images && product.images.length > 0 ? (
                product.images.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img}
                    alt={`Thumbnail ${idx}`}
                    width={80}
                    height={80}
                    className={`mb-4 cursor-pointer ${selectedImage === img ? 'border-2 border-blue-500' : ''}`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))
              ) : (
                <Image
                  src={product.image}
                  alt="Product main image"
                  width={80}
                  height={80}
                  className="mb-4 cursor-pointer border-2 border-blue-500"
                  onClick={() => setSelectedImage(product.image)}
                />
              )}
            </div>
            <Image
              className="object-cover rounded-md w-[570px] h-[500px]"
              src={selectedImage}
              alt={product.title}
              width={570}
              height={500}
            />
          </div>
          <div className="p-5 w-[706px]">
            <p className="font-normal text-4xl">{product.title}</p>
            <p className="font-medium text-2xl text-gray-500 mt-1">Rp {product.price}.00</p>
            <div className='flex mt-2 mb-2'>
              <div className='flex border-r-2 border-gray-500 pr-4'>{renderStars(product.rate)}</div>
              <div><p className="font-normal text-sm ml-4 text-gray-500">5 Customer Review</p></div>
            </div>
            <p className="font-normal text-sm mt-4 w-[424px]">{product.description}</p>
            <div className='mt-7'>
              <p className='font-normal text-sm text-gray-500'>Size</p>
              <form className='flex mt-2'>
                <label className='mr-4 bg-[#F9F1E7] p-[10px] rounded-[5px]'>
                  <input type="radio" name="size" value="L" className="mr-2" /> L
                </label>
                <label className='mr-4 bg-[#F9F1E7] p-[10px] rounded-[5px]'>
                  <input type="radio" name="size" value="XL" className="mr-2" /> XL
                </label>
                <label className='bg-[#F9F1E7] p-[10px] rounded-[5px]'>
                  <input type="radio" name="size" value="XS" className="mr-2" /> XS
                </label>
              </form>
            </div>
            <div className='mt-7'>
              <p className='font-normal text-sm text-gray-500'>Color</p>
              <div className='flex mt-2'>
                <div className="w-6 h-6 bg-[#816DFA] rounded-full mr-2 cursor-pointer"></div>
                <div className="w-6 h-6 bg-[#000000] rounded-full mr-2 cursor-pointer"></div>
                <div className="w-6 h-6 bg-[#B88E2F] rounded-full mr-2 cursor-pointer"></div>
              </div>
            </div>
            <div className='flex mt-10'>
              <button  onClick={(e) => addToCart(e, product)} className="px-6 py-3 bg-[#FFFFFF] text-[#000000] mr-4 rounded-[15px] border border-black">Add To Cart</button>
              <button className="px-6 py-3 bg-[#FFFFFF] text-[#000000] mr-4 rounded-[15px] border border-black">+ Compare</button>
            </div>
            <div className="mt-14 border-t-[1px] border-#9F9F9F-500 pt-[50px]">
              <div className='flex'>
                <p className="font-normal text-sm w-[80px]">SKU:</p>
                <p>SS001</p>
              </div>
              <div className='flex'>
                <p className="font-normal text-sm w-[80px]">Category:</p>
                <p>Sofas</p>
              </div>
              <div className='flex'>
                <p className="font-normal text-sm w-[80px]">Tags:</p>
                <p>Sofa, Chair, Home, Shop</p>
              </div>
              <div className="flex mt-4">
                <p className="font-normal text-sm w-[80px]">Share:</p>
                <div className='flex'>
                  <a href="#" className="mr-4"><Image src={Face} alt="Facebook" width={20} height={20} /></a>
                  <a href="#" className="mr-4"><Image src={In} alt="LinkedIn" width={20} height={20} /></a>
                  <a href="#"><Image src={Twitter} alt="Twitter" width={20} height={20} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[80px] pb-[80px] border-t-[2px] border-[#D9D9D9]">
        <div className="mt-14 container mx-auto">
          <div className='flex items-center w-[649px] justify-between mx-auto mb-10'>
            <p className="font-normal text-[24px] text-[#9F9F9F]">Description</p>
            <p className="font-normal text-[24px] text-[#9F9F9F]">Additional Information</p>
            <p className='font-normal text-[24px] text-[#9F9F9F]'>Reviews {`[5]`}</p>
          </div>
          <div className='w-[1026px] mx-auto mb-8'>
            <p className='font-normal text-[16px] text-[#9F9F9F] mb-10'
            >Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p className='font-normal text-[16px] text-[#9F9F9F]'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
          </div>
          <div className='flex items-center justify-evenly'>
            <Image src={Left} alt="image" />
            <Image src={Right} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
