function add()
{
document.addEventListener('DOMContentLoaded', function() {
	document.querySelector("#addForm").onsubmit = function(){
	const li = document.createElement('li');
	
	li.innerHTML = document.querySelector('#taskName').value;
	
	document.querySelector("#ulForm").append(li);
	
	document.querySelector('#taskName').value = '';		

    return false;
}
});
var tasks = [];
  function setArray(){
  boxName = document.getElementById('#taskName').value;
  boxDesc = document.getElementById('#taskDesc').value;
  boxStatus = document.getElementById('#taskP').value;
  tasks.push(boxName,boxDesc,boxStatus);
  var p = "";
   for(var i = 0; i < tasks.length;i++)
   {
         p = p+tasks[i];
   }
   document.getElementById(p);
}
function print()
{
console.log(tasks);
}


