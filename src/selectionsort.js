const container = document.querySelector(".data-container");

function generatebars(num=20){
    for(let i=0; i<num; i+=1){
        const value = Math.floor(Math.random()*100) + 1;

        const bar = document.createElement("div");

        bar.classList.add("bar");

        bar.style.height = "${ value*3 }px";

        bar.style.transform = "translateX(${i*30}px)";

        const barlabel = document.createElement("label");

        barlabel.classList.add("bar_id");

        barlabel.innerHTML = value;

        bar.appendChild(barlabel);

        container.appendChild(bar);
    }
}