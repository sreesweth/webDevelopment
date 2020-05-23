
function onAddToCart() {

    // Local Storage - 
    // Session Storage
    // Index db
    var myCartList = [];
    if(localStorage.getItem('myCartList')) {
        myCartList = JSON.parse(localStorage.getItem('myCartList'));
    };
   
    //JS is a Dynamicly types Lang
    var quantity = document.getElementById('quantityInput').valueAsNumber;  // = is an assignment opperator
    var price = document.getElementById('price').innerText;
    var bookTitle = document.getElementsByClassName('page-title')[0].innerHTML;
    var isSelected = true;
    var myCartItem = {};
    //Objects
    if (quantity) { //false - null, '', 0, undefined, Nan; true- 1- ~
        myCartItem = {
            itemName: bookTitle,
            price: price,
            quantity: quantity,
            isSelected: true
        };

        myCartList.push(myCartItem);
        localStorage.setItem('myCartList', JSON.stringify(myCartList));
        alert('Your Item is successfully Added to Cart');

        var myVariable = 'strnb';

        var myAge = 35;
        var myAgeInString = '35';

        // == comparing value not the types
        // === comparing both values and types
        if(myAge === myAgeInString) {

        }
    }
}

