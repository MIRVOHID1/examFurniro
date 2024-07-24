import Image from "next/image";
import Img1 from "../../../assets/images/blogImage1.jpg"
import Img2 from "../../../assets/images/blogImage2.jpg"
import Img3 from "../../../assets/images/blogImage3.jpg"
import Img4 from "../../../assets/images/blogImage4.jpg"
import Img5 from "../../../assets/images/blogImage5.jpg"
import Img6 from "../../../assets/images/blogImage6.jpg"
import Img7 from "../../../assets/images/blogImage7.jpg"
import Img8 from "../../../assets/images/blogImage8.jpg"
import Account from "../../../assets/icons/admin-users.svg"
import Calendar from "../../../assets/icons/calender.svg"
import Wood from "../../../assets/icons/ci_tag.svg"

const index = () => {
    return (
        <div className="container mx-auto flex gap-[70px]">
            <div className="w-3/4">
                <div className="flex flex-col mt-[150px]">
                    <Image src={Img1} alt="section1" className="rounded-[20px] h-[650px] " />
                    <div className="flex justify-between w-[349px] mt-3">
                        <div className="flex">
                            <Image src={Account} alt="section1" className="mr-1" />
                            <p className="text-[#9F9F9F]">Admin</p>
                        </div>
                        <div className="flex">
                            <Image src={Calendar} alt="section1" className="mr-1" />
                            <p className="text-[#9F9F9F]">14 Oct 2022</p>
                        </div>
                        <div className="flex">
                            <Image src={Wood} alt="section1" className="mr-1" />
                            <p className="text-[#9F9F9F]">Wood</p>
                        </div>

                    </div>
                    <p className="text-[30px] font-medium mt-3">Going all-in with millennial design</p>
                    <p className="text-[15px] font-normal mt-3 text-[#9F9F9F] leading-[22.5px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                </div>
                <div className="mt-[100px]">
                    <Image src={Img2} alt="section1" className="rounded-[20px] h-[650px] " />
                    <div className="flex justify-between w-[349px] mt-3">
                        <div className="flex">
                            <Image src={Account} alt="section1" className="mr-1" />
                            <p className="text-[#9F9F9F]">Admin</p>
                        </div>
                        <div className="flex">
                            <Image src={Calendar} alt="section1" className="mr-1" />
                            <p className="text-[#9F9F9F]">14 Oct 2022</p>
                        </div>
                        <div className="flex">
                            <Image src={Wood} alt="section1" className="mr-1" />
                            <p className="text-[#9F9F9F]">Wood</p>
                        </div>

                    </div>
                    <p className="text-[30px] font-medium mt-3">Exploring new ways of decorating</p>
                    <p className="text-[15px] font-normal mt-3 text-[#9F9F9F] leading-[22.5px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                </div>
                <div className="mt-[100px]">
                    <Image src={Img3} alt="section1" className="rounded-[20px] h-[650px] " />
                    <div className="flex justify-between w-[349px] mt-3">
                        <div className="flex">
                            <Image src={Account} alt="section1" className="mr-1" />
                            <p className="text-[#9F9F9F]">Admin</p>
                        </div>
                        <div className="flex">
                            <Image src={Calendar} alt="section1" className="mr-1" />
                            <p className="text-[#9F9F9F]">14 Oct 2022</p>
                        </div>
                        <div className="flex">
                            <Image src={Wood} alt="section1" className="mr-1" />
                            <p className="text-[#9F9F9F]">Wood</p>
                        </div>

                    </div>
                    <p className="text-[30px] font-medium mt-3">Handmade pieces that took time to make</p>
                    <p className="text-[15px] font-normal mt-3 text-[#9F9F9F] leading-[22.5px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                </div>
            </div>
            <div className="w-1/4 mt-[150px]">
                <div className="px-3">
                    <input type="text" placeholder="Search..." className="border border-[#9F9F9F] w-full rounded-[10px] h-[50px] px-3" />
                    <p className="mx-auto w-[251px] text-[24px] font-medium mt-5 text-[#000] leading-[36px] text-start items-center">Categories</p>
                    <div className="w-[251px] mx-auto">
                        <div className="flex justify-between mt-10">
                            <p className="font-normal text-[16px] text-[#9F9F9F]">Crafts</p>
                            <p className="font-normal text-[16px] text-[#9F9F9F]">2</p>
                        </div>
                        <div className="flex justify-between mt-10">
                            <p className="font-normal text-[16px] text-[#9F9F9F]">Design</p>
                            <p className="font-normal text-[16px] text-[#9F9F9F]">8</p>
                        </div>
                        <div className="flex justify-between mt-10">
                            <p className="font-normal text-[16px] text-[#9F9F9F]">Handmade</p>
                            <p className="font-normal text-[16px] text-[#9F9F9F]">7</p>
                        </div>
                        <div className="flex justify-between mt-10">
                            <p className="font-normal text-[16px] text-[#9F9F9F]">Interior</p>
                            <p className="font-normal text-[16px] text-[#9F9F9F]">1</p>
                        </div>
                        <div className="flex justify-between mt-10">
                            <p className="font-normal text-[16px] text-[#9F9F9F]">Wood</p>
                            <p className="font-normal text-[16px] text-[#9F9F9F]">6</p>
                        </div>
                    </div>
                </div>
                <div className="mt-[100px] flex flex-col px-3">
                    <div className="flex items-center w-[251px] mx-auto mb-[60px]">
                        <div>
                            <Image src={Img4} alt="section1" className="rounded-[10px] w-[80px] h-[80px] mr-3" />
                        </div>
                        <div className="flex flex-col w-[160px]">
                            <p className="text-[#000000] font-medium">Going all-in with millennial design</p>
                            <p className="text-[#9F9F9F] mt-1">03 Aug 2022</p>
                        </div>
                    </div>
                    <div className="flex items-center w-[251px] mx-auto mb-[60px]">
                        <div>
                            <Image src={Img5} alt="section1" className="rounded-[10px] w-[80px] h-[80px] mr-3" />
                        </div>
                        <div className="flex flex-col w-[160px]">
                            <p className="text-[#000000] font-medium">Exploring new ways of decorating</p>
                            <p className="text-[#9F9F9F] mt-1">03 Aug 2022</p>
                        </div>
                    </div>
                    <div className="flex items-center w-[251px] mx-auto mb-[60px]">
                        <div>
                            <Image src={Img6} alt="section1" className="rounded-[10px] w-[80px] h-[80px] mr-3" />
                        </div>
                        <div className="flex flex-col w-[160px]">
                            <p className="text-[#000000] font-medium">Handmade pieces that took time to make</p>
                            <p className="text-[#9F9F9F] mt-1">03 Aug 2022</p>
                        </div>
                    </div>
                    <div className="flex items-center w-[251px] mx-auto mb-[60px]">
                        <div>
                            <Image src={Img7} alt="section1" className="rounded-[10px] w-[80px] h-[80px] mr-3" />
                        </div>
                        <div className="flex flex-col w-[160px]">
                            <p className="text-[#000000] font-medium">Modern home in Milan</p>
                            <p className="text-[#9F9F9F] mt-1">03 Aug 2022</p>
                        </div>
                    </div>
                    <div className="flex items-center w-[251px] mx-auto mb-[60px]">
                        <div>
                            <Image src={Img8} alt="section1" className="rounded-[10px] w-[80px] h-[80px] mr-3" />
                        </div>
                        <div className="flex flex-col w-[160px]">
                            <p className="text-[#000000] font-medium">Colorful office redesign</p>
                            <p className="text-[#9F9F9F] mt-1">03 Aug 2022</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default index;