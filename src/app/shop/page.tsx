import Header from "./header/index"
import Section1 from "./section1/index"
import Section2 from "./section2/index"
import LastSection from "../../components/lastSection"

const page = () => {
    return (
        <div>
            <Header/>
            <Section1/>
            <Section2/>
            <LastSection/>
        </div>
    );
}

export default page;