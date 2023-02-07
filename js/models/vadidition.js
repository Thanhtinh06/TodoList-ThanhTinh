function setDisplayEle(id,value){
  getEle(id).style.display = value;
}

class Validition {

  checkInputHollow(content) {
    if (content === "") {
      setDisplayEle("notiInput", "block");
      getEle("notiInput").innerHTML = NOTI_INVALID.notiInputHollow;
      return false;
    }
    setDisplayEle("notiInput", "none");
    getEle("notiInput").innerHTML = NOTI_INVALID.notNoti;
    return true;
  }
  
  checkDuplicateTask(content,arr=listTask.arrToDo) {
    let contentLowerCase = content.toLowerCase();
    if(arr.length > 0){
      for (var i = 0; i < arr.length; i++) {
        let taskTodoInArrLowerCase = arr[i].content.toLowerCase()
        if (contentLowerCase == taskTodoInArrLowerCase){
          getEle("notiInput").innerHTML = NOTI_INVALID.notiInputDulicate;
          setDisplayEle("notiInput", "block");
          return false;
        }
      }
      setDisplayEle("notiInput", "none");
      return true; 
    }
    return true;
  }
}
