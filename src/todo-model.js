// used to create todo objects
// should be tied with a project
// title, details, project should not be changeable
// duedate, priority should be changeable

//functions to create todo obj., change duedate and priority
//changing MORE to do parameters to be implemented later in future?

class ToDo {
    constructor(title, details, project, dueDate, priority)
    {
        this._title = title;
        this._details = details;
        this._project = project;
        this._dueDate = dueDate;
        this._priority = priority;
    }
    get title() {
        return this._title;
    }
    get details() {
        return this._details;
    }
    get project() {
        return this._project;
    }
    get dueDate() {
        return this._dueDate;
    }
    get priority() {
        return this._priority;
    }
    set dueDate(value) {
        this._dueDate = value;
    }
    set priority(value) {
        this._priority = value;
    }
    set details(value) {
        this._details = value;
    }
};

const createToDo = (title, details, project, dueDate, priority) => {
    return new ToDo(title,details,project,dueDate,priority);
}

const changeDueDate = (title, newDate) => {
    title.dueDate(newDate);
};

const changePriority = (title, newPriority) => {
    title.priority(newPriority);
};
const changeDetails = (title, newDetails) => {
    title.details(newDetails);
};

export {createToDo, changeDueDate, changePriority, changeDetails};