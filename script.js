function check(){
    const name = document.querySelector("#name")
    const mob = document.querySelector("#phone")
    const ageinput = document.querySelector("#age")
    const age=parseInt(ageinput.value)
    const msg =document.querySelector("#msg")
    msg.textContent="Checking details...";
    msg.style.color = "black";
    
    setTimeout(() => {
        if(isNaN(age)){
            msg.textContent = name.value +  " Enter a valid age!!"
            msg.style.color = "red";
            return ;
        }
    
        if(age >=18){
            msg.textContent = name.value +  " You are eligible for vote"
            msg.style.color = "green";
        }
        else{
            msg.textContent = name.value +  " You are NOT eligible for vote"
            msg.style.color = "red";
        }
    }, 2500);

}
