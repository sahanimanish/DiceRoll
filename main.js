
const rolldice=document.getElementById('roll');
rolldice.style.display='none';
const dice=document.getElementById('dice');
const win1=document.getElementById('win1');
const start1=document.getElementById('start1');
const start2=document.getElementById('start2');
const win2=document.getElementById('win2');
const active1=document.querySelector('.active1');
const active2=document.querySelector('.active2');
const cs2=document.getElementById('cs2');
const currentscorep1=document.getElementById('cs1');
const score1=document.getElementById('score1');
const score2=document.getElementById('score2');
let player1=false;
let player2=false;
let currentscore1=0,currentscore2=0;



const players1 = function(){
  let score=Math.floor(Math.random()*6)+1;
  
  dice.innerText=score;
  currentscore1 +=score;

  if(currentscore1>20){
    currentscore1 = currentscore1 - score;
  }
  

  
  currentscorep1.innerText=currentscore1;

  if(currentscore1 === 20){
    
    player2=false;
    player1=false;
    score=0;
    currentscore1=0;
   currentscore2=0;
    win1.style.display='block';
    start1.style.display='block';
   start2.style.display='block';
   active1.style.display='block';
   active2.style.display='block';
   
   rolldice.style.display='none';
   score1.innerText=score;
   return ;


  }

  
  score1.innerText=score;


  if(score == 6){
    player1=true;
    player2=false;
    active2.style.display='none';
    active1.style.display='block';
  }
 else{
  active2.style.display='block';
  active1.style.display='none';
  player1=false;
  player2=true;

 }




};

const players2 = function(){
  
  

  let score=Math.floor(Math.random()*6)+1;

 dice.innerText=score;

 

  currentscore2 += score;

  if(currentscore2>20){
    currentscore2 = currentscore2 - score;
  }
  
  cs2.innerText=currentscore2;

  if(currentscore2 === 20){
   
    player2=false;
    player1=false;
    score=0;
    win2.style.display='block';
    start1.style.display='block';
   start2.style.display='block';
   active1.style.display='block';
   active2.style.display='block';
   currentscore1=0;
   currentscore2=0;
   rolldice.style.display='none';
   score2.innerText=score;


   return ;


  }

  if(score === 6){
    player2=true;
    player1=false;
    active2.style.display='block';
   active1.style.display='none';
   
  
  }
  else{
    active2.style.display='none';
    active1.style.display='block';
    player2=false;
    player1=true;  
  }

    score2.innerText=score;


 
};



rolldice.addEventListener('click' ,function(e){
  e.preventDefault();
  e.stopPropagation();
  if(player1){
    //console.log(player1)
    setTimeout(500, players1());
    return ;
   
  };
  if(player2){
    setTimeout(500, players2());
  }
});



start1.addEventListener('click', function(){
  player1=true;
  player2=false;
  currentscore1=0;
  currentscore2=0;
  dice.innerText=0;
  start1.style.display='none';
  start2.style.display='none';
  active2.style.display='none';
  rolldice.style.display='block';
  win1.style.display='none';
  win2.style.display='none';

  currentscorep1.innerText=currentscore1;
  cs2.innerText=currentscore2;
  score1.innerText=0;
  score2.innerText=0;
 



});
start2.addEventListener('click', function(){
  player2=true;
  player1=false;
  currentscore1=0;
  currentscore2=0;
  dice.innerText=0;
  start1.style.display='none';
  start2.style.display='none';
  active1.style.display='none';
  rolldice.style.display='block';
  win1.style.display='none';
  win2.style.display='none';
 // player1().cs2.innerText=currentscore1;
  currentscorep1.innerText=currentscore1;
cs2.innerText=currentscore2;
score1.innerText=0;
  score2.innerText=0;

});
