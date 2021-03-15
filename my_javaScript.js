

document.addEventListener('DOMContentLoaded', function() {
	document.querySelector("#addForm").onsubmit = function(){
	const li = document.createElement('li');
	const li2 = document.createElement('li2');
	const li3 = document.createElement('li3');
    let task_test = document.querySelector('#')
	let new_task_html = '<span> ${#task_text} </span> <button class = "remove"> Remove </button>'
	li.innerHTML = document.querySelector('#taskName').value;
	li2.innerHTML = document.querySelector('#taskDesc').value;
	li3.innerHTML = document.querySelector('#taskP').value;
	document.querySelector("#ulForm").append(li);
	document.querySelector("#ulForm").append(li2);
	document.querySelector("#ulForm").append(li3);
	document.querySelector('#taskName').value = 'Task name:';
	document.querySelector('#taskDesc').value = 'Task desc:';
	document.querySelector('#taskP').value = '';
	return tasks.get('#taskName');+" "+tasks.get('#taskDesc');+" "+tasks.get('#taskP');
    return false;
}
}
var tasks = [];
  function setArray(){
  boxName = document.getElementById('#taskName').value;
  boxDesc = document.getElementById('#taskDesc').value;
  boxStatus = document.getElementById('#taskP').value;
  tasks.push(boxName,boxDesc,boxStatus);
  var p = "";
   for(int i = 0; i < tasks.length;i++)
   {
         p = p+tasks[i];
   }
   document.getElementById(p);
}
function print()
{
console.log(tasks);
}


