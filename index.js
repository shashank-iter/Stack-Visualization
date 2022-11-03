let stacksize = 0;
let count = -1;
let stackStop = 0;


function push() {
     
    //console.log(modal);
    if (stacksize < 5) {
        // modal.style.display = "block";
        $(document).ready(function(){
            // Show the Modal on load
            $("#myModal").modal("show");
            let textModal=document.getElementById("modal-text");
            textModal.textContent="Please set the stack size first.";
            // Hide the Modal
            $("#close").click(function(){
              $("#myModal").modal("hide");
            });
          });
        return;
    }
    if (count == stacksize - 1) {
        $(document).ready(function(){
            // Show the Modal on load
            $("#myModal").modal("show");
            let textModal=document.getElementById("modal-text");
            textModal.textContent="Stack Overflow, can't push elements.";
            // Hide the Modal
            $("#close").click(function(){
              $("#myModal").modal("hide");
            });
          });
        return;
        // alert("Stack Overflow, can't push");
        
    }
    count++;
    let x = document.getElementById("push-val").value;
    console.log(x);
    let y = document.getElementById(`push${count}`);

    y.innerText = `${x}`;
}


function pop() {
    if (stacksize < 5) {
        $(document).ready(function(){
            // Show the Modal on load
            $("#myModal").modal("show");
            let textModal=document.getElementById("modal-text");
            textModal.textContent="Please set size of the Stack.";
            // Hide the Modal
            $("#close").click(function(){
              $("#myModal").modal("hide");
            });
          });
        return;
       // alert("Please set size of the Stack.");
        //return;
    }
    let a = document.getElementById(`push${count}`);
    if (count < 0) {
        $(document).ready(function(){
            // Show the Modal on load
            $("#myModal").modal("show");
            let textModal=document.getElementById("modal-text");
            textModal.textContent="Stack Underflow: Stack is Empty, cannot POP any element.";
            // Hide the Modal
            $("#close").click(function(){
              $("#myModal").modal("hide");
            });
          });
        return;
        // alert("Stack Underflow: Stack is Empty, cannot POP any element.");
        
    }
    count--;

    a.textContent="Empty";
}


function setStackSize() {
    stackStop++;
    if (stackStop > 0) {
        let y = document.getElementById("tab");
        y.innerHTML = "";
    }
    let a = document.getElementById("stacksize").value;
    stacksize = a;
    let y = document.getElementById("tab");
    for (let i = 0; i < stacksize; i++) {
        y.innerHTML = `<tr><td id="push${i}">Empty</td></tr>` + y.innerHTML;
    }
}


function reset() {
    window.location.reload();
}
