const playButton = document.getElementsByClassName("play")[0]
const lapButton = document.getElementsByClassName("lap")[0]
const resetButton = document.getElementsByClassName("reset")[0]
const minute = document.getElementsByClassName("min")[0]
const second = document.getElementsByClassName("sec")[0]
const milisecond = document.getElementsByClassName("ms")[0]
let isPlay =false ;

const laps = document.getElementsByClassName("laps")[0]
const clearButton = document.getElementsByClassName("clear-lap-button")[0]
const bg = document.getElementsByClassName("outer-circle")[0]

let min   ;
let minCount =0 ;
let  sec ;
let  secCount =0 ;
let milisec ;
let milisecCount =0 ;
let isReset =false ;

let  lapItem =0 ;

const toggalButton = () =>{
    lapButton.classList.remove("hidden") ;
    resetButton.classList.remove("hidden")
}

const play =() =>{
    if(!isPlay && !isReset){
        playButton.innerHTML ='Pause' ;
        bg.classList.add("animation-bg")
       min = setInterval(()=>{
       
            minute.innerHTML =` ${ ++minCount }  :&nbsp; `;
        },60*1000) ;

       sec = setInterval(()=>{
        if(secCount===60){
            secCount=0 ;
        }
            second.innerHTML =`&nbsp; ${ ++secCount}  &nbsp;:  `;
        },1000) ;
        
       milisec = setInterval(()=>{
        if(milisecCount===100){
            milisecCount =0;
        }
            milisecond.innerHTML=`&nbsp; ${ ++milisecCount} `;
        },10) ;
       
        isPlay =true ;
        isReset=true ;

    }else{
        playButton.innerHTML ='Play' ;
       clearInterval(min) ;
       clearInterval(sec) ;
       clearInterval(milisec) ;
        isPlay =false ;
        isReset=false;
        bg.classList.remove("animation-bg") ;
    }
  toggalButton() ;  
}

// const playSec=()=>{

// }




const reset =()=>{
    isReset=true ;
    play() ;
    lapButton.classList.add('hidden');
    resetButton.classList.add('hidden') ;
    second.innerHTML=`&nbsp; ${0} :`;
    secCount=0 ;
    milisecond.innerHTML=`&nbsp; ${0} `;
    milisecCount=0;
    minute.innerHTML=`${0} :`;
    minCount=0 ;
}

const lap =() =>{
   const li = document.createElement("li") ; 
   const number =  document.createElement("span") ;
   const timeStamp =document.createElement("span") ;

   number.innerHTML= `#${++lapItem}`

   li.setAttribute("class" ,"lap-item");
   number.setAttribute("class" ,"number");
   timeStamp.setAttribute("class" ,"time-stamp");

   timeStamp.innerHTML=`${minCount} : ${secCount} : ${milisecCount}`

   li.append(number,timeStamp);
   laps.append(li) ;
   clearButton.classList.remove("hidden")
}

const clearAll=()=>{
    laps.innerHTML=`` ;
    laps.append(clearButton);
    lapItem=0;
    clearButton.classList.add("hidden")
}

playButton.addEventListener("click" , play) ;
resetButton.addEventListener("click" , reset) ;
lapButton.addEventListener("click" , lap) ;
clearButton.addEventListener("click" , clearAll) ;