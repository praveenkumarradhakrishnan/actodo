import { useState } from "react"

function Addtodoform(props) {
    const activityarr = props.activityarr
    const setactivityarr = props.setactivityarr
    const [newactivity, setnewactivity] = useState()
    const handleChange = (event) => {
        setnewactivity(event.target.value)

    }
    function addactivity() {
        setactivityarr([...activityarr, { id: activityarr.length + 1, activity: newactivity }])
        setnewactivity("")
    }
    return (<>
        <div className="flex flex-col gap-3 ">
            <h1 className="text-2xl  font-medium">Manage Activities</h1>
            <div>
                <input onChange={handleChange} typr="text" className="border border-black bg-transparent p-1 " placeholder="Next Activity"></input>
                <button onClick={addactivity} className="bg-black text-white p-1 border border-black">ADD</button>
            </div>

        </div>
    </>)
}
export default Addtodoform