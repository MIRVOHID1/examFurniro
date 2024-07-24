import Header from "./header/index"
import LastSection from "../../components/lastSection"
import Checkout from "./section"

const page = () => {
    return (
        <div>
            <Header/>
            <Checkout/>
            <LastSection/>
        </div>
    );
}

export default page;