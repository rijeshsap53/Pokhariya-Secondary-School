// const abc = document.querySelector('w_hover');
// const bcs = document.querySelector('class');

// bcs.addEventListener('mouseover', function(){
//       bcs.classList.add("a_open");
// });
// f popup
function visible() {
  document.getElementById("class2").style.visibility = "visible";
}

function hide() {
  document.getElementById("class2").style.visibility = "hidden";
}

// second popup

function visibility() {
  document.getElementById("s_hover").style.visibility = "visible";
}

function hideen() {
  document.getElementById("s_hover").style.visibility = "hidden";
}

// login popup

function visi() {
  document.getElementById("login_p").style.visibility = "visible";
}

const see = document.getElementById("myi");
const eye = document.getElementById("see");
const c_eye = document.getElementById("close_es");
// const pass = document.forms.input[type="password"]
const input_pass = document.getElementById("myi");



function func() {
  if (input_pass.value == "") {
    return;
  }

  if (see.type === "password") {
    see.type = "text";
    eye.style.display = "none";
    c_eye.style.display = "block";
  }
}

function down() {
  if (see.type === "text") {
    see.type = "password";
    c_eye.style.display = "none";
    eye.style.display = "block";
  }
}

// experiment

  const sec = document.querySelector(".emil");
  const thi = document.querySelector(".pass");
  const sclose = document.querySelector("#cross")
  const warn = document.querySelector(".warning")
  const no = document.querySelector("#no");
  const yes= document.querySelector("#done");
  const laa = document.querySelector("#login_p");
  const inform = document.querySelector(".inform");

  


  // hide
 
  
  

function hid() {

  if(sec.value !=""|| thi.value !=""){
    inform.innerHTML="the password has not been sumbitted";
    warn.style.visibility="visible";
    return;
  }else{

warn.style.visibility="hidden"
    laa.style.visibility="hidden"
  
  }
}

 const ok = document.querySelector("#done");
 const cancel = document.querySelector("#no");
 const box = document.querySelector(".box");
const warn2 = document.querySelector(".warning")


 ok.addEventListener("click", function(){
   window.location.reload();
 });

 cancel.addEventListener("click", function(){
   warn2.style.display="none";
   reset();
 });




window.onclick = function (event) {
  const pag = document.getElementById("login_p");

  if (event.target == pag) {
    if(sec.value !="" || thi.value != ""){
      inform.innerHTML="the password has not been sumbitted";
      warn.style.display="block";
      return;
    }
    pag.style.visibility = "hidden";


  }
};
