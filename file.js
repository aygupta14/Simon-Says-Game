let gameseq = [];
let userseq = [];

let btn = [ 'red', 'green', 'yellow','purple'];

let started = false;
let level = 0;
let h3 = document.querySelector('h3');

document.addEventListener("keypress", function(){
   if(started == false){
      started = true;
      levelup();
   }
});

function levelup() {
    userseq =[];
    level++;
    h3.innerText = `level ${level}`;

    let random = Math.floor(Math.random() * 3);
    let colour  = btn[random];
    let randombtn = document.querySelector(`.${colour}`);
    console.log(randombtn);
    gameseq.push(colour);
    console.log(gameseq);
    btnflash(randombtn);
    
}

function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },1000);
}

function btnflashuser(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
      btn.classList.remove("userflash");
    },1000);
  }

  function resetgame() {
    userseq= [];
    gameseq = [];
  h3.innerText = `Press any key to start game`;
  }

  function check(index) {
   if( userseq[index] == gameseq[index] ){
    if(userseq.length == gameseq.length) {
        setTimeout(levelup , 1000);
    }
   }
   else {
    h3.innerText = `Game over , heighest level : ${level}`;
    document.querySelector('body').style.backgroundColor ='red';
    setTimeout(function(){
        document.querySelector('body').style.backgroundColor ='white';  
    },100);
    setTimeout(resetgame , 2000);
   }
  }

function btnpress() {
    let btnpressed = this;
    btnflashuser(btnpressed);
    usercolour = btnpressed.getAttribute("id");
   userseq.push(usercolour);
   console.log(userseq);
   check(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");

for (btns of allbtn){
  btns.addEventListener('click', btnpress)
}