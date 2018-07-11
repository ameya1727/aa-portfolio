var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click', removeItem);

//Filter event
filter.addEventListener('keyup', filterItems);

//Add item
function addItem(e) {
    
         e.preventDefault();
    
        // Get input valiue;
        var newItem = document.getElementById('item').value;
    
        //Create new li element
        var li = document.createElement('li');
        li.className = 'list-group-item';

        //Add text node with input value
        li.appendChild(document.createTextNode(newItem));

        // Create delete button element
        var deleteBtn = document.createElement('button');

        //Add classes to delete button
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

        //Append text node
        deleteBtn.appendChild(document.createTextNode('X'));

        //Append button to li
        li.appendChild(deleteBtn);

        //Append li to list
        itemList.appendChild(li);
     
}

//Remove item
function removeItem(e) {
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


//Filter item
function filterItems(e) {
    //Convert item names to lowercase
    var text = e.target.value.toLowerCase();
    
    //Get li
    var items = itemList.getElementsByTagName('li');
    
    //Convert HTML collection to array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    });
}
