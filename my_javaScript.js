document.addEventListener('DOMContentLoaded', function()
        {
        document.querySelector('#form').onsubmit = function()
        {
        const li = document.createElement('li');
        let task_text = document.querySelector("#task").value;
        let desc_text = document.querySelector("#desc").value;
        let imp_text = document.querySelector("#importance").value;
        let delete_task = `<span> ${task_text}</span> <button class = "remove"> Remove </button>`;
        li.innerHTML = delete_task;
        document.querySelector("#taskN").append(li);
        document.querySelector("#task").value = '';
        const li2 = document.createElement('li2');
        li2.innerHTML = document.querySelector("#desc").value;
        document.querySelector("#taskD").append(li2);
        document.querySelector("#desc").value = '';
        const li3 = document.createElement('li3');
        li3.innerHTML = document.querySelector("#importance").value;
        document.querySelector("#taskS").append(li3);
        document.querySelector("#importance").value = '';
        return false;
    }
    document.addEventListener('click', function(event)
    {
    	element = event.target;
    	if(element.className === 'remove')
     {
       element.parentElement.remove();
     }
    })
  });
var tasks = [];
  function setArray(){
  boxName = document.getElementById('#task').value;
  boxDesc = document.getElementById('#desc').value;
  boxStatus = document.getElementById('#status').value;
  tasks.push(boxName,boxDesc,boxStatus);
  var p = "";
   for(var i = 0; i < tasks.length;i++)
   {
         p = p+tasks[i];
   }
   document.getElementById(p).innerHTML;
}

function print()
{
console.log(tasks);
}


