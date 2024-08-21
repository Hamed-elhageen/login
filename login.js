let mycontainer=document.getElementById("container");
let sign_up_btn=document.getElementById("up");
let sign_in_btn=document.getElementById("in");

sign_up_btn.addEventListener("click",function(){
    mycontainer.classList.add("active");
});

sign_in_btn.addEventListener("click",function(){
    mycontainer.classList.remove("active");
   
});


let myparagraph =document.getElementById("para");
let ourform=document.getElementById("sign-in-form");
ourform.onsubmit=function(){
    let passwordinput=document.getElementById("pass");
    let passwordpattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;
    let result = passwordpattern.test(passwordinput.value);
    if(result===true){
        return true;
    }
    else{
        myparagraph.style.cssText="display:block";
        return false;
        
    }

}

let last=document.getElementById("nn");
let myform = document.getElementById("sign-up-form");

myform.onsubmit=function(){
    let passwordin=document.getElementById("uu");
    let passpattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;
    let result = passpattern.test(passwordin.value);
    if(result===true){
        return true;
    }
    else{
        last.style.cssText="display:block";
        return false;
        
    }

}



