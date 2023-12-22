function Largestnumber(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var btn = (Math.max(num1, num2, num3))

    document.getElementById("p1").innerHTML = "The largest number is: " +btn;


}