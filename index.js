//create the  password genrate//
 function password() {
    let chars ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345678910!@#$%^&*()'
    let totallength =10;
    let yourpassword ='';
    for (let index = 0; index < totallength; index++) {
        yourpassword+=chars.charAt(Math.floor(Math.random()*chars.length));
        
    }
    console.log(yourpassword);
 }
 password();

 //Add event listener//
 let bdn =document.querySelector(".bdn");
 
 bdn.addEventListener("click",password);




 


    




