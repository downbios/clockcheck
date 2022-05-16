function realdate()
{
    var data= new Date();
var dia=data.getDate();
var dia_sem=data.getDay();
var mes=(data.getMonth()+ 1);
var ano4=data.getFullYear();
document.getElementById('realdate').innerHTML=dia_sem+"-"+dia+"/"+"/"+ano4;
}

/* Real Time Function*/
function time()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
document.getElementById('realtime').innerHTML=h+":"+m+":"+s;
setTimeout('time()',500);
}
document.onload = time();