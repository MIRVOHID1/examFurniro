"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const HomeSection1 = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://ecommerce-backend-fawn-eight.vercel.app/api/categories')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the categories!", error);
            });
    }, []);

    return (
        <div className="container mx-auto">
            <div>
                <h1 className="text-3xl font-bold text-center mt-[70px] mb-[20px] text-[32px]">Browse The Range</h1>
                <p className="text-center text-[#6C6C6C] text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="relative flex flex-wrap justify-center mt-[100px]">
                {categories.map((category: any, index: number) => (
                    <div key={category.id || index} className="p-2 mb-[70px]" style={{ width: '381px', height: '480px' }}>
                        <div className="relative w-full h-full">
                            <Image
                                className="object-cover"
                                src={category.image}
                                alt={category.name}
                                layout="fill"
                            />
                        </div>
                        <p className="font-semibold text-[24px] items-center text-center mt-[30px]">{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeSection1;
