import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

const loginBtn = document.getElementById("loginBtn");
const subscribeBtn = document.getElementById("subscribeBtn");
const personalInfo = document.getElementById("personalInfo");

console.log("loginBtn", loginBtn);
console.log("subscribeBtn", subscribeBtn);
console.log("personalInfo", personalInfo);

loginBtn.addEventListener("click", () => {
  // 1. 隱藏登入按鈕
  loginBtn.style.display = "none";

  // 2. 改變立即訂閱狀態
  subscribeBtn.classList.remove("btn-outline-primary-600");
  subscribeBtn.classList.add("btn-primary-600");

  // 3. 顯示personalInfo區塊
  personalInfo.classList.add("d-lg-flex", "align-items-center");
});
