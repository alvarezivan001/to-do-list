import { loadToDoIntoBody } from "./todo-viewer";
import { createToDo, changeDueDate, changePriority} from "./todo-model";
import { newProject, addToProject, removeFromProject} from "./project-model";
import { loadProjectIntoDOM } from "./project-viewer";

const notAvailable = 'n/a';

const defaultProject = newProject('default');
const wakeUpToDo = createToDo('wake up', 'wake up to have a productive day!', 'default', notAvailable, 'high');
const sleepToDo = createToDo('sleep', 'early to bed, early to rise', 'default', notAvailable, 'high');

addToProject(defaultProject, wakeUpToDo);
addToProject(defaultProject, sleepToDo);

loadProjectIntoDOM(defaultProject);

 var index = defaultProject.returnArray().length;
 var array = defaultProject.returnArray();

 for(var i = 0; i < index; i++)
 { 
    loadToDoIntoBody(array[i]);
    
 }
