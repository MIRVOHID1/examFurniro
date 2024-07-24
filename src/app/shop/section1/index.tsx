import Filter from "../../../assets/icons/filtering.svg"
import FourDot from "../../../assets/icons/fourDot.svg"
import List from "../../../assets/icons/bi_view-list.svg"
import Image from "next/image"

const page = () => {
    return (
        <div className="flex h-[100px] items-center bg-[#F9F1E7] justify-between">
            <div className="container mx-auto flex justify-between">
                <div className="flex gap-10 items-center">
                    <div className="flex gap-9 items-center">
                        <Image src={Filter} alt="filter" />
                        <p>Filter</p>
                        <Image src={FourDot} alt="fourDot" />
                        <Image src={List} alt="list" />
                    </div>
                    <div className="items-center pl-10  border-l-[2px]">
                        <p className="text-[15px] font-normal">Showing 1–16 of 32 results</p>
                    </div>
                </div>
                <div className="flex gap-10">
                    <div className="flex gap-2 items-center">
                        <p>Show</p>
                        <input type="number" className="w-[55px] h-[55px] px-2" placeholder="value"/>
                    </div>
                    <div className="flex items-center gap-2">
                        <p>Short by</p>
                        <input type="text" placeholder="Default" className="w-[188px] h-[55px] px-2" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;