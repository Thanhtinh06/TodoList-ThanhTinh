/*
Target: Manage task with features:
+ add
+ update
+ remove
+ edit
Created by: Thanh Tinh
Date: 05/02/2023
Version: 1.0.0
*/

/**
1. DOM button add
2. DOM tag input -> Get information user typing in tag input
3. Check value:
 - input: hollow(rỗng) => true => Noti 
          not hollow => false =>
 - check duplicate: + true => Noti
                    + false => create Object Task
 - Object Task:
 + id: getRanDomID()
 + content: get tag input
 + status: default todo(value)
4. Add Object Task => ListTask
5. Render table
6. SetLocalStage
 */


function getEle(id) {
  return document.getElementById(id);
}


//Show date now
let date = new Date();
let formattedDate = date.toLocaleDateString("en-GB", {
  time: "",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
getEle("today").innerHTML = formattedDate;

//Create List Task Object

const listTask = new ListTask();
const validation = new Validition();

// //Get data from Local Stage
getLocalStage();

//DOM Button Add

getEle("addItem").addEventListener("click",function(){
  var task = getInforTask();
  //add Task
  if (task != null){
    listTask.addTask(task);
    setLocalStage();
  };
  getLocalStage();
  clearInput();
})


// Remove task
function deleteToDo(idTask){
  listTask.removeTask(idTask,true);
  listTask.removeTask(idTask,false);
  setLocalStage();
  getLocalStage();
}

//Change task

function completeToDo(idTask){
  listTask.changeTask(idTask);
  setLocalStage();
  getLocalStage();
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

function renderTable(data=listTask.arrToDo,status=STATUS.todo,isTodo=true){
  let contentHTML = "";
  if(isTodo){
    data.forEach(function(task){
    contentHTML += `
    <li>
      <span id="${task.id}">${task.content}</span>
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
    getEle(status).innerHTML = contentHTML;
  }
}

//clear input 

function clearInput() {  // Clear the input field
  return getEle("newTask").value = "";
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
  renderTable(listTask.arrToDo,STATUS.todo);
  renderTable(listTask.arrCompleted,STATUS.completed);
}