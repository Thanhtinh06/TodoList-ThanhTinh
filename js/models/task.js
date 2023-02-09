class Task {
  /**
   * 
   * @param {*} content value of tag input
   * @param {*} status defaul is todo
   * @property {*} id: get function random ID
   */
  constructor(content,status=STATUS.todo){
    this.content = content;
    this.status = status;
    this.id = Math.random();
    this.myDate = Date();
  }
}
