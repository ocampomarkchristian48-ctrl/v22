let playerName="";

let topicsDone={
probability:false,
grouptheory:false,
predicate:false,
counting:false
};

let totalScore=0;
let totalQuestions=0;

let currentQuestions=[];
let currentIndex=0;
let score=0;
let currentTopic="";

function shuffle(arr){
return arr.sort(()=>Math.random()-0.5);
}

function startGame(){
playerName=document.getElementById("playerName").value;

if(playerName===""){
alert("Enter name first!");
return;
}

document.getElementById("startScreen").classList.add("hidden");
document.getElementById("descScreen").classList.remove("hidden");
}

function showTopics(){
document.getElementById("descScreen").classList.add("hidden");
document.getElementById("topicScreen").classList.remove("hidden");
}

function startQuiz(topic){
currentTopic=topic;

currentQuestions=shuffle(allQuestions[topic]).slice(0,5);
currentIndex=0;
score=0;

document.getElementById("topicScreen").classList.add("hidden");
document.getElementById("quizScreen").classList.remove("hidden");

showQuestion();
}

function showQuestion(){
let q=currentQuestions[currentIndex];
document.getElementById("question").innerText=q.q;

let answersDiv=document.getElementById("answers");
answersDiv.innerHTML="";

q.a.forEach((ans,i)=>{
let btn=document.createElement("button");
btn.innerText=ans;
btn.className="answerBtn";
btn.onclick=()=>checkAnswer(i);
answersDiv.appendChild(btn);
});
}

function checkAnswer(i){
if(i===currentQuestions[currentIndex].c){
score++;
}

currentIndex++;

if(currentIndex<5){
showQuestion();
}else{
finishTopic();
}
}

function finishTopic(){
topicsDone[currentTopic]=true;

totalScore+=score;
totalQuestions+=5;

alert(currentTopic+" Score: "+score+"/5");

document.getElementById("quizScreen").classList.add("hidden");
document.getElementById("topicScreen").classList.remove("hidden");

if(Object.values(topicsDone).every(v=>v)){
showResult();
}
}

function showResult(){
let percent=Math.round((totalScore/totalQuestions)*100);

document.getElementById("topicScreen").classList.add("hidden");
document.getElementById("resultScreen").classList.remove("hidden");

document.getElementById("resultText").innerText=
playerName+" Score: "+percent+"%";

if(percent>=70){
document.getElementById("resultTitle").innerText="PASSED!";
document.getElementById("continueBtn").classList.remove("hidden");
}else{
document.getElementById("resultTitle").innerText="FAILED";
document.getElementById("retryBtn").classList.remove("hidden");
}
}

function retryGame(){
location.reload();
}

// QUESTIONS (20 EACH)
let allQuestions={
probability:[
{q:"Coin head?",a:["1/2","1/3","1"],c:0},
{q:"Dice even?",a:["1/2","1/3","1"],c:0},
{q:"Red ball?",a:["1/2","1/3","1"],c:0},
{q:"Tail?",a:["1/2","1/3","1"],c:0},
{q:"King?",a:["1/13","1/52","1"],c:0},
{q:"Prime dice?",a:["1/2","1/3","1"],c:0},
{q:"Odd?",a:["1/2","1/3","1"],c:0},
{q:"Black card?",a:["1/2","1/3","1"],c:0},
{q:"Heart?",a:["1/4","1/2","1"],c:0},
{q:"Spade?",a:["1/4","1/2","1"],c:0},
{q:"❤ dice?",a:["1/3","1/2","1"],c:0},
{q:">4 dice?",a:["1/3","1/2","1"],c:0},
{q:"Ace?",a:["1/13","1/52","1"],c:0},
{q:"Face?",a:["3/13","1/13","1"],c:0},
{q:"Red card?",a:["1/2","1/4","1"],c:0},
{q:"Black?",a:["1/2","1/4","1"],c:0},
{q:"2 heads?",a:["1/4","1/2","1"],c:0},
{q:"1 head?",a:["1/2","1/4","1"],c:0},
{q:"All heads?",a:["1/8","1/2","1"],c:0},
{q:"At least 1?",a:["3/4","1/2","1"],c:0}
],

grouptheory:[
{q:"Closure?",a:["In set","Out","None"],c:0},
{q:"Identity?",a:["Same","Change","None"],c:0},
{q:"Inverse?",a:["Undo","Add","None"],c:0},
{q:"Assoc?",a:["Yes","No","None"],c:0},
{q:"Group?",a:["All","One","None"],c:0},
{q:"Z+?",a:["Group","No","None"],c:0},
{q:"0?",a:["Identity","No","None"],c:0},
{q:"1?",a:["Identity","No","None"],c:0},
{q:"Inverse 5?",a:["-5","5","None"],c:0},
{q:"Comm?",a:["Yes","No","None"],c:0},
{q:"Set?",a:["Collection","One","None"],c:0},
{q:"Op?",a:["Rule","No","None"],c:0},
{q:"Finite?",a:["Limited","No","None"],c:0},
{q:"Infinite?",a:["Unlimited","No","None"],c:0},
{q:"Binary?",a:["2","1","None"],c:0},
{q:"Closure test?",a:["Inside","Out","None"],c:0},
{q:"Assoc ex?",a:["(a+b)+c","No","None"],c:0},
{q:"Identity ex?",a:["0","1","None"],c:0},
{q:"Inverse ex?",a:["-a","a","None"],c:0},
{q:"Group ex?",a:["Z","A","None"],c:0}
],

predicate:[
{q:"Predicate?",a:["Var","No","None"],c:0},
{q:"∀?",a:["All","Exist","None"],c:0},
{q:"∃?",a:["Exist","All","None"],c:0},
{q:"Truth?",a:["Value","No","None"],c:0},
{q:"Var?",a:["Symbol","No","None"],c:0},
{q:"Domain?",a:["Set","No","None"],c:0},
{q:"Open?",a:["Has var","No","None"],c:0},
{q:"Closed?",a:["No var","Yes","None"],c:0},
{q:"Neg?",a:["Opp","No","None"],c:0},
{q:"AND?",a:["Both","No","None"],c:0},
{q:"OR?",a:["One","No","None"],c:0},
{q:"Imp?",a:["If","No","None"],c:0},
{q:"Bi?",a:["Iff","No","None"],c:0},
{q:"Quant?",a:["∀∃","No","None"],c:0},
{q:"Table?",a:["Yes","No","None"],c:0},
{q:"Eq?",a:["Same","No","None"],c:0},
{q:"Tauto?",a:["True","No","None"],c:0},
{q:"Contra?",a:["False","No","None"],c:0},
{q:"Cont?",a:["Depends","No","None"],c:0},
{q:"Logic?",a:["Study","No","None"],c:0}
],

counting:[
{q:"3!?",a:["6","3","1"],c:0},
{q:"5!?",a:["120","60","1"],c:0},
{q:"Perm?",a:["Order","No","None"],c:0},
{q:"Comb?",a:["No order","Yes","None"],c:0},
{q:"nCr?",a:["n!/(r!(n-r)!)","No","None"],c:0},
{q:"nPr?",a:["n!/(n-r)!","No","None"],c:0},
{q:"2!?",a:["2","1","None"],c:0},
{q:"4!?",a:["24","12","None"],c:0},
{q:"Rule?",a:["Multiply","No","None"],c:0},
{q:"Tree?",a:["Visual","No","None"],c:0},
{q:"Sample?",a:["All","One","None"],c:0},
{q:"Arrange?",a:["Order","No","None"],c:0},
{q:"Select?",a:["Choose","No","None"],c:0},
{q:"6C2?",a:["15","12","None"],c:0},
{q:"5P2?",a:["20","10","None"],c:0},
{q:"3C1?",a:["3","1","None"],c:0},
{q:"3P1?",a:["3","1","None"],c:0},
{q:"1!?",a:["1","0","None"],c:0},
{q:"Counting?",a:["Ways","No","None"],c:0},
{q:"Factorial?",a:["Multiply","No","None"],c:0}
]
};
