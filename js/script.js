var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var element = document.createElement('li');
	var listItems = document.getElementsByTagName('li');
	console.log(listItems.length);
	
	var i = 1;
	element.innerHTML = 'item' + i++;
	list.appendChild(element);
});