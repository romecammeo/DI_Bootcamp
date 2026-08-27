let counter = 3;

const insertRow = () => {
    const myTable = document.querySelector("#sampleTable");
    const myNewRow = document.createElement("tr");

for (let i = 1; i < 6; i++) {
    const myNewCell = document.createElement("td");
    myNewCell.innerText = "Row" + counter + " cell" + i;
    myNewRow.append(myNewCell)
}

myTable.appendChild(myNewRow);
counter++;
}`