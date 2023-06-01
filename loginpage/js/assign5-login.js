
const form1 = document.querySelector('#form1')
const form2 = document.querySelector('#form2')
const username =document.querySelector('#username');
const userpass =document.querySelector('#userpass');
const username1 =document.querySelector('#username1');
const email=document.querySelector('#email');
const password =document.querySelector('#password');
const cpassword =document.querySelector('#cpassword'); 


function login(){
    var login = document.getElementById("login-div")
    var submit = document.getElementById("div2")
    login.style.display ="block"
    submit.style.display="none"
    var btn1 =document.getElementById("button1")
    btn1.style.cursor="pointer"
}
function reg(){
    var login = document.getElementById("login-div")
    var submit = document.getElementById("div2")
    login.style.display ="none"
    submit.style.display="block"
    var btn2 =document.getElementById("button2")
    btn2.style.cursor="pointer"
}


function fun1(){
    const usernameVal = username.value.trim()
   if(usernameVal==""){
    document.getElementById("error1").innerHTML="please enter username";
    document.getElementById("error1").style.marginLeft="50px"
    
   }
   else{
    document.getElementById("error1").innerHTML="";
    
   }}

   function fun2(){
    const userpassVal = userpass.value.trim()
   if(userpassVal==""){
    document.getElementById("error2").innerHTML="please enter userpassword";
    document.getElementById("error2").style.marginLeft="70px"
    
   }
   else{
    document.getElementById("error2").innerHTML="";
    
   }}

   function fun3(){
    const username1Val = username1.value.trim()
   if(username1Val==""){
    document.getElementById("error3").innerHTML="please enter username";
    document.getElementById("error3").style.marginLeft="100px"
    
   }
   else{
    document.getElementById("error3").innerHTML="";
    
   }}

   function fun4(){
    const emailVal = email.value.trim()
   if(emailVal==""){
    document.getElementById("error4").innerHTML="please enter useremail";
    document.getElementById("error4").style.marginLeft="100px"
    
   }
   else{
    document.getElementById("error4").innerHTML="";
    
   }}

   function fun5(){
    const passwordVal = password.value.trim()
   if(passwordVal==""){
    document.getElementById("error5").innerHTML="please enter password";
    document.getElementById("error5").style.marginLeft="100px"
    
   }
   else{
    document.getElementById("error5").innerHTML="";
    
   }}

   function fun6(){
    const cpasswordVal = cpassword.value.trim()
   if(cpasswordVal==""){
    document.getElementById("error6").innerHTML="please enter password";
    document.getElementById("error6").style.marginLeft="100px"
    
   }
   else{
    document.getElementById("error6").innerHTML="";
    
   }}




   form1.addEventListener('submit',(e)=>{
    const usernameVal = username.value.trim()
    const userpassVal =userpass.value.trim()
   

    e.preventDefault();


    if(usernameVal ===""){
        document.getElementById("error1").innerHTML="Username is required";
        document.getElementById("error1").style.marginLeft="50px"
    }
    else{
        document.getElementById("error1").innerHTML="";
    }

    if(userpassVal ===""){
        document.getElementById("error2").innerHTML="password is required";
        document.getElementById("error2").style.marginLeft="50px"
    }
    else if(userpassVal.length<8){
        document.getElementById("error2").innerHTML="Password must be 8 chareacters";
        document.getElementById("error2").style.marginLeft="50px"
    }
    
    else{
        document.getElementById("error2").innerHTML="";
    }

}) 

form2.addEventListener('submit',(e)=>{

    const username1Val = username1.value.trim()
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()
    const cpasswordVal = cpassword.value.trim()

    e.preventDefault();


    if(username1Val ===""){
        document.getElementById("error3").innerHTML="Username is required";
        document.getElementById("error3").style.marginLeft="100px"
    }
    else{
        document.getElementById("error3").innerHTML="";
    }

    if(emailVal ===""){
        document.getElementById("error4").innerHTML="Email is required";
        document.getElementById("error4").style.marginLeft="80px"
    }
    
    else{
        document.getElementById("error4").innerHTML="";
    }

    if(passwordVal===''){
        document.getElementById("error5").innerHTML="Password is required";
        document.getElementById("error5").style.marginLeft="100px"
    }
    else if(passwordVal.length<8){
        document.getElementById("error5").innerHTML="Password must be 8 chareacters";
        document.getElementById("error5").style.marginLeft="150px"
    }
    else{
        document.getElementById("error5").innerHTML="";
    }

    if(cpasswordVal===''){
        document.getElementById("error6").innerHTML="Password is required";
        document.getElementById("error6").style.marginLeft="100px"
    }
    else if(cpasswordVal !== passwordVal){
        document.getElementById("error6").innerHTML="Password does not match";
        document.getElementById("error6").style.marginLeft="100px"
    }
    else{
        document.getElementById("error6").innerHTML="";
    }

}) 