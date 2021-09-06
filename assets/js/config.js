var containerContent  = document.querySelector(".container");

function buildForm() {
    // row
    var divContainer = document.createElement("div");
    divContainer.className = "form-group";
    containerContent.appendChild(divContainer);

    // label
    var labelElement = document.createElement("label");
    labelElement.textContent = "Start Hour";
    labelElement.className = "form-check-label";
    containerContent.appendChild(labelElement);

    // list box
    var selectElement = document.createElement("select");
    selectElement.className = "form-group";    
    selectElement.id = "idStart";
    containerContent.appendChild(selectElement);

    //Create and append the options
    var myTime = dayjs("01/01/2000 00:00:00");    
    for (var index = 0; index < 24; index++) {
        var optionElement = document.createElement("option");
        optionElement.value = index;
        optionElement.text = dayjs(myTime).format("hh A");
        selectElement.appendChild(optionElement);

        myTime = dayjs(myTime).add(1, "h");
    }        

    // row
    var divContainer = document.createElement("div");
    divContainer.className = "form-group";
    containerContent.appendChild(divContainer);

    // label
    var labelElement = document.createElement("label");
    labelElement.textContent = "Stop Hour";
    labelElement.className = "form-check-label";    
    containerContent.appendChild(labelElement);

    // list box
    var selectElement = document.createElement("select");
    selectElement.className = "form-group";        
    selectElement.id = "idStop";    
    containerContent.appendChild(selectElement);

    //Create and append the options
    var myTime = dayjs("01/01/2000 00:00:00");    
    for (var index = 0; index < 24; index++) {
        var optionElement = document.createElement("option");
        optionElement.value = index;
        optionElement.text = dayjs(myTime).format("hh A");
        selectElement.appendChild(optionElement);

        myTime = dayjs(myTime).add(1, "h");
    } 

    // row
    var divContainer = document.createElement("div");
    divContainer.className = "form-group";
    containerContent.appendChild(divContainer);
    
    // button
    var btnElement = document.createElement("button");
    btnElement.className = "btn btn-primary";
    btnElement.id = "btn";
    btnElement.textContent = "Save";
    containerContent.appendChild(btnElement);
}

buildForm();

// Form Listener for Save Button
document.getElementById("btn").addEventListener("click", function () {
    console.log("button clicked");

    myStartTime = document.getElementById("idStart").selectedIndex;
    myStopTime  = document.getElementById("idStop").selectedIndex;    

    if (myStopTime > myStartTime) {
        localStorage.setItem("wsStart", myStartTime);
        localStorage.setItem("wsStop", myStopTime);        
        window.location.replace("./index.html");        
    } else {
        alert("Don't be a clown.");
    }
});