let stacksize = 0;
let count = -1;
let stackStop = 0;
window.onload=instruct();

function push() {
  //console.log(modal);
  if (stacksize < 5) {
    // modal.style.display = "block";
    $(document).ready(function () {
      // Show the Modal on load
      $("#myModal").modal("show");
      let x = document.getElementById("title")
      x.innerHTML = `Attention!`;
      let textModal = document.getElementById("modal-text");
      textModal.textContent = "Please set the stack size first.";
      // Hide the Modal
      $("#close").click(function () {
        $("#myModal").modal("hide");
      });
    });
    return;
  }
  if (count == stacksize - 1) {
    $(document).ready(function () {
      // Show the Modal on load
      $("#myModal").modal("show");
      let x = document.getElementById("title")
      x.innerHTML = `Attention!`;
      let textModal = document.getElementById("modal-text");
      textModal.textContent = "Stack Overflow, can't push elements.";
      // Hide the Modal
      $("#close").click(function () {
        $("#myModal").modal("hide");
      });
    });
    return;
    // alert("Stack Overflow, can't push");
  }
  $(document).ready(function () {
    // Show the Modal on load
    $("#myModal").modal("show");
    let x = document.getElementById("title")
    x.innerHTML = `Element Pushed In`;
    let textModal = document.getElementById("modal-text");
    textModal.innerHTML = `Element pushed in index ${count}`;
    // Hide the Modal
    $("#close").click(function () {
      $("#myModal").modal("hide");
    });
  });
  count++;
  let x = document.getElementById("push-val").value;
  console.log(x);
  let y = document.getElementById(`push${count}`);

  y.innerText = `${x}`;
}

function pop() {
  if (stacksize < 5) {
    $(document).ready(function () {
      // Show the Modal on load
      $("#myModal").modal("show");
      let x = document.getElementById("title")
      x.innerHTML = `Attention!`;
      let textModal = document.getElementById("modal-text");
      textModal.textContent = "Please set size of the Stack.";
      // Hide the Modal
      $("#close").click(function () {
        $("#myModal").modal("hide");
      });
    });
    return;
    // alert("Please set size of the Stack.");
    //return;
  }
  let a = document.getElementById(`push${count}`);
  if (count < 0) {
    $(document).ready(function () {
      // Show the Modal on load
      $("#myModal").modal("show");
      let x = document.getElementById("title")
    x.innerHTML = `Attention!`;
      let textModal = document.getElementById("modal-text");
      textModal.textContent =
        "Stack Underflow: Stack is Empty, cannot POP any element.";
      // Hide the Modal
      $("#close").click(function () {
        $("#myModal").modal("hide");
      });
    });
    return;
    // alert("Stack Underflow: Stack is Empty, cannot POP any element.");
  }
  $(document).ready(function () {
    // Show the Modal on load
    $("#myModal").modal("show");
    let x = document.getElementById("title")
    x.innerHTML = `Element Popped Out `;
    let textModal = document.getElementById("modal-text");
    textModal.innerHTML = `Element removed from index ${count + 1}`;
    // Hide the Modal
    $("#close").click(function () {
      $("#myModal").modal("hide");
    });
  });

  count--;

  a.textContent = "Empty";
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
  count = -1;
  stacksize = 0;
  stackStop = -1;
  let y = document.getElementById("tab");
  y.innerHTML = "";
}

function instruct() {
 
 
    // Show the Modal on load
    $("#myModal").modal("show");
    let x = document.getElementById("title")
    x.innerHTML = `<img src="lightbulb-solid.svg">Instructions`;
    let textModal = document.getElementById("modal-text");
    textModal.innerHTML = `<ol><li>First set the size of the stack. You can set any size but don't go for big values as it will make the visualization look messy. </li> <li>Enter the element you want to push into the stack in the input box present next to PUSH button. Use PUSH button to push the elements into the stack. </li> <li>Use POP button to POP out elements from the stack.</li><li>Use RESET button to reset the visualization.</li></ol>`;
    // Hide the Modal
    $("#close").click(function () {
      $("#myModal").modal("hide");
    });
 
}
 