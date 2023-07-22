let butt = document.getElementById("click");
let title = document.getElementById("title");
let content = document.getElementById("content");



butt.onclick = function() {
    let outPut = document.createElement("div");
    let titleValue = document.createElement("h2");
    let contentValue = document.createElement("p");
    let exit = document.createElement("div");
    
    outPut.classList.add("outPut");
    titleValue.classList.add("titleValue");
    contentValue.classList.add("contentValue");
    exit.classList.add("exit")

    titleValue.textContent = title.value;
    contentValue.textContent = content.value;
    
    exit.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    outPut.append(titleValue);
    outPut.append(contentValue);
    outPut.append(exit);

    document.body.appendChild(outPut);

    exit.onclick = () => exit.parentElement.remove();
}




