const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = []; // localstorage로 쓸 배열 생성, 시작할때마다 빈 배열로 시작해서 로컬스토리지의 전내용들이 날라감, 그래서 변경 가능하게 만듬

const TODOS_KEY = "todos"; // localstorage의 키를 문자열로 저장

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // filter는 배열(객체)를 필터링해주는 것이다. toDo는 자바스크립트가 toDos의 배열(객체)의 목록들을 하나하나 보내주는 것으로 삭제 버튼을 누른
  // 아이디와 toDo의 아이디를 비교해서 true가 나오면 살리고 false가 나오면 버린다 예전 배열 toDos를 유지하는게 아니라 새로운 toDos를 업데이트 하는것이다 (toDo는 toDos DB에 있는 요소 중 하나)
  saveToDos(); // 삭제뒤에 새로 업데이트된 배열을 저장
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); // 목록 추가
  li.id = newTodo.id; // 삭제를 위한 목록에 배열 아이디를 부여
  const span = document.createElement("span");
  span.innerText = newTodo.text; // span에 오브젝트의 텍스트 부여
  const button = document.createElement("button"); // 목록 추가하는 동시에 삭제 버튼 생성
  button.innerText = "X";
  button.addEventListener("click", deleteToDo); // 버튼에 이벤트 감지기 달아주기
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const toDosObj = { text: newTodo, id: Date.now() }; // 삭제를 위한 아이디와 텍스트로 오브젝트 생성
  toDos.push(toDosObj); // 입력받은 값 배열에 푸쉬 하지만 계속 새로운 빈 어레이 공간에 푸쉬해서 예전 목록들이 날라감
  paintToDo(toDosObj); // 함수로 보내서 실제 목록으로 생성
  saveToDos(); // 저장소에 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); // 저장소에 있는 아이템 변수에 저장

if (savedToDos !== null) {
  // 아이템들이 존재한다면
  const parsedToDos = JSON.parse(savedToDos); // 문자열을 배열로 변환한것을 변수에 저장
  toDos = parsedToDos; // toDos에 예전 배열들 값을 저장해서 사라지게하지 않음
  parsedToDos.forEach(paintToDo); // forEach함수는 배열의 내장된 함수로 배열의 요소마다 호출한 함수를 실행시켜준다
}
