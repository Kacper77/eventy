var list = document.getElementById('list');
var add = document.getElementById('addElem');
add.addEventListener('click', function() {
	var element = document.createElement('li');
	var listItems = list.getElementsByTagName('li');
	console.log(listItems.length);
	element.innerHTML = 'item'+ listItems.length;
	list.appendChild(element);
});