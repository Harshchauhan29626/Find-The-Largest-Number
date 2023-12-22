function oddeven(){

    var num1 = document.getElementById("num1").value;
    var btn = document.getElementById("btn");

    if (num1 % 2 ==0){
        document.getElementById("p1").innerHTML = + num1+ "is even"
    }else{
        document.getElementById("p1").innerHTML = + num1 + "is odd"
    }
}