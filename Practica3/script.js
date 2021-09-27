function checkForm() {
    document.getElementById("selected").innerHTML = "Datele dvs.:<br>";
    document.getElementById("selected").innerHTML += "Numele: " + document.getElementById("fName").value + "<br>";
    document.getElementById("selected").innerHTML += "Prenumele: " + document.getElementById("lName").value + "<br>";

    var radios = document.getElementsByName("gender");
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            document.getElementById("selected").innerHTML += "Sexul: " + radios[i].value + "<br>";
            break;
        }
    }

    document.getElementById("selected").innerHTML += "Data nasterii: " + document.getElementById("birthday").value + "<br>";
    document.getElementById("selected").innerHTML += "Adresa: " + document.getElementById("judet").value + ", " + document.getElementById("localitatea").value + ", " + document.getElementById("strada").value + "<br>";
    document.getElementById("selected").innerHTML += "Nr. de telefon: " + document.getElementById("number").value + "<br>";
    document.getElementById("selected").innerHTML += "E-mail: " + document.getElementById("email").value + "<br>";
    document.getElementById("selected").innerHTML += "Culoarea favorita: " + document.getElementById("favcolor").value + "<br>";

    document.getElementById("selected").innerHTML += "Cetatenii: "
    var notFirstTime = false;
    var boxes = document.getElementsByName("country");
    for (var i = 0, length = boxes.length; i < length; i++) {
        if (boxes[i].checked) {
            if (notFirstTime)
                document.getElementById("selected").innerHTML += ", "
            else
                notFirstTime = true;

            document.getElementById("selected").innerHTML += boxes[i].value;
        }
    }
    document.getElementById("selected").innerHTML += "<br>"

    document.getElementById("selected").innerHTML += "Scoala absolvita: " + document.getElementById("school").value + "<br>";
    document.getElementById("selected").innerHTML += "Anul: " + document.getElementById("year").value + "<br>";

    document.getElementById("selected").innerHTML += "Cunoasterea limbii romane: " + document.getElementById("romanian").value + "<br>";
    document.getElementById("selected").innerHTML += "Cunoasterea limbii engleze: " + document.getElementById("english").value + "<br>";
    document.getElementById("selected").innerHTML += "Cunoasterea limbii ruse: " + document.getElementById("russian").value + "<br>";
    document.getElementById("selected").innerHTML += "Cunoasterea limbii franceze: " + document.getElementById("french").value + "<br>";
}