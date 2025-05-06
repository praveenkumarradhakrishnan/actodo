import Addtodoform from "./AddTodoForm"
import Todolist from "./TodoList"
import { useState } from "react"
function Todocontainer() {
    const [activityarr, setactivityarr] = useState(
        [
            {
                id: 1,
                activity: "wake up 5:00"

            },
            {
                id: 2,
                activity: "go to tower reads"


            },
            {
                id: 3,
                activity: "finsh work react"


            }
        ]

    )
    return (
        <>
            <div className="flex gap-5  flex-wrap">
                <Addtodoform  activityarr={activityarr} setactivityarr={setactivityarr} />
                <Todolist activityarr={activityarr} setactivityarr={setactivityarr} />
            </div>
        </>
    )
}
export default Todocontainer