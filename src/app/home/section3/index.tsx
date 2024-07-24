"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, A11y } from "swiper/modules";
import Image from "next/image";

const HomeSection3 = () => {
  return (
    <div className="bg-[#FCF8F3]">
      <div className="container mx-auto  flex gap-[150px] items-center py-[40px]">
        <div className="w-[422px]">
          <h1 className="text-3xl font-bold mt-10 mb-5 text-[32px] text-left">50+ Beautiful rooms inspiration</h1>
          <p className="text-[#6C6C6C] text-[20px] text-left">Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
          <button className="mt-4 px-4 py-2 bg-[#B88E2F] text-[#FFFFFF] ">Explore More</button>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={2.2}
          navigation
          modules={[Navigation, Pagination, A11y]}
          className="w-[1000px]"
          loop={true}
        >
          <SwiperSlide>
            <div className="relative">
              <Image src="https://s3-alpha-sig.figma.com/img/f89a/66d9/4961c3801f4c07439f27b13468e5e545?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WoQmC0IhPGEXfbM2bSyYTKbSgwyCgpTI2HceFq9t1EEJ9ZG36dhKJZj4B2tXPzd978Sy5exDseeHLvk39zGKhDC3YmCbQKngZFYKioewiLDZu7pDzue-XH8EQmAqVdVMI1C0UzyOJ5Q58eh5Hac6-xFKJvu1Lds9bxTt7AwlNTjJERLh1~BRftnB~n~sD0obwNZiyC5KD-LDeI7pcsIWl79ms8BTQ2rUZyiqETU6bEoB~pieFwnJXVjOsKYWNQNcF8z-dBXwKnJgFyOloqQKaucVceUNZelicAoBPg~XgiLGs-DuL9r~Ytp8ah1WkT02Q2MI9Ay9aVtqViY4G3Wc2w__" alt="Slide 1" className="w-[404px] h-[582px]" width={100} height={100} />
              <div className="absolute bottom-0 left-0 bg-white bg-opacity-70 p-4 mb-6 ml-6">
                <h3 className="text-xl font-bold">Inner Peace</h3>
                <p>01 - Bed Room</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <Image src="https://s3-alpha-sig.figma.com/img/acc4/8179/d1b18b523420e79dda1e92951ecde49b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y0m-7zso60PHtoTcZPCCRRw6dh4mlfYSTrmk8yXCJd1pL8kiANWAGC6WuPv2rao1Z0rmPq67jiWhzNOBdSLB8zao9edSh7wZ2RlLhAW~luN9bqVdEoUTJUs3bkDL3Y1tpI0nFvTHddouGzUwUCIvnGDDLOp~aifR56ExoQM2poy6Z74Wg-Bn0ZhH134vNfRKYpeZzCxyGnZvKS9jOWumJAubIejliE5afl8dHudRkEh~undcg3I~LqRifV1L6hw7zdphXPCfqjVT6jwAtnLhaMEgph97LTCxO6oTW6GngvW1HGHiXgjujUSp8n~ylhKzpe6tm2IXn8fo2NvGv3yNug__" alt="Slide 2" className="w-[404px] h-[582px]" width={100} height={100} />
              <div className="absolute bottom-0 left-0 bg-white bg-opacity-70 p-4 mb-6 ml-6">
                <h3 className="text-xl font-bold">Calm Space</h3>
                <p>02 - Living Room</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <Image src="https://s3-alpha-sig.figma.com/img/7065/5e8b/25a06a33769af9bf5fe8f8ed81ce75d8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PhcjtmD~MP5nD8yib0XUPtbTatcEbGG3K~gbvuQ18GI6v9ZkBsxLauRJIjMSEPHdMuW9UdPU9nGBBe8FA6Hlje-pZUfa5dMMpU13dgjhljf1VKtOcjFXJpA9WCWWCFcS20ChPYRbuVbG-XWNzgTprJokrVDArdE-IfOd9KfmWEDu-pxXPIjp8GorKWBltTGpFKMvGS~MssLoBYX4Kfrgu75xgmgNsIpswAQ~O2qFdXdKmiSsWjN6Q~-tqwtXo8J9lIBGcT7As~z9RgpeWrnivOk~lNRNEXbzILIMq0ncg9YcJCvoHMtWRjEt46dmpOTyTLyuZ52WZP-2AKzKbclKzA" alt="Slide 3" className="w-[404px] h-[582px]" width={100} height={100} />
              <div className="absolute bottom-0 left-0 bg-white bg-opacity-70 p-4 mb-6 ml-6">
                <h3 className="text-xl font-bold">Minimalist Design</h3>
                <p>03 - Dining Room</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <Image src="https://s3-alpha-sig.figma.com/img/f89a/66d9/4961c3801f4c07439f27b13468e5e545?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WoQmC0IhPGEXfbM2bSyYTKbSgwyCgpTI2HceFq9t1EEJ9ZG36dhKJZj4B2tXPzd978Sy5exDseeHLvk39zGKhDC3YmCbQKngZFYKioewiLDZu7pDzue-XH8EQmAqVdVMI1C0UzyOJ5Q58eh5Hac6-xFKJvu1Lds9bxTt7AwlNTjJERLh1~BRftnB~n~sD0obwNZiyC5KD-LDeI7pcsIWl79ms8BTQ2rUZyiqETU6bEoB~pieFwnJXVjOsKYWNQNcF8z-dBXwKnJgFyOloqQKaucVceUNZelicAoBPg~XgiLGs-DuL9r~Ytp8ah1WkT02Q2MI9Ay9aVtqViY4G3Wc2w__" alt="Slide 1" className="w-[404px] h-[582px]" width={100} height={100} />
              <div className="absolute bottom-0 left-0 bg-white bg-opacity-70 p-4 mb-6 ml-6">
                <h3 className="text-xl font-bold">Inner Peace</h3>
                <p>01 - Bed Room</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <Image src="https://s3-alpha-sig.figma.com/img/acc4/8179/d1b18b523420e79dda1e92951ecde49b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y0m-7zso60PHtoTcZPCCRRw6dh4mlfYSTrmk8yXCJd1pL8kiANWAGC6WuPv2rao1Z0rmPq67jiWhzNOBdSLB8zao9edSh7wZ2RlLhAW~luN9bqVdEoUTJUs3bkDL3Y1tpI0nFvTHddouGzUwUCIvnGDDLOp~aifR56ExoQM2poy6Z74Wg-Bn0ZhH134vNfRKYpeZzCxyGnZvKS9jOWumJAubIejliE5afl8dHudRkEh~undcg3I~LqRifV1L6hw7zdphXPCfqjVT6jwAtnLhaMEgph97LTCxO6oTW6GngvW1HGHiXgjujUSp8n~ylhKzpe6tm2IXn8fo2NvGv3yNug__" alt="Slide 2" className="w-[404px] h-[582px]" width={100} height={100} />
              <div className="absolute bottom-0 left-0 bg-white bg-opacity-70 p-4 mb-6 ml-6">
                <h3 className="text-xl font-bold">Calm Space</h3>
                <p>02 - Living Room</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <Image src="https://s3-alpha-sig.figma.com/img/7065/5e8b/25a06a33769af9bf5fe8f8ed81ce75d8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PhcjtmD~MP5nD8yib0XUPtbTatcEbGG3K~gbvuQ18GI6v9ZkBsxLauRJIjMSEPHdMuW9UdPU9nGBBe8FA6Hlje-pZUfa5dMMpU13dgjhljf1VKtOcjFXJpA9WCWWCFcS20ChPYRbuVbG-XWNzgTprJokrVDArdE-IfOd9KfmWEDu-pxXPIjp8GorKWBltTGpFKMvGS~MssLoBYX4Kfrgu75xgmgNsIpswAQ~O2qFdXdKmiSsWjN6Q~-tqwtXo8J9lIBGcT7As~z9RgpeWrnivOk~lNRNEXbzILIMq0ncg9YcJCvoHMtWRjEt46dmpOTyTLyuZ52WZP-2AKzKbclKzA" alt="Slide 3" className="w-[404px] h-[582px]" width={100} height={100} />
              <div className="absolute bottom-0 left-0 bg-white bg-opacity-70 p-4 mb-6 ml-6">
                <h3 className="text-xl font-bold">Minimalist Design</h3>
                <p>03 - Dining Room</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSection3;
