let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");
let started = false ; // function started? no


window.onscroll = function (){
    //console.log(window.scrollY , section.offsetTop)
    if(window.scrollY >= section.offsetTop ){
        if(!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
      el.textContent++;
      if (el.textContent == goal) {
        clearInterval(count);
      }
    }, 10);
  }

//email button------------------------------------------
