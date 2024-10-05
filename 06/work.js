if (!localStorage.getItem('scores')) {
    localStorage.setItem('scores', JSON.stringify({ win: 0, loss: 0, draw: 0 }));
}

let storedScores = localStorage.getItem('scores');
let scores;

try {
    console.log(typeof(storedScores));
    console.log(storedScores);
    // if()
    scores = JSON.parse(storedScores);
    console.log(scores);
} catch (e) {
    console.error("Error parsing scores from local storage:", e);
    scores = { win: 0, loss: 0, draw: 0 }; // Default fallback
}
let score={
    win:0,
    loss:0,
    draw:0
};

function onmouse(){
    alert("Reset function called!"); // This will pop up an alert when the function is called
    console.log("hello");
    score.win=0;
    score.loss=0;
    score.draw=0;
    var wi = document.querySelector(".win");
    var lo = document.querySelector(".loss");
    var dr = document.querySelector(".draw");
    wi.textContent = score.win;
    console.log(wi);
    lo.textContent = score.loss;
    dr.textContent = score.draw;
    scores=score;
    console.log(scores);
    localStorage.setItem('scores',JSON.stringify(scores));
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var totalwins=0;
var userinputval;
var win=0,loss=0,draw=0;
var computerinputval;
function Click(event){
   
   userinputval=event.target.textContent.toLowerCase();
  
      if(event.target.textContent=='Rock'){
         var rock=document.getElementById("rock");
      
         var h1=document.createElement("h1");
          h1.textContent=rock.textContent;
       
           var ui=document.querySelector(".userinput");
           ui.textContent=h1.textContent;
           console.log(ui);
      }
      else if(event.target.textContent=='Paper'){
       var paper=document.getElementById("paper");
       var h1=document.getElementById("paper");
       h1.textContent=paper.textContent;
       var ui=document.querySelector(".userinput");
       ui.textContent=h1.textContent;
      }
      else {
       var scissor=document.getElementById("scissor");
       var h1=document.getElementById("scissor");
       h1.textContent=scissor.textContent;
       var ui=document.querySelector(".userinput");
       ui.textContent=h1.textContent;
      }
      computerfunction();
      console.log(userinputval);
      console.log(computerinputval);
      

      if(userinputval==computerinputval){
           score.draw+=1;
      }
      else if(userinputval=='rock' && computerinputval=='scissor'){
         score.win+=1;
      }
      else if(userinputval=='scissor' && computerinputval=='rock'){
        score.loss+=1;
      }
      else if(userinputval=='rock' && computerinputval=='paper'){
        score.loss+=1;
      }
      else if(userinputval=='paper' && computerinputval=='rock'){
        score.win+=1;
      }
      else if(userinputval=='paper' && computerinputval=='scissor'){
          score.loss+=1;
      }
      else if(userinputval=='scissor' && computerinputval=='paper'){
        score.win+=1;
      }

      
       localStorage.setItem('scores',JSON.stringify(score));

      var wi=document.querySelector(".win");
      var lo=document.querySelector(".loss");
      var dr=document.querySelector(".draw");

      wi.textContent=score.win;
      console.log(wi.textContent);
      lo.textContent=score.loss;
      dr.textContent=score.draw;
      console.log(lo.textContent);
      console.log(dr.textContent);

}


function computerfunction(){
   var val = getRandomInt(1, 4); 
   var computer;
   console.log(val);
   if(val==1){
       computer=document.getElementById("rock");
       var h1=document.getElementById("rock");
       h1.textContent=computer.textContent;
       var ui=document.querySelector(".computerinput");
       ui.textContent=h1.textContent; 
       computerinputval='rock';
   }
   else if(val==2){
       var paper=document.getElementById("paper");
       var h1=document.getElementById("paper");
       h1.textContent=paper.textContent;
       var ui=document.querySelector(".computerinput");
       ui.textContent=h1.textContent;
       computerinputval='paper';
   }
   else{
       var scissor=document.getElementById("scissor");
       var h1=document.getElementById("scissor");
       h1.textContent=scissor.textContent;
       var ui=document.querySelector(".computerinput");
       ui.textContent=h1.textContent;
       computerinputval='scissor';
   }
   
}

 window.onload= function(){
    console.log("hello");
    console.log(scores);
    score=scores;

    console.log("kishor");

    console.log(typeof(score));
    var win=document.querySelector(".win");
    var loss=document.querySelector(".loss");
    var draw=document.querySelector(".draw");
    draw.textContent=score.draw;
    loss.textContent=score.loss;
    win.textContent=score.win;
    console.log(score.win);
    console.log("hello");
    console.log(win);
 }


