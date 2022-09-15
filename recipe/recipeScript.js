//JSDOM
//When you click on a button you get an alert that you are leaving page
function showAlert(){
    alert("You are now leaving this page")
}

function addItem(){
    let ul = document.getElementById('ul'); //ul
    let li = document.createElement('li');//li

    let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.value = 1;
        checkbox.name = "todo[]";

    li.appendChild(checkbox);

    let text = document.getElementById('texto');
    li.appendChild(document.createTextNode(text.value));
    ul.appendChild(li); 
}

//add checkbox to list
function writeTo(object) {
    let container = document.getElementByTagName("li");
    if (object.checked) {
       container.innerHTML = container.innerHTML + "Added " + object.value + " <br />";
    } else {
      container.innerHTML = container.innerHTML + "Removed " + object.value + " <br />";
    }

  }
