function first()
{
    var a = 5;
    var b = 10;
    if ((a % 2 == 0) && (b % 2 == 0) || (a % 2 == 1) && (b % 2 == 1))
    {
        document.getElementById("1text").innerHTML = "Expresia este falsa";
    }
    else
    {
        document.getElementById("1text").innerHTML = "Expresia este adevarata";
    }
}

function second()
{
    var x = prompt("Variabila x: ", "x");
    var y = prompt("Variabila y: ", "y");
    
    if(parseInt(x) + 1 == parseInt(y))
    {
        document.getElementById("2text").innerHTML = "Cifrele " + x + " si " + y + " sunt consecutive";
    }
    else
    {
        document.getElementById("2text").innerHTML = "Cifrele " + x + " si " + y + " nu sunt consecutive";
    }
}

function third()
{
    var a = document.getElementById("3varA").value;
    var b = document.getElementById("3varB").value;
    var c = document.getElementById("3varC").value;

    document.getElementById("3varA").value = c;
    document.getElementById("3varB").value = a;
    document.getElementById("3varC").value = b;
}

function fourth()
{
    var n = prompt("Numarul de numere naturale:", "4");
    var sum = +0;
    
    for (let i = 0; i < +n+1; i++)
    {
        sum += +i*2;
    }

    document.getElementById("4text").innerHTML = "Suma a primelor " + n + " numere naturale este " + sum;
}

function fifth()
{
    var a = document.getElementById("5sideA").value;
    var b = document.getElementById("5sideB").value;
    var c = document.getElementById("5sideC").value;

    var isValid = false;
    var p;
    var aria;
    var type = "scalen";

    if(+a + +b > +c || +a + +c > +b || +b + +c > +a)
    {
        p = +a + +b + +c;
        var sP = p/2;
        var aria = Math.sqrt(sP * (sP-a) * (sP-b) * (sP-c));

        if(a == b && b == c && a == c)
        {
            type = "echilateral";
        }
        else if(a == b || b == c || a == c)
        {
            type = "isoscel";
        }
        else if(a*a + b*b == c*c || a*a + c*c == b*b || c*c + b*b == a*a)
        {
            type = "dreptunghic";
        }

        document.getElementById("5text").innerHTML = "Perimetrul acestui triunghi " + type + " este: " + p + ", iar aria: " + aria;
    }
    else
    {
        document.getElementById("5text").innerHTML = "Triunghiul nu este valid.";
    }
}

function seventh()
{
    var number = document.getElementById("6nr").value;

    alert(number.slice(-1));
}

function eighth()
{
    var n = prompt("Numarul n:", n);
    var sum = +0;

    if(-n < 0)
    {
        for(var i=-n; i < +1; i++)
        {
            sum += +i;
        }
        alert(sum/n);
    }
    else
    {
        alert(n + " este mai mic ca zero");
    }
    
}

function ninth()
{
    arr = [];
    arr[0] = (document.getElementById("9nrA").value);
    arr[1] = (document.getElementById("9nrB").value);
    arr[2] = (document.getElementById("9nrC").value);

    arr.sort();
    arr.reverse();

    document.getElementById("9nrA").value = arr[0];
    document.getElementById("9nrB").value = arr[1];
    document.getElementById("9nrC").value = arr[2];

}

function tenth()
{
    var a = document.getElementById("10nrA").value;
    var b = document.getElementById("10nrB").value;
    var counter = 0;

    if(a > b)
    {
        var aux = a;
        a = b;
        b = aux;
    }

    for(; a <= b; a++)
    {
        if(a % 3 == 0)
        {
            counter++;
        }
    }

    document.getElementById("10p").innerHTML = counter + " de numere sunt divizibile cu 3 pe acest interval";
}

function eleventh()
{
    var a = document.getElementById("11a").value;
    var b = document.getElementById("11b").value;

    var Aria = a * b;
    var Perimetrul = 2 * a + 2 * b;
    var Diagonala = Math.sqrt(a*a + b*b);

    document.getElementById("11p").innerHTML = "Aria: " + Aria + ", perimetrul: " + Perimetrul + ", diagonala: " + Diagonala;
}

function twelfth()
{
    var a = document.getElementById("12a").value;

    a = Math.abs(a);

    document.getElementById("12p").innerHTML = "Modulul numarului este: " + a;
}

function thirteenth()
{
    year = document.getElementById("13year").value;
    var isLeap = false;
    
    if (year % 4 == 0)
        isLeap = true;

    if (year % 100 == 0)
        isLeap = false;

    if (year % 400 == 0)
        isLeap = true;
    
    if(isLeap)
    {
        document.getElementById("13p").innerHTML = "Anul " + year + " este an bisect";
    }
    else
    {
        document.getElementById("13p").innerHTML = "Anul " + year + " nu este an bisect";
    }
}

function fourteenth()
{
    var n = document.getElementById("14a").value;
    var sum = 0;

    for(var i = 0; i <= n; i++)
    {
        if(i % 2 == 1)
        {
            sum += i;
        }
    }

    document.getElementById("14p").innerHTML = sum;
}

function fifteenth()
{
    var n = document.getElementById("15a").value;

    if(n.length == 2)
    {
        document.getElementById("15p").innerHTML = "Da";
    }
    else
    {
        document.getElementById("15p").innerHTML = "Nu";
    }
}