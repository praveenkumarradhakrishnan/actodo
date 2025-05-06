import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {
    const Navigate = useNavigate()
    const [euname, seteuname] = useState()
    const [eupass, seteupass] = useState()
    const [result, setresult] = useState(true)
    const edata = props.edata

    function handleusername(evt) {
        seteuname(evt.target.value)
    }
    function handlepass(evt) {
        seteupass(evt.target.value)
    }

    function handleLogin() {
        console.log(edata)
        var userfound = false
        edata.forEach(function (item) {
            if (item.uname === euname && item.upass === eupass) {
                userfound = true
                console.log("ok")
                Navigate("/landing", { state: { user: euname } })

            }

        })
        if (userfound === false) {
            setresult(false)
            console.log("Nok")
        }


    }
    return (<div className="bg-black p-10 ">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="font-medium text-3xl  "> Hey Hi</h1>
            {
                result ? <p >I help you manage your activities after you login :)</p> : <p className="text-red-500"> please sign up Before you Login !!</p>

            }
            <div className="flex flex-col my-2 gap-2 ">
                <input type="text"
                    className="w-52 border-black p-1 bg-transparent border rounded-md "
                    placeholder="username"
                    onChange={handleusername}>

                </input>
            </div>

            <div className="flex flex-col my-2 gap-2 ">
                <input type="text"
                    className="w-52 border-black p-1 bg-transparent border rounded-md "
                    placeholder="password"
                    onChange={handlepass}
                ></input>
            </div>
            <button onClick={handleLogin} className="bg-[#8272DA] w-24 p-1 rounded-md">Login</button>
            <p> Don't have  an account ?<Link to={"/signup"} className="underline">Signup</Link> </p>
        </div>

    </div>)
}
export default Login