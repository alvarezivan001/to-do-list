export default class Item {
    constructor(name = '', details = '', dueDate = '', priority = '') {
      this._name = name;
      this._details = details;
      this._dueDate = dueDate;
      this._priority = priority;
    }
    get name() {
      return this._name;
    }
    get details() {
      return this._details;
    }
    get dueDate() {
      return this._dueDate;
    }
    get priority() {
      return this._priority;
    }
    set name(value = '') {
        this._name = value;
    }
    set dueDate(value = '') {
      this._dueDate = value;
    }
    set details(value = '') {
      this._details = value;
    }
    set priority(value = ''){
      this._priority = value;
    }

  }

  

  