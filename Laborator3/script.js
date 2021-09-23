function current() {
    var d = new Date();
    var miuntes = d.getMinutes();
    var seconds = d.getSeconds();
    var hours = d.getHours();
    var day = d.getDate();
    var month = d.getMonth();

    if (miuntes < 10)
        miuntes = "0" + miuntes;

    if (seconds < 10)
        seconds = "0" + seconds;

    if (hours < 10)
        hours = "0" + hours;

    if (day < 10)
        day = "0" + day;

    if (month < 10)
        month = "0" + month;

    document.getElementById("1p").innerHTML = "Data: " + day + "." + month + "." + d.getFullYear() + "  |  Timpul: " + hours + ":" + miuntes + ":" + seconds;
}

function yesterday() {
    var d = new Date();
    var miuntes = d.getMinutes();
    var seconds = d.getSeconds();
    var hours = d.getHours();
    var day = d.getDate() - 1;
    var month = d.getMonth();

    if (miuntes < 10)
        miuntes = "0" + miuntes;

    if (seconds < 10)
        seconds = "0" + seconds;

    if (hours < 10)
        hours = "0" + hours;

    if (day < 10)
        day = "0" + day;

    if (month < 10)
        month = "0" + month;

    document.getElementById("1p").innerHTML = "Data: " + day + "." + month + "." + d.getFullYear() + "  |  Timpul: " + hours + ":" + miuntes + ":" + seconds;
}

function year() {
    var d = new Date();
    var miuntes = d.getMinutes();
    var seconds = d.getSeconds();
    var hours = d.getHours();
    var day = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear() - 1;

    if (miuntes < 10)
        miuntes = "0" + miuntes;

    if (seconds < 10)
        seconds = "0" + seconds;

    if (hours < 10)
        hours = "0" + hours;

    if (day < 10)
        day = "0" + day;

    if (month < 10)
        month = "0" + month;

    document.getElementById("1p").innerHTML = "Data: " + day + "." + month + "." + year + "  |  Timpul: " + hours + ":" + miuntes + ":" + seconds;
}

function week() {
    var d = new Date();
    var miuntes = d.getMinutes();
    var seconds = d.getSeconds();
    var hours = d.getHours();
    var day = d.getDate() - 7;
    var month = d.getMonth();
    var year = d.getFullYear();

    if (miuntes < 10)
        miuntes = "0" + miuntes;

    if (seconds < 10)
        seconds = "0" + seconds;

    if (hours < 10)
        hours = "0" + hours;

    if (day < 10)
        day = "0" + day;

    if (month < 10)
        month = "0" + month;

    document.getElementById("1p").innerHTML = "Data: " + day + "." + month + "." + year + "  |  Timpul: " + hours + ":" + miuntes + ":" + seconds;
}

function second() {
    var number = document.getElementById("2number").value;

    number.split(" ");

    var region = number.split(" ")[0].slice(1, 4);

    document.getElementById("2p").innerHTML = "Regionul: " + region + "<br>Numarul: " + number.split(" ")[1];
}

function third() {
    var text = document.getElementById("3text").value;
    var character = document.getElementById("3char").value;
    var counter = +0;

    for (var c of text) {
        if (character == c)
            counter++;
    }

    document.getElementById("3p").innerHTML = "S-au gasit " + counter + " aparitii a literei \"" + character + "\"";
}

function fourth() {
    var text = document.getElementById("4text").value;

    var letters = Array.apply(0, Array(26)).map(function() { return +0 });

    for (var i = 0; i < text.length; i++) {
        letters[text[i].toLowerCase().charCodeAt(0) - 97]++;
    }

    document.getElementById("p4").innerHTML = "|";
    for (var i = 0; i < 13; i++) {
        document.getElementById("p4").innerHTML += String.fromCharCode(i + 97) + ": " + letters[i] + "|";
    }

    document.getElementById("p4").innerHTML += "<br>|";

    for (var i = 13; i < 26; i++) {
        document.getElementById("p4").innerHTML += String.fromCharCode(i + 97) + ": " + letters[i] + "|";
    }
}

function clearValue(id){
    document.getElementById(id).value = "";
}

class Cont {
    constructor(sold) {
        this.sold = sold;
    }

    setBalance(amount) {
        if (amount >= 0) {
            this.sold = amount;
        } else {
            this.sold = 0;
            alert("EROARE\nSuma este mai mica ca 0");
        }
    }

    credit(amount) {
        if (amount > 0) {
            this.sold += amount;
        }
    }

    debit(amount) {
        if (this.sold - amount >= 0) {
            this.sold -= amount;
        } else {
            alert("EROARE\nSuma debitului este mai mare ca suma soldului");
        }
    }

    getBalance(){
        return this.sold;
    }
}

var cont = new Cont();

function createCont(){
    var amount = document.getElementById("balInit").value;
    cont.setBalance(+amount);
    document.getElementById("b5").innerHTML = cont.getBalance();
}

function creditCont(){
    var amount = document.getElementById("balCredit").value;
    cont.credit(+amount);
    document.getElementById("b5").innerHTML = cont.getBalance();
}

function debitCont(){
    var amount = document.getElementById("balDebit").value;
    cont.debit(+amount);
    document.getElementById("b5").innerHTML = cont.getBalance();
}