function first()
{
    var a = document.getElementById("1a").value;
    var b = document.getElementById("1b").value;
    var c = document.getElementById("1c").value;

    var D = b*b - 4*a*c;

    var x1 = (-b - Math.sqrt(D))/(2*a);
    var x2 = (-b + Math.sqrt(D))/(2*a);

    document.getElementById("1p").innerHTML = "x<sub>1</sub> = " + x1 + "<br>x<sub>2</sub> = " + x2;
}

function second()
{
    var n = document.getElementById("2n").value;
    var sum = 0;

    for(var i = 2; i <= n*2; i++)
    {
        if(i%2 == 0)
        {
            sum += +i;
        }
    }

    document.getElementById("2p").innerHTML = "Suma primelor " + n + " numere pare este " + sum;
}