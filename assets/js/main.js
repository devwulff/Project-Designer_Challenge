let inputmail = document.getElementById('inputmail');
let popupwindow = document.getElementById('popupwindow');

function subscritionWindow() {
    console.log(inputmail.value);
    popupwindow.style.visibility = "visible";
}

function closePopup() {
    popupwindow.style.visibility = "hidden";
    inputmail.value = '';
}