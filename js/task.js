class Task {
  /**
   * 
   * @param {*} content value of tag input
   * @param {*} status defaul is todo
   * @property {*} id: get function Date.now()
   */
  constructor(content,status=STATUS.todo){
    this.content = content;
    this.status = status;
    this.id = Date.now();
    //to reload page create new value 
    location.reload();
    // this.id = this.getRanDomID();
  }

  /**
   * Cach 2: Lay tu random
   */
  // getRanDomID(){
  //  let id = Math.ceil(Math.random()* (MIN_MAX.max- MIN_MAX.min + 1) + MIN_MAX.min);
  //  while (id in VALUE_ID){
  //   id = Math.ceil(Math.random()* (MIN_MAX.max- MIN_MAX.min + 1) + MIN_MAX.min);
  //  }
  //  VALUE_ID.push(id);
  //  return id;
  // }
}