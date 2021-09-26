const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저 기본 동작 실행 방지 ex) 폼의 새로고침
  loginForm.classList.add(HIDDEN_CLASSNAME); // 로그인 폼에 디스플레이 논 추가
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); // 스토리지에 유저이름 저장
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; // h1제목에 유저명 더하기
  greeting.classList.remove(HIDDEN_CLASSNAME); //폼에 입력 완료하면 히든 클래스 지우기
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
