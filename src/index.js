// import { loadToDoIntoBody, displayNewToDoPrompt, hideNewToDoPrompt, clearToDoPromptFields } from "./todo-viewer.js";
// import { createToDo, changeDueDate, changePriority } from "./todo-model.js";
// import { newProject, addToProject, removeFromProject } from "./project-model.js";
// import { loadProjectIntoDOM } from "./project-viewer.js";
// import { addProject, deleteProject, loadToDoOnClick } from "./project-controller.js";
// import { initializeToDo } from "./todo-controller.js";

// const dueDateNA = 'due date n/a';
// //variable for duedate
// const projectsArray = new Array();
// //array for all the projects

// const directorAddProject = (name) => {
// //adds a project to the project array 
// //and loads it into the DOM
//   projectsArray.push(newProject(name));
//   loadProjectIntoDOM(projectsArray.find(item => item.title == name));
// };
// const getProjectIndex = (projTitle) => {
// //gets the index given a title?
//   return projectsArray.findIndex(item => item.title == projTitle);
// }
// const getProjectTitle = (projIndex) => {
//   return projectsArray[projIndex].title;
//   //returns the title, given an index
// }


// directorAddProject('default');
// //creates the default project
// const currentProjectIndex = getProjectIndex('default');
// //gets the index of default

// //basic todos
// const wakeUpToDo = createToDo('wake up', 'wake up to have a productive day!', 'default', dueDateNA, 'high');
// const sleepToDo = createToDo('sleep', 'early to bed, early to rise', 'default', dueDateNA, 'medium');
// const dishesToDo = createToDo('do dishes', 'pile of dishes need to be cleaned', 'default', dueDateNA, 'low');

// //adds basic todos to default
// addToProject(projectsArray[currentProjectIndex], wakeUpToDo);
// addToProject(projectsArray[currentProjectIndex], sleepToDo);
// addToProject(projectsArray[currentProjectIndex], dishesToDo);


// const loadAllProjectToDos = (projIndex) => {

//   var index = projectsArray[projIndex].returnArray().length;
//   var array = projectsArray[projIndex].returnArray();
//   for (var i = 0; i < index; i++) {
//       loadToDoIntoBody(array[i]);
//   }
//   //displays todos from project array given a project index
// };
// loadAllProjectToDos(currentProjectIndex);


// //gets buttons
// const newToDoButton = document.querySelector('#new-item-button');
// const cancelToDoButton = document.querySelector('#todo-cancel');
// const enterToDoButton = document.querySelector('#todo-enter');

// newToDoButton.addEventListener('click', () => {
//   // displayNewToDoPrompt();
  
// });
// cancelToDoButton.addEventListener('click', () => {
//   // hideNewToDoPrompt();
//   // clearToDoPromptFields();
// });
// enterToDoButton.addEventListener('click', () => {
//   submitNewToDo();
//   // hideNewToDoPrompt();
//   // clearToDoPromptFields();
// });

// //if new task is submitted, adds it to the project and loads it to DOM
// const submitNewToDo = () => {
//   // const newToDoTitle = document.getElementById('todo_name').value;
//   // const newToDoDetails = document.getElementById('todo_details').value;
//   // const newToDoPriority = document.getElementById('todo_priority').value;
//   // const newToDoDueDate = document.getElementById('todo_duedate').value;
//   // const newToDoProject = getProjectTitle(currentProjectIndex);

//   const newToDo = createToDo(newToDoTitle, newToDoDetails, newToDoProject, newToDoDueDate, newToDoPriority);
//   addToProject(projectsArray[currentProjectIndex], newToDo);
//   loadToDoIntoBody(newToDo);
// }

// //done with currentindex
// const removeCurrentProjectFlag = () => {}
// const addCurrentProjectFlag = () => {}

// //get nodelist of edit buttons
// //would have to do this everytime a project is loaded or notes are loaded
// const editNodelist = document.querySelectorAll('.edit');

// editNodelist.forEach(node => node);


import Project from "./Project.js";
import Item from "./Item.js";
import Notes from "./Notes.js";
import PureDOM from "./PureDOM.js";
import PureUtilities from "./PureUtilities.js";

// export default 
class Main {

  constructor() {
    this.allProjects = [];
    this.allNotes = new Notes();
    this.dom = new PureDOM();
    this.utilites = new PureUtilities();
  }
  initHomePage()
  {
    this.initialProjects();
    this.initialItems();
    this.initialNotes();
    this.initNewProjButtons();
    this.initNewItemButtons();
    this.isStoragePopulated();
    this.loadAllProjects();
    this.loadAllItemsOfProj(this.getProject('Default'));
    this.setnewItemDate();


  }
  initialProjects(){
    this.allProjects.push(new Project('Default'));
    this.allProjects.push(new Project('Chores'));
  }
  initialItems(){
    this.getProject('Default').addItem(new Item('Example Item', 'This Item is editable', '2000-01-01', 'low'));
    this.getProject('Default').addItem(new Item('Email Gary', 'Discuss project M changes', '2023-08-01', 'high'));
    this.getProject('Default').addItem(new Item('Walk Pickles', '','2023-08-07', 'medium'));

    this.getProject('Chores').addItem(new Item('Fix PC','Order parts from Amazon', '2023-09-01', 'high'));
    this.getProject('Chores').addItem(new Item('Wash Dishes','from last nights party','2023-08-07','low'));
  
    console.log(this.allProjects);
  }
  initialNotes(){
    this.allNotes.addNote('This is an example note!');
    this.allNotes.addNote('This content is editable');
  }


  //checks if local storage is populated and if not then populate, if so 
  //populate the class array allProjects[]
  isStoragePopulated(){
    if(!localStorage.getItem("allProjects"))
    {
      this.populateStorage();
    }
    else{
      // localStorage.clear();
      this.populateAllProjects();
    }
  }
  populateStorage(){
    localStorage.setItem("allProjects", JSON.stringify(this.allProjects));
  }
  populateAllProjects(){
    
    let arr = JSON.parse(localStorage.getItem('allProjects'));
    this.allProjects = [];
    
    arr.forEach(project => {
        let newproj = new Project(project._title);
        if(project._items.length > 0){
          project._items.forEach(item =>
              {
                  let newitem = new Item(item._name, item._details, item._dueDate, item._priority);
                  newproj.addItem(newitem);
              });
        }
        this.allProjects.push(newproj);
    });

    console.log(this.allProjects);
  }


  //return project object
  getProject(value = ''){
    return this.allProjects.find((project) => project.title == value);
  }
  


//when projects or items are loaded
  loadAllProjects(){
    this.allProjects.forEach(project => {
        this.dom.loadProjectIntoPanel(project);
    });

    this.initAllProjectButtons();
    this.initAllProjDelButtons();
    
    this.printProjects();
  }
  loadAllItemsOfProj(project = new Project()) {

    this.dom.loadProjNameIntoMain(project.title);
    project.items.forEach(item => {
      this.dom.loadItemIntoMain(item);
    });
    this.initAllItemDelButtons();
    this.initEditableItemListeners();
    
    this.printItems();
  }
  loadAllNotes(){
  }

  // auto sets the date of new item
  setnewItemDate(){

    let newDueDate = document.getElementById('newDueDate');

    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12\
    if(month < 10){ month = "0" + month.toString();}
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    let newDate = year + "-" + month + "-" + day;

    newDueDate.value = newDate;

  }



//when reloading the items or projects list
  removeAllProjects(){
    let itemsList = document.querySelectorAll('.project');
    
    itemsList.forEach((node) => node.remove());
  
  }
  removeAllItemsOfProj(){
    let projectsList = document.querySelectorAll('.projectItem')
    projectsList.forEach(node => node.remove());
  }
  removeAllNotes(){

  }
  


//adds eventlisteners to X's  
  initAllProjDelButtons() {
    const projDelButtons = document.querySelectorAll('.projectDelete');
    projDelButtons.forEach((proj) => proj.addEventListener(
      'click', () => {
        this.removeProject(proj.parentNode.getElementsByTagName('span')[0].textContent);
      }
        ));
  }
  initAllItemDelButtons() {
    const itemDelButtons = document.querySelectorAll('.delete');
    itemDelButtons.forEach((item) => item.addEventListener(
      'click', () => {
        this.removeItem(item.parentNode.getElementsByClassName('itemTitle')[0]);
      }
    ));
  }

//adds eventlisteners to new proj and item buttons
  initNewItemButtons(){
    const newItemButton = document.getElementById('newItemButton');
    const cancelItemButton = document.getElementById('itemCancel');
    const enterItemButton = document.getElementById('itemEnter');

    newItemButton.addEventListener('click', () => {
       this.dom.displayNewItemPrompt();
    });
    cancelItemButton.addEventListener('click', () => {
        this.dom.hideNewItemPrompt();
        this.dom.clearItemPromptFields();
    });
    enterItemButton.addEventListener('click', () => {
        this.submitNewItem();

        this.dom.hideNewItemPrompt();
        this.dom.clearItemPromptFields();
    });
  }
  initNewProjButtons(){
    const newProjectButton = document.getElementById('newProject');
    const cancelProjectButton = document.getElementById('projectCancel');
    const enterProjectButton = document.getElementById('projectEnter');

    newProjectButton.addEventListener('click', () => {
        this.dom.displayNewProjPrompt();  
    });
    cancelProjectButton.addEventListener('click', () => {
        this.dom.hideNewProjPrompt();
        this.dom.clearProjPromptFields();
    });
    enterProjectButton.addEventListener('click', () => {
        this.submitNewProject();
        this.dom.hideNewProjPrompt();
        this.dom.clearProjPromptFields();
    });
  }
 


  //when a new project or item is submitted
  submitNewItem(){
    this.getProject(this.dom.getProjectName()).addItem(new Item(

      this.dom.getNewItemName(),
      this.dom.getNewItemDetails(), 
      this.dom.getNewItemDueDate(),
      this.dom.getNewItemPriority()
    ));

    this.removeAllItemsOfProj();
    this.loadAllItemsOfProj(this.getProject(this.dom.getProjectName()));
    this.populateStorage();
  }
  submitNewProject(){
    this.allProjects.push(new Project(this.dom.getNewProjName()));

    this.removeAllProjects();
    this.loadAllProjects();
    this.populateStorage();
  }


  //when a project or item is deleted
  removeProject(value = ''){

    var i =this.allProjects.findIndex((project) => project.title == value);
    this.allProjects.splice(i,1);

    this.removeAllProjects();
    this.loadAllProjects();
    this.populateStorage();
  }
  removeItem(divTitle) {

    var proj = document.getElementById('projectHeader').textContent;
    var currentProj = this.getProject(proj);
    currentProj.removeItem(divTitle.textContent);

    this.removeAllItemsOfProj();
    this.loadAllItemsOfProj(currentProj);
    this.populateStorage();
  }


  //for changing between projects
  initAllProjectButtons(){
    const projectButtons = document.querySelectorAll('.project');
    projectButtons.forEach((proj) => proj.addEventListener(
      'click', () => {
        this.switchProjects(proj.getElementsByTagName('span')[0].textContent);
          }
        ));
  }
  switchProjects(value){
    let currentProj = this.getProject(value);

    this.removeAllItemsOfProj();
    this.loadAllItemsOfProj(currentProj);
  }







  //for the editable content of the items
  initEditableItemListeners(){
    const itemTitles = document.querySelectorAll('.itemTitle');
    const itemDetails = document.querySelectorAll('.details');

    const itemdueDates = document.querySelectorAll('.dueDate');

    itemTitles.forEach(node => node.addEventListener('input', () => {
      this.editItem(node, "title");
      this.populateStorage();
      }
    ));
    itemDetails.forEach(node => node.addEventListener('input', () => {
      this.editItem(node, "deets");
      this.populateStorage();
    }
    ));


    itemdueDates.forEach(node => node.addEventListener('input',() => {
      this.editItem(node, "dueDate");
      this.populateStorage();
    }
    ));
  }
  editItem(childNode, itemParam){

    var proj = document.getElementById('projectHeader').textContent;
    var currentProj = this.getProject(proj);
    var liNode = childNode.parentNode;

    var parent = document.getElementById('itemsList');
    var index = Array.from(parent.children).indexOf(liNode);

    if(itemParam == "title")
    {
      currentProj.items[index].name = childNode.textContent;
      console.log(currentProj.items[index].name);
    }
    else if(itemParam == "deets"){
      currentProj.items[index].details = childNode.textContent;
      console.log(currentProj.items[index].details);
    }
    else{
      currentProj.items[index].dueDate = childNode.value;
      console.log(currentProj.items[index].dueDate);
    }

  }



  printProjects(){
    this.allProjects.forEach((proj) => console.log(proj.title));
  }
  printItems(){
    var projName = document.getElementById('projectHeader');
    var proj = this.getProject(projName.textContent);

    proj.items.forEach((item) => console.log(item.name));
  }
}



let initiate = new Main();

initiate.initHomePage();



