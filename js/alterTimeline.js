function selectPin(id){
    var pin = document.getElementById(id);

    // Reset pins
    Array.from(pin.parentElement.getElementsByClassName("pin"))
        .forEach(pin =>{
            pin.getElementsByTagName("img")[0].src = "./images/company/icons/unselected.svg";
            var text = pin.getElementsByTagName("div")[0];
            text.style.color = "black";
            text.style.fontWeight = "300";
            // text.style.fontSize = "18px";
        });

    // Adjust selected pin
    var text = pin.getElementsByTagName("div")[0];
    text.style.color = "var(--dark-blue)";
    text.style.fontWeight = "bold";
    // pin.getElementsByTagName("div")[0].style.fontSize = "32px";
    pin.getElementsByTagName("img")[0].src = "./images/company/icons/selected.svg";
}