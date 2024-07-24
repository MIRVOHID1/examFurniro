"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import Share from "../../../assets/icons/share.svg";
import Compare from "../../../assets/icons/exchange.svg";
import Heart from "../../../assets/icons/Heart.svg";
import Skeleton from "@/app/shop/section2/Skeleton";

interface Product {
    _id: string;
    title: string;
    price: number;
    image: string;
}

const Index: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
         axios.get('https://ecommerce-backend-fawn-eight.vercel.app/api/products')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the products!", error);
                setLoading(false);
            });

        const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    }, []);

    const addToCart = (product: Product) => {
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
        <div className="container mx-auto">
            <div>
                <h1 className="font-bold text-center items-center text-[40px] mt-[50px] mb-[30px]">OUR PRODUCTS</h1>
            </div>
            <div className="grid gap-4 grid-cols-4 mb-[60px]">
                {loading ? (
                    Array.from({ length: 12 }).map((_, index) => <Skeleton key={index} />)
                ) : (
                    products.map((product, index) => (
                        <Link href={`/home/${product._id}`} key={product._id || index} className="relative w-[285px] h-[480px] bg-[#F4F5F7] shadow-md overflow-hidden group">
                            <div>
                                <Image className="w-full h-[301px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" src={product.image} alt={product.title} width={285} height={301}/>
                                <div className="p-5">
                                    <p className="font-bold text-[24px]">{product.title}</p>
                                    <p className="font-medium text-[16px] mt-[20px]">{product.title}</p>
                                    <p className="font-bold text-[24px] mt-[20px]">Rp {product.price}.00</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out">
                                <button onClick={() => addToCart(product)} className="bg-white text-black px-4 py-2 mb-2">
                                    <p className="text-[16px] text-[#B88E2F] font-semibold">Add to cart</p>
                                </button>
                                <div className="flex space-x-2">
                                    <button className="text-white flex items-center"><Image src={Share} alt="share" width={20} /> Share</button>
                                    <button className="text-white flex items-center"><Image src={Compare} alt="compare" width={20} /> Compare</button>
                                    <button className="text-white flex items-center"><Image src={Heart} alt="heart" width={20} /> Like</button>
                                </div>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
};

export default Index;
