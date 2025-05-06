function Todoitem(props) {
    const activityarr = props.activityarr
    const setactivityarr = props.setactivityarr
    const handleDelete = (deletedid) => {
        var temparr = activityarr.filter(function (item) {
            if (item.id === deletedid) {
                return false
            }else {
                return true
            }
        })
        setactivityarr(temparr)

    }
    return (
        <div className="flex justify-between">
            <p>{props.index + 1}. {props.activity}</p>
            <button onClick={()=> handleDelete(props.id)} className="text-red-500">Delete</button>
        </div>
    )
}
export default Todoitem