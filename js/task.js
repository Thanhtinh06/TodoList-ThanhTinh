class Task {
  constructor(content,status=STATUS.todo){
    this.content = content;
    this.status = status;
    this.id = this.getRanDomID();
  }
  getRanDomID(){
   let id = Math.ceil(Math.random()* (MIN_MAX.max- MIN_MAX.min + 1) + MIN_MAX.min);
   while (id in VALUE_ID){
    id = Math.ceil(Math.random()* (MIN_MAX.max- MIN_MAX.min + 1) + MIN_MAX.min);
   }
   VALUE_ID.push(id);
   return id;
  }
}