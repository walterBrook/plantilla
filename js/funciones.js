function AreaT(num1,num2){

var num1= parseFloat(document.getElementById("num1").value);//obtenemos el valor del elemento en el  documento html con id num1
var num2= parseFloat(document.getElementById("num2").value);//obtenemos el valor del elemento en el documento html con id num2
var res=(num1*num2)/2;
return res;
}

function AreaR(num1,num2){

var b= parseFloat(document.getElementById("num3").value);//obtenemos el valor del elemento en el  documento html con id num1
var a= parseFloat(document.getElementById("num4").value);//obtenemos el valor del elemento en el documento html con id num2
var areaR=b*a;
return areaR;
}