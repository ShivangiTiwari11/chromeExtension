fetch("https://icanhazdadjoke.com/slack")
.then(res => res.json())
.then(data =>{
    const joke = data.attachments[0].text;
    const jokeEle = document.getElementById("jokeTag");
    jokeEle.innerHTML = joke;
})