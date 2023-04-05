let user =prompt("enter S ,W or G") ;
let cpuI =Math.floor(Math.random()*3) ;
let cpu =["s" ,"w" ,"g"][cpuI] ;
const match =()=>{
    if(cpu===user){
        return "Draw";
    }
    else if(cpu==="s" && user==="w"){
        return "cpu won" ;
    }
    else if(cpu==="w" && user==="s"){
        return "user won" ;
    }
    else if(cpu==="g" && user==="w"){
return "user won" ;
    }
    else if(cpu==="w" && user==="g"){
return "cpu won" ;
    }
    else if(cpu==="s" && user==="g"){
return "user won" ;
    }
    else if(cpu==="g" && user==="s"){
return "cpu won" ;
    }else{
        return "Please enter a valid value.1"
    }
    }
  let result =  match(cpu ,user) ;
  let showw =document.getElementById("show").innerHTML=`CPU '${cpu}' and USER '${user}'   \n  |  Result : ${result}`
  
// document.write() ;

