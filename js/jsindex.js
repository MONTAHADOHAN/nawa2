
let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");
let started = false ; // function started? no


window.onscroll = function (){
    //console.log(window.scrollY , section.offsetTop)
    if(window.scrollY >= section.offsetTop - 500){
        
        if(!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        let n = Number(el.innerText);
        n++;
        el.innerText = n;
        console.log(el.textcontent, n)
        if(n == goal){
            clearInterval(count)
        }
    }, 2000 / goal);
}


//email button------------------------------------------
