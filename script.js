const quoteMsg = document.getElementById("quote");
const authorName = document.getElementById("author");
const api_url = "https://dummyjson.com/quotes/random";

async function getQuote(url) {
  const response = await fetch(url);
  let data = await response.json();

  quoteMsg.innerHTML = data.quote;
  authorName.innerHTML = data.author;
}

getQuote(api_url);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" + quoteMsg.innerHTML + "---- by " + authorName.innerHTML,
    "Tweet Window",
    "width=600, height=300",
  );
}
