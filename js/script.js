var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
var element = document.createElement('li');

var one = document.getElementsByTagName('li');
console.log(one.length);

element.innerHTML = 'item';
list.appendChild(element);
});
