// call The Element 
let task = document.querySelector(".container .tasks")
let submit = document.querySelector(".add")
let input = document.querySelector(".input")
let pop = document.querySelector(".pop")
let close = document.querySelector(".close")
let Submit = document.querySelector(".submit")
let Submited = document.querySelector(".submited")
let nameTxt =document.querySelector(".nameTxt")
let username =document.querySelector(".username")
function notExist() {
    window.addEventListener("load", function () {
    setTimeout(function () {
        pop.style.display ="flex"
},
1000)
})
    close.addEventListener('click', function () {
        if (Submit.value == "") {
            alert("Enter Your Name")
        } else {
            setTimeout(function () {
                nameTxt.innerHTML=` Welcome to ToDoList Created by Mohamed Massoud`
                Submit.style.display = "none"
                Submited.style.display = "none"
                
            }, 1000)
            pop.style.display = "none";
        }
    })
    Submited.addEventListener("click", function () {
        if (Submit.value == "") {
            alert("Enter Your Name")
        } else {
            setTimeout(function () {
                nameTxt.innerHTML=` Welcome "${Submit.value}" this ToDoList Created by Mohamed Massoud`
                Submit.style.display = "none"
                Submited.style.display = "none"
                
            }, 500)
            addnameToLocalStorage(Submit.value);
            
        }
    })
    
}
function showPop() {
if (window.localStorage.getItem("tasks") == "[]") {
    notExist();
}
// else {
//     console.log("exist")
// }

}
showPop();





let arrayTasks = [];
if (window.localStorage.getItem("tasks")) {
    arrayTasks = JSON.parse(localStorage.getItem("tasks"));
}
getDataFromLocalStorge();;


//prgress
submit.onclick = function () {
    if (input.value !== "") {
        addTaskToArray(input.value);
        input.value = "";
    }
}
task.addEventListener("click", (e) => {
    if (e.target.classList.contains("undone")) {
        deletElementFromLocalStorage(e.target.parentElement.getAttribute("data-id"))
        e.target.parentElement.remove()
    }
    if (e.target.classList.contains("right")) {
        myTaskDone(e.target.parentElement.getAttribute("data-id"));
        e.target.style.color = "green"
        e.target.parentElement.className = "Done"
    }
})
function addTaskToArray(taskText) {
    let d = new Date();
    const task = {
        id: Date.now(),
        titlt: taskText,
        completed: false,
        idTwo: d.getSeconds()
    };
    arrayTasks.push(task)
    addElementToPage(arrayTasks);
    addDataToLocalStorage(arrayTasks);
    if (arrayTasks.length > 2) {
        let btn = document.createElement("button")
        task.appendChild(btn)
    }
}
            let t = document.createElement('i');
            t.className = "fa-solid fa-trash trash";
function addElementToPage(arrayTasks) {
    task.innerHTML = "";
    arrayTasks.forEach(element => {
        let div = document.createElement("div");
        div.className = "task";
        div.setAttribute("data-id",element.id)
        let txt = document.createElement("div");
        txt.className = "txt";
        txt.setAttribute("data-id",element.idTwo)
        if (element.completed) {
            txt.className = "Done";
        }
        txt.appendChild(document.createTextNode(element.titlt));
        let i = document.createElement("i")
        i.className = " fa-solid fa-trash undone";
        let iTwo = document.createElement("i")
        iTwo.className = "fa-regular fa-circle-check right";
        txt.appendChild(iTwo);
        div.appendChild(txt);
        div.appendChild(i)
        task.appendChild(div)
    });
}
function addDataToLocalStorage(data) {
    let d = JSON.stringify(data);
    console.log(d);
    window.localStorage.setItem("tasks", d)
}
function addnameToLocalStorage(data) {
    window.localStorage.setItem("UserName", data)
}
function getDataFromLocalStorge() {
    let data = window.localStorage.getItem("tasks");
    if (data) {
        let tasks = JSON.parse(data)
        addElementToPage(tasks);
    }
}
function deletElementFromLocalStorage(ele) {
    arrayTasks = arrayTasks.filter((e) => e.id != ele);
    addDataToLocalStorage(arrayTasks)
}
function myTaskDone(task) {
    for (let i = 0; i < arrayTasks.length; i++){
        if (arrayTasks[i].idTwo == task) {
            arrayTasks[i].completed == false ? (arrayTasks[i].completed = true) : (arrayTasks[i].completed = false);
        }
    }
    addDataToLocalStorage(arrayTasks);
}


// pop.className = "pop"
//     let popContent = document.createElement("div")
//     popContent.className="pop-content"
//     let i = document.createElement("i")
//     i.className = "fa-solid fa-xmark"
//     popContent.appendChild(i)
//     let text = document.createElement("input")
//     text.setAttribute("type","text")
//     text.setAttribute("placeholder", "Please Enter Your Name")
//     popContent.appendChild(text)
//     let txt = document.createElement("div")
//     txt.className = "txt"
//     popContent.appendChild(txt)
//     let btn = document.createElement("button")
//     let node = document.createTextNode("Submit")
//     btn.appendChild(node);
//     popContent.appendChild(btn)
//     pop.appendChild(popContent);
// function toCreatPop() {
//     document.body.appendChild(pop)
// }

// toCreatPop();
// window.onload = function () {
//     toCreatPop();
// }