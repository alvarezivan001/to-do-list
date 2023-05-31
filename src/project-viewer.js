// this is for project viewer in panel to load onto DOM
//to be exported
//changes will be handled by controller?

//when created
const loadProjectIntoDOM = (project) => {
    const projectNode = document.createElement('li');
    projectNode.setAttribute('id', project.title);
    projectNode.setAttribute('class', 'projects');
    projectNode.textContent = project.title;

    const addProjectNode = document.getElementById('new-project');
    const projectsList = document.getElementById('projects-list');

    projectsList.insertBefore(projectNode, addProjectNode);
};

//when deleted
// const removeProjectFromDOM;


// // when page is loaded
// const loadProjectPanel;

export {loadProjectIntoDOM};