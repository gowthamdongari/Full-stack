let myArray = [5, "six", 3,7,9]
let deletedItems = myArray.splice(2,1); // delete from index 2 and 1 element from 2
console.log(myArray);
console.log(deletedItems);

let myArray1 = [ 4, 7, "nine", 8];
let deletedmyarray1 = myArray1.splice(2, 0, "newly_added", 6)
console.log(myArray1)
console.log(deletedmyarray1);

//replace
Array.splice(index, deletecount, newvalue);

// finding index
newArray = [1,2,3,7,9,0];
let itemIndex = newArray.findIndex(function(eachItem){
    if (eachItem === 9){
        return true;
    }else{
        return false;
    }
})
console.log(itemIndex);

// customer Data
let customerData = [
    {
        name: "ramki",
        id: 103
    },
    {
        name: "yuva",
        id: 105
    }
    ];
let itemIndexCustomer = customerData.findIndex(function(eachItem){
    if (eachItem.id === 103){
        return true
    }else{
        return false
    }
});
console.log(itemIndexCustomer);