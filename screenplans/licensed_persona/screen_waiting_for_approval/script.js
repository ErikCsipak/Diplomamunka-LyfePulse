const $=selector=>document.querySelector(selector);
const $$=selector=>document.querySelectorAll(selector);

function openApp(){
  $("#auth-view").classList.add("d-none");
  $("#app-view").classList.remove("d-none");
}

$("#login-form").addEventListener("submit",event=>{
  event.preventDefault();
  openApp();
});
$(".logout-btn").addEventListener("click",()=>{
  $("#app-view").classList.add("d-none");
  $("#auth-view").classList.remove("d-none");
});
