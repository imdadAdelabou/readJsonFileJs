var oXHR = new XMLHttpRequest();
// oXHR.onreadystatechange = reportStatus;
// oXHR.open("GET", "./data.json");
// oXHR.send();

const reportStatus = () => {
    if (oXHR.readyState == 4) {
        console.log(oXHR.responseText);
        let result = JSON.parse(oXHR.responseText); //Ceci est le json contenu dans le fichier data.json transformer en object javascript
        console.log(result);
        alert(result["name"]);
    }
}

const readJson = () => {
    console.log("Enter to function");
    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "./data.json");
    oXHR.send();
}