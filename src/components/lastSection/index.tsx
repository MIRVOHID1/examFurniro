import Image from "next/image";
import Prise from "../../assets/icons/prise.svg"
import Galochka from "../../assets/icons/galochka.svg"
import Shopping from "../../assets/icons/shipping.svg"
import Support from "../../assets/icons/customer-support.svg"

const index = () => {
    return (
        <div className="flex h-[270px] items-center bg-[#FAF3EA] mt-[70px]">
            <div className="container mx-auto flex justify-between">
                <div className="flex items-center gap-5">
                    <div>
                        <Image src={Prise} alt="" />
                    </div>
                    <div className="flex-col">
                        <p className="font-semibold text-[25px]">High Quality</p>
                        <p className="text-[20px] font-medium">crafted from top materials</p>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div>
                        <Image src={Galochka} alt="" />
                    </div>
                    <div className="flex-col">
                        <p className="font-semibold text-[25px]">Warranty Protection</p>
                        <p className="text-[20px] font-medium">Over 2 years</p>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div>
                        <Image src={Shopping} alt="" />
                    </div>
                    <div className="flex-col">
                        <p className="font-semibold text-[25px]">Free Shipping</p>
                        <p className="text-[20px] font-medium">Order over 150 $</p>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div>
                        <Image src={Support} alt="" />
                    </div>
                    <div className="flex-col">
                        <p className="font-semibold text-[25px]">24 / 7 Support</p>
                        <p className="text-[20px] font-medium">Dedicated support</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;