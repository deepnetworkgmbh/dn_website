function selectPin(id){
    var pin = document.getElementById(id);

    // Reset pins
    Array.from(pin.parentElement.getElementsByClassName("pin"))
        .forEach(pin =>{
            pin.getElementsByTagName("img")[0].src = "../images/company/icons/unselected.svg";
            var text = pin.getElementsByTagName("div")[0];
            text.className = "not-selected";
        });

    // Adjust selected pin
    var text = pin.getElementsByTagName("div")[0];
    text.className = "selected";
    pin.getElementsByTagName("img")[0].src = "../images/company/icons/selected.svg";
}