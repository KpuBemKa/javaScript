function first()
{
    arr = [];
    arr[0] = document.getElementById("1varA").value;
    arr[1] = document.getElementById("1varB").value;
    arr[2] = document.getElementById("1varC").value;

    var max = arr[0];
    arr.forEach(n => {
        if(+n > max)
            max = n;
    });

    var min = max;
    arr.forEach(n => {
        if(+n < min)
            min = n;
    });

    var sum = 0;
    arr.forEach(n => {
        sum += +n;
    });

    var media = sum/3;

    document.getElementById("1p").innerHTML = "Suma: " + sum + ", media: " + media + ", minimal: " + min + ", maximal: " + max;
}

function second()
{
    var a = document.getElementById("2varA").value;
    var b = document.getElementById("2varB").value;
    var isMultiple = false

    if(+a % +b == 0 && +a >= +b)
    {   
        isMultiple = true;
    }

    if(isMultiple)
    {
        document.getElementById("2p").innerHTML = a + " este multiplul lui " + b;
    }
    else
    {
        document.getElementById("2p").innerHTML = a + " nu este multiplul lui " + b;
    }
}

function third()
{
    var i = 0;
    var j = 0;
    var arr = new Array(10);
    var index = "00";

    for(var i = 0; i < arr.length; i++)
    {
        arr[i] = new Array(3);
    }

    for(var i = +0; i < +10; i++)
    {
        arr[i][0] = i+1;
        arr[i][1] = (i+1)*(i+1);
        arr[i][2] = (i+1)*(i+1)*(i+1);
    }

    for(var i = 0; i < 10; i++)
    {
        for(var j = 0; j < 3; j++)
        {
            index = i.toString() + j.toString();
            document.getElementById(index).innerHTML = arr[i][j];
        }
    }
}

function fourth()
{
    var number = document.getElementById("4nr").value;
    var arr = [];
    
    for(var i = 0; i < number.length; i++)
    {
        arr.push(number[i]);
    }

    for(var i = 0; i < arr.length; i++)
    {
        var aux = +arr[i] + +7;
        aux = aux.toString().slice(-1);
        arr[i] = aux;
    }

    var aux = arr[0];
    arr[0] = arr[2];
    arr[2] = aux;
    aux = arr[1];
    arr[1] = arr[3];
    arr[3] = aux;

    number = "";
    arr.forEach(element => {
        number += element;
    });

    document.getElementById("4p").innerHTML = "Numarul criptat este " + number;
}

function fifth()
{
    document.getElementById("5p").innerHTML = "Suma numerelor impare de la 1 la 15 este 64";
}

function sixth()
{
    var produsID = document.getElementById("6pID").value;
    var nrOfProdus = document.getElementById("6nr").value;
    var price = 0;

    switch(+produsID)
    {
        case 1:
            price = nrOfProdus * 2.98;
            break;
        case 2:
            price = nrOfProdus * 4.5;
            break;
        case 3:
            price = nrOfProdus * 9.98;
            break;
        case 4:
            price = nrOfProdus * 4.49;
            break;
        case 5:
            price = nrOfProdus * 6.87;
            break;
        default:
            price = 0;
            break;
    }

    document.getElementById("6p").innerHTML = "Suma totala este " + price;
}

function seventh()
{
    var y1 = document.getElementById("7y1").value;
    var y2 = document.getElementById("7y2").value;
    var x1 = document.getElementById("7x1").value;
    var x2 = document.getElementById("7x2").value;
    
    var dX = Math.abs(+x1 - +x2);
    var dY = Math.abs(+y1 - +y2);

    var distance = Math.sqrt(dX*dX + dY*dY);

    document.getElementById("7p").innerHTML = "Distanta intre puncte este " + distance;
}

function eighth()
{
    var base = document.getElementById("8base").value;
    var exponent = document.getElementById("8exponent").value;
    var result = base;

    for(var i = 0; i < exponent-1; i++)
    {
        result = result * base;
    }

    document.getElementById("8p").innerHTML = base + " la puterea " + exponent + " este " + result;
}

function hasDuplicate(array, number)
{
    for(var i = 0; i < array.length; i++)
    {
        if(array[i] == number)
        {
            return true;
        }
    }

    return false;
}

function ninth()
{
    var arr = [];
    var number;
    var isRepeated = false;

    for(var i = 0; i < 5; i++)
    {
        number = prompt("Numarul nr. " + (Number(i) + 1).toString(), "n");
        
        if(!hasDuplicate(arr, number))
        {
            arr.push(number);
        }
    }

    document.getElementById("9p").innerHTML = "Tabloul generat: " + arr;
}