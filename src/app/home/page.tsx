import HeaderHome from "./header";
import HomeSection1 from "./section1";
import HomeSection2 from "./section2";
import HomeSection3 from "./section3";
import HomeSection4 from "./section4";

const Home = () => {
    return (
        <div className="w-[100%] p-[0rem] mb-[70px]">
            <HeaderHome/>
            <HomeSection1/>
            <HomeSection2/>
            <HomeSection3/>
            <HomeSection4/>
        </div>
    );
}

export default Home;