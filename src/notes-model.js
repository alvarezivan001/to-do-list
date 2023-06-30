// notes should not have changeable properties

// function to create note obj
// changing notes parameters to be implemented later possibly

class Note {
    constructor (title, details)
    {
        this._title = title;
        this._details = details;
    }

    get title() {
        return this._title;
    }
    get details() {
        return this._details;
    }
    set details(value) {
        this._details = value;
    }
};

const createNote = (title, details) => {
    return new Note(title, details);
};

const changeDetails = (title, newDetails) => {
    title.details(newDetails);
};

export {createNote, changeDetails};