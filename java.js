

var timeup=false


var mole=document.querySelectorAll('.mole');
function peek()
{

    var randomtime= Math.floor(Math.random() *  1100)

    var randomindex=Math.floor(Math.random() * 8)




mole[randomindex].classList.add('up');



setTimeout(() => {
            

    mole[randomindex].classList.remove('up')   
    if(!timeup) {peek();}

}, randomtime);

  
}

var score1=document.querySelector('.score')
var score=0;
function startgame()
{

    score=0

    timeup=false
peek()

setTimeout(() => {
    
    timeup=true
}, 10000);


}
console.log(score1)


function hit(e)
{
    console.log(e)
    score++;
     score1.textContent=score
}

mole.forEach(mole=>mole.addEventListener("click", hit ))



       
       

    
    
    
