const hourEl=document.getElementById("hour");
const minuteEl=document.getElementById("minutes");
const secondEl=document.getElementById("seconds");
const ampmEl=document.getElementById("ampm");

function updateClock()
{
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    /*Create logic of am pm*/
    let ampm="AM";
    if(h>12)
    {
        h=h-12;
        ampm="PM"
    }

    h=h<10?"0"+ h:h;
    m=m<10?"0"+ m:m;
    s=s<10?"0"+ s:s;

    hourEl.innerText=h;
    minuteEl.innerText=m;
    secondEl.innerText=s;
    ampmEl.innerText=ampm;

    /*Now we have to set timer for when to call this fuction*/

    /*Because we need to upfate time every seconds*/

    setTimeout(()=>{
        updateClock:void updateClock()
    },1000)  /*1000 ms*/


}

updateClock();