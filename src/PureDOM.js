import Project from "./Project.js";
import Item from "./Item.js";
import Notes from "./Notes.js";

export default class PureDOM {
    loadNoteIntoMain(value = '')
    {

    }
    loadProjectIntoPanel(project = new Project()) {
        
        if(project.title == 'Default')
        {   let el = document.getElementById('newProject');
            console.log(el);
            let str = `<button class="project" type="button" id="${project.title}">
                      <span>${project.title}</span>
                      </button>`;
                      console.log(str);
            el.insertAdjacentHTML("beforebegin", str);
            console.log(el);
        }
        else{
            let el = document.getElementById('newProject');
            console.log(el);
            let str = `<button class="project" type="button" id="${project.title}">
                    <span>${project.title}</span>
                            <div class="projectDelete">
                                    x
                            </div>
                </button>`;
                console.log(str);
            el.insertAdjacentHTML("beforebegin", str);
           
        }
    }
    loadProjNameIntoMain(value = ''){
      document.getElementById('projectHeader').textContent = value;
    }
    loadItemIntoMain (item = new Item()) {
        document.getElementById('newItem').insertAdjacentHTML('beforebegin',
        
        `<li class="projectItem">
                              <div class="priority ${item.priority}"></div>
                              <div class="itemTitle" contenteditable="true">${item.name}</div>
                              <input class="dueDate" type="date" value="${item.dueDate}">
                              <div class="details" contenteditable="true">${item.details}</div>
                              <button type="button" class="delete">x</button>
                        </li>`
        
        );
    }


    //????
    addNewNote () {


    }


    // Item Form DOM handlers
    displayNewItemPrompt() {
        const itemPrompt = document.getElementById('itemPrompt');
        itemPrompt.style.display = 'block';
    }
    hideNewItemPrompt() {
        const itemPrompt = document.getElementById('itemPrompt');
        itemPrompt.style.display = 'none';
    }
    clearItemPromptFields() {
        document.getElementById('itemPromptForm').reset();

        let newDueDate = document.getElementById('newDueDate');

        let dateObj = new Date();
        let month = dateObj.getUTCMonth() + 1; //months from 1-12\
        if(month < 10){ month = "0" + month.toString();}
        let day = dateObj.getUTCDate();
        let year = dateObj.getUTCFullYear();
    
        let newDate = year + "-" + month + "-" + day;
    
        newDueDate.value = newDate;

    }
    


    //Project Form DOM handlers
    displayNewProjPrompt() {
        const newProjectInput = document.getElementById('projectName');
        const newProjectButtons = document.getElementById('projectButtonContainer');

        newProjectButtons.style.display = 'block';
        newProjectInput.style.display = 'block';
    }
    hideNewProjPrompt() {
        const newProjectInput = document.getElementById('projectName');
        const newProjectButtons = document.getElementById('projectButtonContainer');

        
        newProjectButtons.style.display = 'none';
        newProjectInput.style.display = 'none';
    }
    clearProjPromptFields() {
        const newProjectInput = document.getElementById('projectName');
        newProjectInput.value = "";
    }




      getNewItemName(){
        return document.getElementById('newItemName').value;
       
      }
      getNewItemDetails(){
        return document.getElementById('newDetails').value;

      }
      getNewItemPriority(){
        return document.getElementById('newPriority').value;

      }
      getNewItemDueDate(){
        return document.getElementById('newDueDate').value;
      }
      getProjectName(){
        return document.getElementById('projectHeader').textContent;
      }


      getNewProjName(){
        return document.getElementById('projectName').value;

      }
    

}

export {PureDOM};