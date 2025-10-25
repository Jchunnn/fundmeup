import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

const loginBtn = document.getElementById("loginBtn"); // 頁面 index
const subscribeBtn = document.getElementById("subscribeBtn"); // 頁面 index
const personalInfo = document.getElementById("personalInfo"); // 頁面 index

console.log("loginBtn", loginBtn);
console.dir(loginBtn);

console.log("subscribeBtn", subscribeBtn);
console.dir(subscribeBtn);

console.log("personalInfo", personalInfo);
console.dir(personalInfo);

loginBtn?.addEventListener("click", () => {
  // 導頁至loginpage
  window.location.href = "loginpage.html";
});

// "DOMContentLoaded"：當 HTML 被完全載入並解析完成 時就會觸發，但不需要等圖片、樣式表或子框架（iframe）載入完成
// 子框架: 子框架指的是在一個網頁中嵌入的「另一個網頁」。被嵌入的網頁就是「子框架」。這通常是透過 <iframe> 元素來實現。
// "load": 要等整個頁面（圖片、CSS、iframe）全部載入 才觸發  ==> window.addEventListener("load", () => {})

document.addEventListener("DOMContentLoaded", () => {
  console.log("🏅🏅🏅🏅");
  // 檢查登入狀態
  const justLoggedIn = localStorage.getItem("justLoggedIn");

  if (justLoggedIn === "true") {
    // 清除狀態，避免下次誤判
    /* localStorage.removeItem("justLoggedIn"); */

    // 修改樣式
    // 1. 隱藏登入按鈕
    loginBtn.style.display = "none";

    // 2. 改變立即訂閱狀態
    subscribeBtn.classList.remove("btn-outline-primary-600");
    subscribeBtn.classList.add("btn-primary-600");

    // 3. 顯示personalInfo區塊
    personalInfo.classList.add("d-lg-flex", "align-items-center");
  }
});

/*  */
const loginBtnMb = document.getElementById("loginBtnMb"); // 頁面 index
const subscribeBtnMb = document.getElementById("subscribeBtnMb"); // 頁面 index
const staticBackdropThree = document.getElementById("staticBackdropThree"); // 頁面 index

console.log("loginBtnMb", loginBtnMb);
console.dir(loginBtnMb);

console.log("subscribeBtnMb", subscribeBtnMb);
console.dir(subscribeBtnMb);

console.log("staticBackdropThree", staticBackdropThree);
console.dir(staticBackdropThree);

loginBtnMb?.addEventListener("click", () => {
  // 導頁至loginpage
  window.location.href = "loginpage.html";
});
