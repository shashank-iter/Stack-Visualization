let stacksize=0;
let count = -1;

function push(){
    count++;
    if (stacksize<5){
        alert("Please set size of the Stack.")
        return;
    }
    if (count>stacksize){
        alert("Stack Overflow, can't push")
        return;
    }
let x = document.getElementById("push-val").value;
console.log(x);
let y = document.getElementById("tab");
y.innerHTML=`<tr><td id="push${count}">${x}</td></tr>`+y.innerHTML;
}
 function pop(){
    if (stacksize<5){
        alert("Please set size of the Stack.")
        return;
    }
    let a = document.getElementById(`push${count}`);
    if (count<0){
        alert("Stack Underflow: Stack is Empty, cannot POP any element.")
        return;
    }
    count--;
    
    a.remove();
 }
 function setStackSize(){
    let a = document.getElementById("stacksize").value
    stacksize=a;
 }
 function reset(){
    window.location.reload();
 }