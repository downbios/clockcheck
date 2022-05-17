/* Real Time Function*/
function time()
{
var realdate = new Date();
document.getElementById('realtime').innerHTML= realdate.toUTCString();
setTimeout('time()',500);
}
window.onload = time();