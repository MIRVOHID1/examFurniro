"use client";
import Delete from "../../../assets/icons/ant-design_delete-filled.svg";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  _id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const initializedCart = savedCart.map((product: Product) => ({
      ...product,
      quantity: product.quantity || 1,
    }));
    setCart(initializedCart);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const getTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter(product => product._id !== productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    const updatedCart = cart.map(product =>
      product._id === productId ? { ...product, quantity: Math.max(quantity, 1) } : product
    );
    setCart(updatedCart);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-between items-start gap-6">
        <div className="w-3/4">
          <table className="w-full bg-white">
            <thead className='bg-[#F9F1E7]'>
              <tr>
                <th className="p-4 text-left">Product</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-left">Quantity</th>
                <th className="p-4 text-left">Subtotal</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(product => (
                <tr key={product._id}>
                  <td className="p-4 flex items-center">
                    <Image src={product.image} alt={product.title} width={50} height={50} className="w-20 h-20 object-cover mr-4 rounded-lg" />
                    <span>{product.title}</span>
                  </td>
                  <td className="p-4">Rs. {product.price.toFixed(2)}</td>
                  <td className="p-4">
                    <input
                      type="number"
                      value={product.quantity}
                      min="1"
                      onChange={(e) => updateQuantity(product._id, parseInt(e.target.value))}
                      className="w-12 text-center border border-gray-300 rounded"
                    />
                  </td>
                  <td className="p-4">Rs. {(product.price * product.quantity).toFixed(2)}</td>
                  <td className="p-4">
                    <button onClick={() => removeFromCart(product._id)} className="text-red-600"><Image src={Delete} alt="Delete" width={28} height={28}/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-1/4 p-4 bg-[#F9F1E7] px-[50px] h-[390px] w-[393px] sticky top-[135px]">
          <h2 className="font-semibold text-[32px] items-center text-center mb-[50px]">Cart Totals</h2>
          <div className="flex justify-between mb-[35px]">
            <span className='font-medium text-[16px]'>Subtotal</span>
            <span className='font-normal text-[16px] text-[#9F9F9F]'>Rs. {getTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-[35px]">
            <span className="font-medium text-[16px]">Total</span>
            <span className="text-[#B88E2F] font-medium text-[20px]">Rs. {getTotal().toFixed(2)}</span>
          </div>
          <Link href="/checkout" className="mt-6 flex justify-center mx-auto items-center px-8 py-2 text-black w-full font-normal text-[20px] border border-black rounded-[10px] w-[200px] h-[60px] ">Check Out</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
