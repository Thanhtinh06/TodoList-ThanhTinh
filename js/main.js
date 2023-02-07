/*
Target: Manage task with features:
+ add
+ update
+ remove
+ edit
Created by: Thanh Tinh
Date: 05/02/2023
Version: 1.0
*/

function getEle(id) {
  return document.getElementById(id);
}

/**
1. DOM button add
2. DOM tag input -> Get information user typing in tag input
3. Check value:
 - input: hollow(rỗng) => true => Noti 
          not hollow => false =>
 - check duplicate: + true => Noti
                    + false => create Object Task
 - Object Task:
 + id: Math.random()
 + content: get tag input
 + status: default todo(value)
4. Add Object Task => ListTask
5. Render table
6. SetLocalStage
 */


//Create List Task Object

const listTask = new ListTask();
const validation = new Validition();

// //Get data from Local Stage
getLocalStage();
console.log(listTask.arrCompleted);
//DOM Button Add

getEle("addItem").addEventListener("click",function(){

  var task = getInforTask();
  console.log(task);
  //add Task
  if (task != null){
    listTask.addTask(task);
    setLocalStage();
  };
  getLocalStage()
})


// Remove task
function deleteToDo(idTask){
  listTask.removeTask(idTask,true);
  setLocalStage();
  getLocalStage();
}

//Update task

function completeToDo(idTask){
  listTask.updateTask(idTask);
  setLocalStage();
  getLocalStage();
  console.loge(listTask.arrCompleted);
}


//Get infor Task

function getInforTask(){
  let content = getEle("newTask").value;
  let notHollow= validation.checkInputHollow(content);
  let notDup= validation.checkDuplicateTask(content,listTask.arrToDo);
  if (notHollow == true && notDup == true){
    return new Task(content,STATUS.todo);
  }
  return null
}


// render Table List Task
function renderTable(data=listTask.arrToDo,isTodo=true){
  let contentHTML = "";
  if(isTodo){
    data.forEach(function(task){
    contentHTML += `
    <li id="${task.id}">
      <span>${task.content}</span>
      <div class="buttons">
      <button class="remove" data-index="0" data-status="${task.status}" onclick="deleteToDo(${task.id})">
                            <i class="fa fa-trash-alt"></i>
                        </button>
      <button class="complete" data-index="0" data-status="${task.status}" onclick="completeToDo(${task.id})">
                            <i class="far fa-check-circle"></i>
                            <i class="fas fa-check-circle"></i>
                        </button>
      </div>
    </li>
    `
  });
    getEle(STATUS.todo).innerHTML = contentHTML;
  }else{
    getEle(STATUS.completed).innerHTML = contentHTML;
  }
}


//setLocalStage
function setLocalStage(){
  localStorage.setItem("ListTaskToDo",JSON.stringify(listTask.arrToDo))
  localStorage.setItem("ListTaskDone",JSON.stringify(listTask.arrCompleted))
  localStorage.setItem("Id",JSON.stringify(VALUE_ID))
}

//getLocalStage

function getLocalStage(){
  const dataStringToDo = localStorage.getItem("ListTaskToDo");
  const dataStringDone = localStorage.getItem("ListTaskDone");
  listTask.arrToDo = JSON.parse(dataStringToDo) || [];
  listTask.arrCompleted = JSON.parse(dataStringDone) || [];
  renderTable(listTask.arrToDo,true);
  renderTable(listTask.arrCompleted,false);
}