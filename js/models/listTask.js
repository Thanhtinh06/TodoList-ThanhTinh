class ListTask {
  //property
  constructor(){
    this.arrToDo = []
    this.arrCompleted = []
  };
  //method

  /**
   * 
   * @param {*} task type object
   * @param {*} isTodo type boolean to define where is a task in?
   * feature: add to arr To Do or Complete
   */
  addTask(task,isTodo=true) {
    if(isTodo){
      this.arrToDo.push(task);
    }else{
      this.arrCompleted.push(task);
    }
  };

  /**
   * 
   * @param {*} idTask : id of task (unique)
   * @param {*} isTodo : to check where is task in 
   * @returns object 
   */
  removeTask(idTask,isTodo=true){
    if(isTodo){
      return this.arrToDo.splice(this.findTask(idTask),1)[0]
    }else{
      return this.arrCompleted.splice(this.findTask(idTask,this.arrCompleted),1)[0]
    }
  };


  changeTask(idTask){
    let flagTodo = this.findTask(idTask);
    let flagComplete = this.findTask(idTask,this.arrCompleted);
    if (flagTodo != null){
      this.arrToDo[flagTodo].status = STATUS.completed;
      this.arrCompleted.push(this.removeTask(idTask)) ;
    }
    if (flagComplete != null){
      this.arrCompleted[flagComplete].status = STATUS.todo;
      this.arrToDo.push(this.removeTask(idTask,false));
    } 
  };

  findTask(idTask,arr=this.arrToDo){
    for(var i=0; i < arr.length; i++){
      if (idTask == arr[i].id){
        return i
      }
    }
    return null
  };
}