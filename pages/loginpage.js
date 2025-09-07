import "../assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

const loginPageLoginBtn = document.getElementById("loginPageLoginBtn"); // 頁面 loginpage

console.log("loginPageLoginBtn", loginPageLoginBtn);
console.dir(loginPageLoginBtn);

loginPageLoginBtn.addEventListener("click", () => {
  // 1. 在 localStorage 記錄登入成功
  localStorage.setItem("justLoggedIn", "true");

  // 2. 導頁至首頁
  window.location.href = "index.html";
});
