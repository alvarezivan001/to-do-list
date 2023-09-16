export default class Project {
    constructor(title = '') {
      this._title = title;
      this._items = [];
    }
  
    get title() {
      return this._title;
  
    }
    
    addItem(item = {}) {
      this._items.push(item);
    }
    removeItem(value = '') {
      var index = this._items.findIndex((item) => item.name == value)
      this._items.splice(index, 1);
    }
    get items() {
      return this._items;
    }
    set items(newItems) {
      this._items = newItems;
    }
    // searchForToDo(name) {
      
    // }
  }

  