import Todoitem from "./Todoitem"
function Todolist(props) {
    const activityarr=props.activityarr
    const setactivityarr=props.setactivityarr

   
    return (<>
        <div className="bg-purple-300 border rounded-md p-2  flex-grow">
            <h1 className="text-2xl  font-medium"> Today's Activity</h1>
            {
  
                activityarr.length === 0 ? <p>you  haven't add any activity yet</p> : ""
            }
            <div>
                {
                    activityarr.map(function (item, index) {
                        return <Todoitem id={item.id} activity={item.activity} activityarr={activityarr} setactivityarr={setactivityarr} index={index} />
                    })
                }
            </div>
        </div>
    </>)
}
export default Todolist