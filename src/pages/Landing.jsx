import Header from "../components/Header";
import Card from "../components/Cards";
import Todocontainer from "../components/Todocontainer";
import { useLocation } from "react-router-dom"

function Landing() {
    const data = useLocation()

    return (
        <div className="bg-black p-16 m-3">
            <div className="bg-[#EFEFEF] p-10 border rounded-md" >
                {/*Header*/}
                <Header name={data.state.user} />
                {/*Cards*/}
                <div className="flex justify-between gap-7 my-5 flex-wrap">
                    <Card bgcolor={"#8272DA"} title={"23"} subtitle={"chennai"} />
                    <Card bgcolor={"#FD6663"} title={"December"} subtitle={"23:23:04"} />
                    <Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"} />
                </div>
                {/*todocontainer*/}
                <div>
                    <Todocontainer />
                </div>
            </div>
        </div>
    );
}
export default Landing