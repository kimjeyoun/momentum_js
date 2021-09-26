const API_KEY = "ee71b3afd8a6d2c1a4ac136b8907c814"; // 나의 API KEY

function onGeoOk(position) {
  // 성공시의 함수는 오브젝트 하나를 인자로 받는데 그 오브젝트에 위치 정보가 담겨있다.
  const lat = position.coords.latitude; // 위도
  const lon = position.coords.longitude; // 경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; // API url주소 변수와 결합 변환
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = `@${data.name}`; // 지역이름
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`; // 날씨정보
    }); //  then, response 등은 백엔드라서 wetube강의에서 설명나온대 글고 JOSN은 url의 data들이라는데 잘 모르겠다.
  // 자바스크립트가 url을 대신 요청해서 불러와줌 -> 개발자 도구의 네트워크 가면 허용하는 순간 뜸

  // fetch와 API의 대한 정보 -->
  // 원격 API를 간편하게 호출할 수 있도록 브라우저에서 제공하는 fetch() 함수
  // 대부분의 REST API들은 JSON 형태의 데이터를 응답하기 때문에, 응답(response) 객체는 json() 메서드를 제공합니다.
  // 이 메서드를 호출하면, 응답(response) 객체로 부터 JSON 포멧의 응답 전문을 자바스크립트 객체로 변환하여 얻을 수 있습니다.
  // fetch() 함수는 첫번째 인자로 URL, 두번째 인자로 옵션 객체를 받고, Promise 타입의 객체를 반환합니다. 반환된 객체는,
  // API 호출이 성공했을 경우에는 응답(response) 객체를 resolve하고, 실패했을 경우에는 예외(error) 객체를 reject합니다.
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // getCurrentPosition은 2개의 인자를 가지는데 하나는 위치를 불러오는데 성공하면 실행 할 함수, 하나는 실패하면 부를 함수이다.
