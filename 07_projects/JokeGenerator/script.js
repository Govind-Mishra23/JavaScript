const btn = document.querySelector('.btn')
const hindiBtn = document.querySelector('.hindiJoke')
const jokeBox = document.querySelector('#joke')

btn.addEventListener('click', ()=>{
    console.log("clicked")
    getJoke()
})
async function getJoke() {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke")
    const data = await response.json()
    jokeBox.innerHTML = data.punchline
    console.log(data.punchline) 
}
hindiBtn.addEventListener('click', ()=>{
    console.log("clicked") 
    getHindiJoke()

})
async function getHindiJoke() {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await response.json();

  const joke = `${data.setup} ${data.punchline}`;
  console.log("Original:", joke);

  const res = await fetch("https://libretranslate.de/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      q: joke,
      source: "en",
      target: "hi",
      format: "text"
    })
  });

  const data1 = await res.json();

  if (data1.translatedText) {
    console.log("Translated:", data1.translatedText);
    jokeBox.innerHTML = data1.translatedText;
  } else {
    console.error("Translation failed:", data1);
    jokeBox.innerHTML = "❌ Translation failed. Try again.";
  }
}
