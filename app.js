
 function display(val) {
    document.getElementById("result").value += val
}

function tooltip()
{
    document.getElementById("tooltip").style.display="block"
    setInterval(()=>
    {
        document.getElementById("tooltip").style.display="none"
    },3000)
}


function solve() {
    let x = document.getElementById("result").value
    let y = math.evaluate(x)
    document.getElementById("result").value = y
}


function clr() {
    document.getElementById("result").value = ""
}
function clrOne() {
    let val=document.getElementById("result").value;  
   val=math.floor(val/10);
    document.getElementById("result").value=val;
}