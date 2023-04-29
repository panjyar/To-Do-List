const todolist=[{name: 'Make Dishes',dueDate:'2022-04-21'},
{name:'Make Planning',dueDate: 2022-04-22}];
 
 rendertodolist();

 function rendertodolist()  {
  let todolistHTML='';
  
  for(let i=0; i<todolist.length ; i++) {

    const todoObject = todolist[i];
    // const name = todoObject.name;
    // // or const {name} = todoObject ;
    const {name,dueDate} = todoObject;
    
    const html = `
      <div> ${name} </div>
      <div>${dueDate}</div>
      <button onclick= "
        todolist.splice(${i},1);
        rendertodolist();
        " class="delete">Delete
      </button> 
  `;

   todolistHTML +=html;
     
  }
 
  document.querySelector('.js-todo-list').innerHTML = todolistHTML;
 }

  function addtodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

  
    todolist.push({
      // name: name,
      // dueDate:dueDate
      name,
      dueDate
    });
    
    inputElement.value='';

    rendertodolist(); 
  }