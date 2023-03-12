let cartItemTextInputE1 = document.getElementById("cartItemTextInput");
let cartItemContainerE1 = document.getElementById("cartItemContainer");

function onAddCartItem() {
    let cartItemText = cartItemTextInputE1.value;

    let cartItemE1 = document.createElement("li");
    cartItemE1.textContent = cartItemText;

    cartItemTextInputE1.value = "";
    cartItemContainerE1.appendChild(cartItemE1);

}