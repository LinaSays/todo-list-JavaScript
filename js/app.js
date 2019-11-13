/**
 * Todolist
 */
var app = {
    counter: 0,
    init: () => {
        let todo = document.getElementById('todo');

        // on crée form
        app.form = document.createElement('form');
        app.form.setAttribute('id', 'todo-form');

        // on crée input dans le form
        const input = document.createElement('input');
        input.type = "text";
        input.className = "add-todo";
        input.placeholder = "Ajouter une tâche";

        // on ajoute form et input à todo
        let inputWindow = todo.appendChild(app.form).appendChild(input);

        // LE MESSAGE DES TACHES EN COURS
        app.tache = document.createElement('p');
        app.tache.setAttribute('id', 'tache');
        app.setCounter();
        
        todo.append(app.tache);

        // on écoute 
        app.form.addEventListener('submit', app.addTodo);
    },

    addTodo: (evt) => {
        evt.preventDefault();
        var text = document.querySelector('.add-todo');
        var itemValue = text.value;
        
        if (itemValue.length > 0) {
        // on crée une div où il y aura une liste
        const div = document.createElement('div');
        div.className = "item-list";
        // on crée les input checkbox
        input2 = document.createElement('input');
        input2.type = "checkbox";
        input2.className = "item";
        //input2.value = itemValue;
        
        app.task = todo.appendChild(div).appendChild(input2);
        app.addItem(itemValue);
        app.counter++;
        app.setCounter();
        } else {
        alert('Faut écrire quelque chose');
        }

        app.form.reset();

        // pour appliquer le style css de :checked
        input2.addEventListener('change', function() {
        if (this.checked) {
            this.parentElement.classList.add("checked");
            app.counter--;
            app.setCounter();
        } else {
            this.parentElement.classList.remove("checked");
            app.counter++;
            app.setCounter();
        }
        
        })
    },

    addItem: (itemValue) => {
        var label = document.createElement('label');
        label.textContent = itemValue;
        app.task.after(label);
    },

    setCounter: () => {
        app.tache.textContent = app.counter < 2 ? `${app.counter} tâche en cours` : `${app.counter} tâches en cours`;
    },
    };
  
  
document.addEventListener('DOMContentLoaded', app.init);