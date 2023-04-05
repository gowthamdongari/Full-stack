// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let ul = document.getElementById("bookmarksList");

// validation and submit

function validateForm(event) {

    let x = document.getElementById("siteNameInput");

    let y = document.getElementById("siteUrlInput");

    let siteNameError = document.getElementById("siteNameErrMsg");

    let siteUrlError = document.getElementById("siteUrlErrMsg");

    siteNameError.innerHTML = '';

    siteUrlError.innerHTML = '';

    // checking for site name

    if (x && x.value == "") {

        siteNameError.innerHTML = 'Required*'

    }

    //checking for site url

    if (y && y.value == "") {

        siteUrlError.innerHTML = 'Required*'

    }

    //submitting if both present

    if (x && y && x.value != "" && y.value != "") {

        siteNameError.innerHTML = '';

        siteUrlError.innerHTML = '';

        let site = {
            siteName: x.value,
            siteUrl: y.value
        }

        console.log(site);

        makeList(site);

        x.value = ""

        y.value = ""

        return true;

    }

    event.preventDefault()

    return false;

}



// to show the updates list in HTML UI

function makeList(site) {

    let li = document.createElement('li'); // create a new list item

    let x = document.createElement("p"); // create a new p item

    let btn = document.createElement("BUTTON"); // visit button for click to visit url

    let div = document.createElement('DIV') // div to wrap site name and button



    x.innerHTML = site.siteName

    x.style.margin = "0px";

    x.style.paddingRight = "20px";



    btn.innerHTML = "Visit"

    btn.addEventListener("click", function() {

        window.open(site.siteUrl)

    });



    div.style.display = "flex";

    div.appendChild(x);

    div.appendChild(btn);



    li.appendChild(div); // append the div to the li

    li.style.marginBottom = "8px";

    // append the list item to the ul

    ul.appendChild(li);
    return;

}