
// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}



// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);




// Create a new list item when clicking on the "Add" button
function newElement() {
  let listItem = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  listItem.appendChild(t);

  if (inputValue === '') {
    alert("You must write something!");
  } 
  else {
    document.getElementById("myUL").appendChild(listItem);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  listItem.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}



//Delete all List Items
function deleteAll(){
let deleteBtn = document.querySelector('.deleteAll');
let list = document.querySelector('#myUL')

deleteBtn.addEventListener('click',function (){
  list.innerHTML=""
})
}
