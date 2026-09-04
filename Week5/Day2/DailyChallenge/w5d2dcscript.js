async function randomfunction() {

   const amountInput =
    document.querySelector("#amount");

const resultElement =
    document.querySelector("#exchanged");

    const fromSelect = document.querySelector("#from-currency");
    const toSelect = document.querySelector("#to-currency");


    const form = document.querySelector("form");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const from = fromSelect.value;
        const to = toSelect.value;
        const amount = amountInput.value;

        const apiurl =
            `https://v6.exchangerate-api.com/v6/66856124f81788efb71b5426/pair/${from}/${to}/${amount}`;

        const conversionResponse =
            await fetch(apiurl);

        const conversionData =
            await conversionResponse.json();

        console.log(conversionData);
    });
}

randomfunction();