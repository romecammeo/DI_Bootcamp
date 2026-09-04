const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

function randomname() {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const category =
            document.querySelector("#randomthingy").value;

        getGifs(category);
    });
}

async function getGifs(category) {
    const url =
        `https://api.giphy.com/v1/gifs/random?tag=${category}&rating=g&api_key=${apiKey}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();

        const gifUrl = data.data.images.original.url;

        const image = document.createElement("img");

        image.src = gifUrl;

        const gifArea = document.querySelector("#randomid");

        gifArea.appendChild(image);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "DELETE";
        const gifContainer = document.createElement("div");
        gifContainer.appendChild(image);
        gifContainer.appendChild(deleteButton);
        deleteButton.addEventListener("click", () => {
            gifContainer.remove();
});
        gifArea.appendChild(gifContainer);
    } catch (error) {
        console.log(error);
    }
}

randomname();