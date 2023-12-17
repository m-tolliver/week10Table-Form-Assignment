let id = 0;

class Project {
  constructor(project, dimension){
    this.project = project;
    this.dimension = dimension;
  }
}
//:this was to style my table
class dimension {
  constructor(length, width) {
    this.length = length;
    this.width = width;
    this.project = [];
  }
//: this was to make the form functional for the user
  addProject(project) {
    this.project.push(project);
  }
//:this was so the user could delete their project
  deleteProject(project) {
    let index = this.project.indexOf(project);
    this.project.splice(index, 1);
  }
}

let projects = [];
let projectId = 0;

function onclick(id, action) {
  let element = document.getElementById(id);
  element.addEventListener('click',()=> {
    return element
  });
  
}


onclick('new project', () => {
  projects.push(new Project(projectId++, getValue('new-project')));
  drawDOM();
});



function getValue(id) {
  return document.getElementById(id).value;
}

function drawDOM() {
  let projectDiv = document.getElementById('projects');
  clearElement(projectDiv);
  for (project of projects) {
  let table = createProjectTable(project);
  let title = document.createElement('h2');
  title.innerHTML = project.name;
  title.appendChild(createDeleteProjectButton(project));
  projectDiv.appendChild(title);
  projectDiv.appendChild(table);
  for (dimension of project.dimension) {
    createDimensionRow(project, table, dimension);
  }
  }
}
//: this allows the user to input the dimensions for their project
function createDimensionRow(project, table, dimension) {
  let row = table.insertRow(2);
  row.insertCell(0).innerHTML = dimension.length;
  row.insertCell(1),innerHTML = dimension.width;
  let actions = row.insertCell(2);
  actions.appendChild(createDeleteRowButton(project, dimension));
}

function createDeleteRowButton(project, dimension) {
  let btn = document.createElement('button');
  btn.className = 'btn btn-primary';
  btn.innerHTML = 'Delete';
  btn.onclick = () => {
    let index = project.dimension.indexOf(number);
    project.dimension.splice(index, 1);
    drawDOM();
  };
  return btn;
}

function createDeleteProjectButton(project) {
  let btn = document.createElement('button');
  btn.className = 'btn btn-primary';
  btn,innerHTML = 'Delete Project';
  btn.onclick = () => {
    let index = projects.indexOf(project);
    projects.splice(index, 1);
    drawDOM();
  };
  return btn;
}

function createDimensionButton(dimension) {
  let btn = document.createElement('button');
  btn.className = 'btn btn-primary';
  btn.innerHTML = 'Create';
  btn.onclick = () => {
    project.dimension.push(new dimension(getValue(`dimension-input-${project.id}`), getValue(`length-input-${dimension.id}`)));
    drawDOM();
  };
  return btn;
}

function createProjectTable(project) {
  let table = document.createElement('table');
  table.setAttribute('class', 'table table-dark table-striped');
  let row = table.insertRow(0);
  let dimensionColumn = document.createElement('th');
  let lengthColumn = document.createElement('th');
  newColumn.innerHTML = 'Dimension';
  lengthColumn.innerHTML = 'Length';
  row.appendChild(dimensionColumn);
  row.appendChild(lengthColumn);
  let formRow = table.insertRow(1);
  let dimensionTh = document.createElement('th');
  let lengthTh = document.createElement('th');
  let createTh = document.createElement('th');
  let dimensionInput = document.createElement('input');
  dimensionInput.setAttribute('id', `dimension-input${project,id}`);
  dimensionInput.setAttribute('type', 'text');
  dimensionInput.setAttribute('class', 'form-control');
  let lengthInput = document.createElement('input');
  lengthInput.setAttribute('id', `length-input${project,id}`);
  lengthInput.setAttribute('type', 'text');
  lengthInput.setAttribute('class', 'form-control');
  let newDimensionButton = createDimensionButton(project);
  dimensionTh.appendChild(dimensionInput);
  lengthTh.appendChild(lengthInput);
  createTh.appendChild(newDimensionButton);
  formRow.appendChild(dimensionTh);
  formRow.appendChild(lengthTh);
  formRow.appendChild(createTh);
  return table;
}

function clearElement(element) {
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  }
}



document.getElementById('add').addEventListener('click', () => {
   let table = document.getElementById();
   let row = table.insertRow(1);
   row.setAttribute('id', 'item-${id}');
   row.insertCell(0).innerHTML = document.getElementById('new-color').value;
   row.insertCell(1).innerHTML = 
   row.insertCell(2).innerHTML = document.getElementById('new-paint-color').value;
   row.insertCell(2).innerHTML = document.getElementById('new-quantity').value;
   let actions = row.insertCell(4);
   actions.appendChild(createDeleteButton(id++));
   document.getElementById('new-color')
});
//: this is to allow the user to delete their project
function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
      console.log(`Delete row with id: item-${id}`)  
      let elementToDelete = document.getElementById(`item-${id}`); 
      elementToDelete.parentNode.removeChild(elementToDelete);

    };
    return btn;
}


