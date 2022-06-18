const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = (todo) => {
    const html = `<li class="list-group-item text-light d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
</li>`;
 list.innerHTML += html;

};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();  //removes whitespaces before or after a string
    if(todo.length>0){
        generateTemplate(todo);
        addForm.reset();
    }
    
});

list.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});