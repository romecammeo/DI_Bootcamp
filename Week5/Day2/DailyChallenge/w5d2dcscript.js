async function initializeConverter() {
    try {
        const response =
            await fetch(
                "https://v6.exchangerate-api.com/v6/API_KEY/latest/USD"
            );

        if (!response.ok) {
            throw new Error(
                "Could not load currencies"
            );
        }

        const data =
            await response.json();

        const currencyKeys =
            Object.keys(
                data.conversion_rates
            );

        const fromSelect =
            document.querySelector(
                "#from-currency"
            );

        const toSelect =
            document.querySelector(
                "#to-currency"
            );

        for (const key of currencyKeys) {
            const fromOption =
                document.createElement(
                    "option"
                );

            fromOption.value = key;
            fromOption.textContent = key;

            const toOption =
                document.createElement(
                    "option"
                );

            toOption.value = key;
            toOption.textContent = key;

            fromSelect.append(fromOption);
            toSelect.append(toOption);
        }

        const form =
            document.querySelector("form");

        const amountInput =
            document.querySelector(
                "#amount"
            );

        const resultElement =
            document.querySelector(
                "#exchanged"
            );

        form.addEventListener(
            "submit",
            async (e) => {
                e.preventDefault();

                const from =
                    fromSelect.value;

                const to =
                    toSelect.value;

                const amount =
                    amountInput.value;

                const conversionUrl =
                    `https://v6.exchangerate-api.com/v6/API_KEY/pair/${from}/${to}/${amount}`;

                try {
                    const conversionResponse =
                        await fetch(
                            conversionUrl
                        );

                    if (
                        !conversionResponse.ok
                    ) {
                        throw new Error(
                            "Conversion failed"
                        );
                    }

                    const conversionData =
                        await conversionResponse.json();

                    resultElement.textContent =
                        `${amount} ${from} = ${conversionData.conversion_result} ${to}`;

                } catch (error) {
                    resultElement.textContent =
                        "Conversion failed.";

                    console.log(error);
                }
            }
        );

    } catch (error) {
        console.log(error);
    }
}

initializeConverter();