
 document.addEventListener('DOMContentLoaded', function()
 {

    document.querySelector("#new-task").onsubmit = function()
    {
        //This function adds elements to the list when the submit button is pressed

        const li = document.createElement('li');//Creates new elements in the list from scratch
        
        let task_text = document.querySelector('#task').value;
        let new_task_html =  `<span id = "completedTasks"> ${task_text} </span>
                              <button class = "remove"> Remove </button>
                              
                              <form id = "radio-button">
                                <input type="checkbox" class="completed" value="Completed" onclick = "hello()">
                                <label for="completed">Completed</label><br>
                                <input type="checkbox" class="pending" value="Pending">
                                <label for="pending">Pending</label>
                              </form>` ;


        li.innerHTML = new_task_html;

        document.querySelector("#tasks_list").append(li);//Adds element to the list as a child node
        document.querySelector("#task").value = '';

        return false;
    }
    

    document.addEventListener('click', function(event)
    {
        element = event.target;
        if (element.className === 'remove')// if the remove button is clicked on then remove the element w the button
        {
            element.parentElement.remove();
        }
    })

    function hello(){
        var ele = document.getElementsByClassName("#completedTasks");
        for (var i in ele)
        ele[i].style.textDecoration='line-through'
        
    }



});
