function TodoItem(props) {

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr
    const id = props.id
    const activity = props.activity
    const index = props.index
   
    function handleDelete(deleteid) {
        var temparr = activityArr.filter(function(item){
            if(item.id === deleteid)
            {
                return false
            }else{
                return true
            }
    })
    setActivityArr(temparr)
}
  
    return (
      <div className="flex justify-between">
        <p>{index + 1}. {activity}</p>
        <button className="text-red-500" onClick={() => handleDelete(id)}>Delete</button>
      </div>
    );
  }
  
  export default TodoItem;
  