import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Signup(props) {
    const Navigate = useNavigate()
    const [euname, seteuname] = useState()
    const [eupass, seteupass] = useState()
    const edata = props.edata
    const setedata = props.setedata
    function handleusername(evt) {
        seteuname(evt.target.value)
    }
    function handlepass(evt) {
        seteupass(evt.target.value)
    }
    function adduser() {
        setedata([...edata, { uname: euname, upass: eupass }])
         Navigate("/")
    }
    return (
        <div className="bg-black p-10 ">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="font-medium text-3xl  "> Hey Hi</h1>
                <p > Signup hear :)</p>
                <div className="flex flex-col my-2 gap-2 ">
                    <input type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md "
                        placeholder="username"
                        onChange={handleusername}
                    ></input>
                </div>

                <div className="flex flex-col my-2 gap-2 ">
                    <input type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md "
                        placeholder="password"
                        onChange={handlepass}></input>
                </div>

                <div className="flex flex-col my-2 gap-2 ">
                    <input type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md "
                        placeholder="Confirm password"></input>
                </div>
                <button onClick={adduser} className="bg-yellow-500 w-24 p-1 rounded-md">Sign Up</button>
                <p> Already have account ?<Link to={"/"} className="underline">Login</Link> </p>
            </div>

        </div>)
}
export default Signup