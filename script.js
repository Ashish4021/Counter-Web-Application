let counter = 0;

let count = document.getElementById("count");

let increaseBtn = document.getElementById("increase");

let decreaseBtn = document.getElementById("decrease");

let resetBtn = document.getElementById("reset");


increaseBtn.addEventListener("click",
    function(){
        counter++;
        count.textContent=counter;
    }
);

decreaseBtn.addEventListener("click",
    function(){
        if(counter > 0){
            counter--;
            count.textContent=counter;
        }
      
    }
);

resetBtn.addEventListener("click",
    function(){
        counter = 0;
        count.textContent=counter;
    }
)



