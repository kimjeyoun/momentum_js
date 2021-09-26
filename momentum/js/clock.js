const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date(); // 데이트 객체 생성
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${second}`;
    clock.innerText
}

getClock(); // 시작하자마자 시계 즉시 호출
setInterval(getClock, 1000); // 1초간격으로 함수 실행