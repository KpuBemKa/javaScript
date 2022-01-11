function getZodiac() {
    var day = document.getElementById("birthday").value.split("-")[2];
    var month = document.getElementById("birthday").value.split("-")[1];

    var birthday = new Date(2000, Number(month) - 1, day);

    var varsator = new Date(2000, 0, 20);
    var varsator2 = new Date(2001, 0, 20);
    var pesti = new Date(2000, 1, 19);
    var berbec = new Date(2000, 2, 21);
    var taur = new Date(2000, 3, 21);
    var gemeni = new Date(2000, 4, 21);
    var rac = new Date(2000, 5, 22);
    var leu = new Date(2000, 6, 23);
    var fecioara = new Date(2000, 7, 23);
    var balanta = new Date(2000, 8, 23);
    var scorpion = new Date(2000, 9, 23);
    var sagetator = new Date(2000, 10, 22);
    var capricorn = new Date(2000, 11, 21);

    var zodiac = "nici unul";

    if (birthday >= varsator && birthday < pesti) {
        zodiac = "Varsator";
    } else if (birthday >= pesti && birthday < berbec) {
        zodiac = "Pesti"
    } else if (birthday >= berbec && birthday < taur) {
        zodiac = "Berbec"
    } else if (birthday >= taur && birthday < gemeni) {
        zodiac = "Taur"
    } else if (birthday >= gemeni && birthday < rac) {
        zodiac = "Gemeni"
    } else if (birthday >= rac && birthday < leu) {
        zodiac = "Rac"
    } else if (birthday >= leu && birthday < fecioara) {
        zodiac = "Leu"
    } else if (birthday >= fecioara && birthday < balanta) {
        zodiac = "Fecioara"
    } else if (birthday >= balanta && birthday < scorpion) {
        zodiac = "Balanta"
    } else if (birthday >= scorpion && birthday < sagetator) {
        zodiac = "Scorpion"
    } else if (birthday >= sagetator && birthday < capricorn) {
        zodiac = "Sagetator"
    } else {
        zodiac = "Capricorn"
    }

    document.getElementById("result").innerHTML = "Zodiul dumneavoastra: " + zodiac;
}