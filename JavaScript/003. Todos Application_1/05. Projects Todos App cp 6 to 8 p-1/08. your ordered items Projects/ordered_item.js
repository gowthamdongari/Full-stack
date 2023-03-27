let itemList = [
    {
      itemName: "Veg Biryani",
      uniqueNo: 1,
    },
    {
      itemName: "Chicken 65",
      uniqueNo: 2,
    },
    {
      itemName: "Paratha",
      uniqueNo: 3,
    }
  ];
  
  let itemListContainerEl = document.getElementById("itemListContainer");
  itemListContainerEl.classList.add("text-center");
  
  function onDeleteItem(itemId) {
  let itemE1 = document.getElementById(itemId);
  itemListContainerEl.removeChild(itemE1);
  }
  
  function createAndAppend(item){
  let itemId = "item" + item.uniqueNo
  let buttonId = "button" + item.uniqueNo
  
  let itemEl = document.createElement('li');
  itemEl.id = itemId;
  itemEl.classList.add('oredered-item', "p-2");
  itemEl.textContent = item.itemName
  itemListContainerEl.appendChild(itemEl);
  
  let buttonEl = document.createElement('button');
  buttonEl.classList.add("btn", "btn-danger", 'ml-3', "md-4");
  buttonEl.textContent = "Cancel";
  buttonEl.id = buttonId;
  
  buttonEl.onclick = function() {
      onDeleteItem(itemId);
  };
  itemEl.appendChild(buttonEl);
  }
  for (let item of itemList) {
  createAndAppend(item);
  }
  
  
  
  
  
  
  
  
  