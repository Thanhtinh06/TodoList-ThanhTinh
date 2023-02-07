class ListTask {
  //property
  constructor(){
    this.arrToDo = []
    this.arrCompleted = []
  };
  //method
  addTask(task,isTodo=true) {
    if(isTodo){
      this.arrToDo.push(task);
    }else{
      this.arrCompleted.push(task);
    }
  };
  removeTask(idTask,isTodo=true){
    if(isTodo){
      for(var i = 0; i < this.arrToDo.length;i++){
        if(idTask == this.arrToDo[i].id){
          return this.arrToDo.splice(i,1)
        }
      }
    }
  };
  changeTask(){

  };
  updateTask(idTask){
    let taskUpdate = this.removeTask(idTask,true);
    this.arrCompleted.push(taskUpdate);
  };
  findTask(){

  };
  getInforTask(){

  };
  removeAllTaskToDo(){
    this.arrToDo = [];
  }
  removeAllTaskCompleted(){
    this.arrCompleted = [];
  }
}