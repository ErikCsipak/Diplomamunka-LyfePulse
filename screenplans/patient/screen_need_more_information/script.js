const $=selector=>document.querySelector(selector);
document.querySelectorAll("[data-auth-tab]").forEach(button=>button.addEventListener("click",()=>{
 const register=button.dataset.authTab==="register";
 document.querySelectorAll(".auth-tab").forEach(tab=>tab.classList.toggle("active",tab===button));
 $("#login-form").classList.toggle("d-none",register);
 $("#register-form").classList.toggle("d-none",!register);
}));
const identityModal=new bootstrap.Modal($("#patientIdentityModal"));
$("#login-form").addEventListener("submit",event=>event.preventDefault());
$("#register-form").addEventListener("submit",event=>{event.preventDefault();if(event.target.reportValidity())identityModal.show()});
$("#taj-card-file").addEventListener("change",event=>{$("#taj-file-name").textContent=event.target.files[0]?.name||"Nincs fájl kiválasztva"});
$("#patient-identity-form").addEventListener("submit",event=>{event.preventDefault();identityModal.hide()});
