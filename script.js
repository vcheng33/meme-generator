window.onload = function () {
    let formSection = document.querySelector("#meme-form");
    let completedSection = document.querySelector("#completed-memes-section");

    let submitButton = document.querySelector("#form-button");
    formSection.addEventListener("submit", function(event) {
        event.preventDefault();
        
        let listOfCompletedMemes = document.querySelector("ul");

        // create a new element
        let newMeme = document.createElement("li");
        newMeme.classList.add("completed-meme");


        // Add the Image 
        let url = document.querySelector("#image-url").value;
        let newMemeImg = document.createElement("img");
        newMemeImg.setAttribute("src", url);
        newMemeImg.setAttribute("alt", "Meme Image");
        newMemeImg.setAttribute("class", "img-meme-styling");
        newMeme.appendChild(newMemeImg);
        
        // Add top text 
        let topText = document.createElement("div");
        let topTextValue = document.querySelector("#top-text").value;
        topText.innerText = topTextValue;
        topText.classList.add("meme-top-text-styling");
        newMeme.appendChild(topText);

        // Add bottom text
        let bottomText = document.createElement("div");
        let bottomTextValue = document.querySelector("#bottom-text").value;
        bottomText.innerText = bottomTextValue;
        bottomText.classList.add("meme-bottom-text-styling");
        newMeme.appendChild(bottomText);

        // Create a Remove Button
        let removeMeme = document.createElement("div");
        removeMeme.innerText = "X";
        removeMeme.classList.add("div-remove-meme");
        newMeme.appendChild(removeMeme);
        
        // Appending new elements together        
        listOfCompletedMemes.appendChild(newMeme);

        // Reset the form
        formSection.reset();

    });

    // Remove the Meme from the Bottom
    function removeMemeButton (event) {
        if (event.target.classList.contains("div-remove-meme")) {
            event.target.parentNode.remove();
        }
    }
    
    let removeMemeEvent = document.querySelector("#completed-memes-section");
    removeMemeEvent.addEventListener("click", removeMemeButton);
 

};
