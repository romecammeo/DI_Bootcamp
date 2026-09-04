
async function getCharacter() {
    const randomId = Math.floor(Math.random() * 82) + 1;

    const url =
        `https://www.swapi.tech/api/people/${randomId}`;

    try {
        const characterResponse =
            await fetch(url);

        if (!characterResponse.ok) {
            throw new Error("Character not found");
        }

        const characterData =
            await characterResponse.json();

        const character =
            characterData.result.properties;

        const homeworldUrl =
            character.homeworld;

        const homeworldResponse =
            await fetch(homeworldUrl);

        const homeworldData =
            await homeworldResponse.json();

        console.log(homeworldData);


const nameElement = document.querySelector("#name");
const heightElement = document.querySelector("#height");
const genderElement = document.querySelector("#gender");
const birthYearElement = document.querySelector("#birth-year");
const homeWorldElement = document.querySelector("#home-world");

heightElement.textContent = character.height;
nameElement.textContent = character.name;
genderElement.textContent = character.gender;
birthYearElement.textContent = character.birthyear;
homeWorldElement.textContent = character.homeworldName;

console.log(character);

    } catch (error) {
        console.log(error);
    }
}





 const form = document.querySelector("#find-character");
    form.addEventListener("click", (e) => {
        e.preventDefault();   
        getCharacter()
    });
        