// used to create Project obects
// properties should not be changeable
// array for its todo objects
//array items should be addable and removable
//removing array items should handled by DOM

//function to create project obj
//changing title to be implemented later possibly

class Project {
    constructor(title)
    {
        this._title = title;
        this._array = [];
    }

    get title() {
        return this._title;
        
    }
    addToDo(toDo) {
        this._array.push(toDo);
    }
    removeToDo(index) {
        this._array.splice(index,1);
    }
    returnArray(){
        return this._array;
    }
};

const newProject = (title) => {
    return new Project(title);
};

const addToProject = (title, toDo) => {
    title.addToDo(toDo);
};
const removeFromProject = (title, index) => {
    title.removeToDo(index);
};

export { newProject, addToProject, removeFromProject};
