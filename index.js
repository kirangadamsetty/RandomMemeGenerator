let imageEl = document.getElementById("image");
let createdEl = document.getElementById("created");
let buttonEl = document.getElementById("button");
let titleEl = document.getElementById("title");
let url = "https://meme-api.com/gimme/wholesomememes";
let randomMemeGenerator = async () => {
    let randomData = await fetch(url);
    let data = await randomData.json();
    imageEl.setAttribute("src", data.url);
    createdEl.textContent = `Meme is Created By ${data.author}`;
    titleEl.textContent = data.title;
}


buttonEl.addEventListener("click", randomMemeGenerator);
randomMemeGenerator();