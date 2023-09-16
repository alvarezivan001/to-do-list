export default class Notes {
    constructor() {
      this._notes = [];
    }
  
    get notes(){
      return this._notes;
    }
  
    returnNote(index = -1) {
      return this._notes[index];
    }
    addNote(newNote = '') {
        this._notes.push(newNote);
    }
    removeNote(index = -1){
        this._notes.splice(index,1);
    }
    changeDetails(index = -1, newDeets = ''){
        this._notes[index] = newDeets;
    }

    // get details() {
    //   return this.details;
    // }
    // set details(deets = '') {
    //   this._details = deets;
    // }

  }
