const quotes = [
    {
        quote : "한잔은 썩어가는 마음을 위해.",
        author: "뱃사람",
    },
    {
        quote : "한잔은 떠나간 너를 위하여.",
        author: "뱃사람",
    },
    {
        quote : "한잔은 너와 나의 영원했던 사랑을 위하여.",
        author: "뱃사람",
    },
    {
        quote : "한잔은 이미 초라해진 나를 위하여.",
        author: "뱃사람",
    },
    {
        quote : "다음생에는 너로 태어나 나를 사랑해야지.",
        author: "김재윤",
    },
    {
        quote : "저는 지금 죽음도 두렵지 않은 사랑을 하고 있어요.",
        author: "김재윤",
    },
    {
        quote : "너가 없는 봄이온다.",
        author: "4월은 너의 거짓말",
    },
    {
        quote : "어머니 이건 저의 나태함인가요.",
        author: "김재윤",
    },
    {
        quote : "정답이다 연금술사!",
        author: "진리",
    },
    {
        quote : "비가오는군.. 아니.. 비다..",
        author: "머스탱",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;