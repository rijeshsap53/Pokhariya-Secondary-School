// const abc = document.querySelector('w_hover');
// const bcs = document.querySelector('class');

// bcs.addEventListener('mouseover', function(){
//       bcs.classList.add("a_open");
// });
// f popup
function visible(){
  document.getElementById("class2").style.visibility = 'visible';
}

function hide(){
  document.getElementById("class2").style.visibility = 'hidden';
}

// second popup

function visibility(){
  document.getElementById("s_hover").style.visibility = 'visible';
}

function hideen(){
  document.getElementById("s_hover").style.visibility = 'hidden';
}

// login popup

function visi(){
  document.getElementById("login_p").style.visibility = 'visible';
  
}




const see = document.getElementById("myi");
const eye = document.getElementById("see");
const c_eye = document.getElementById("close_es");
// const pass = document.forms.input[type="password"]
const input_pass = document.getElementById("myi");  

function func(){

    if(input_pass.value==""){
      
      return
    }


  if(see.type === "password"){
    see.type= "text";
    eye.style.display="none";
    c_eye.style.display = "block";
  



  }

}

function down(){
  if(see.type=== "text"){
    see.type= "password"
    c_eye.style.display= "none";
    eye.style.display = "block";
    
  }
}

function hid(){
  document.getElementById("login_p").style.visibility = 'hidden';
  document.getElementById("for").reset();
  
}

window.onclick = function(event){
  const pag= document.getElementById("login_p");
  if(event.target == pag ){
      pag.style.visibility = "hidden";
  }
}

