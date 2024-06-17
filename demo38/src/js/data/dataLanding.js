// data.js
const data = [
  {
    name: "John Doe",
    pasal: 25,
    no_spdp: "Engineer",
    tgl_spdp: "2020-02-20",
    jenis: "Penting",
    jaksa: "Annisa Tiramisu",
    tahap: "Perpanjangan",
    keterangan: "-",
  },
];

// Generate remaining dummy objects
for (let i = 1; i < 50; i++) {
  data.push({
    name: `Person ${i + 1}`,
    pasal: Math.floor(Math.random() * 100) + 1, // Random pasal between 1-100
    no_spdp: Math.floor(Math.random() * 8999) + 1000, // Random profession
    tgl_spdp: generateRandomDate(2023, 2024), // Random date between 2023-2024
    jenis: ["Penting", "Biasa", "Rahasia"][Math.floor(Math.random() * 3)], // Random jenis
    jaksa: `Jaksa Name ${i + 1}`,
    tahap: ["Penyelidikan", "Persidangan", "Perpanjangan"][
      Math.floor(Math.random() * 3)
    ], // Random tahap
    keterangan: Math.random() < 0.5 ? "Some details" : "-", // Random keterangan
  });
}

function generateRandomDate(minYear, maxYear) {
  const year = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 30) + 1;
  return `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
}
function displayData() {
  const tableBody = document.getElementById("data-table-body");
  data.forEach((item, index) => {
    const tableRow = document.createElement("tr");
    const idCell = document.createElement("td");
    idCell.textContent = index + 1;
    tableRow.appendChild(idCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    tableRow.appendChild(nameCell);

    const pasal = document.createElement("td");
    pasal.textContent = item.pasal;
    tableRow.appendChild(pasal);

    const no_spdpCell = document.createElement("td");
    no_spdpCell.textContent = item.no_spdp;
    tableRow.appendChild(no_spdpCell);

    const tgl_spdpCell = document.createElement("td");
    tgl_spdpCell.textContent = item.tgl_spdp;
    tableRow.appendChild(tgl_spdpCell);

    const jenisCell = document.createElement("td");
    jenisCell.textContent = item.jenis;
    tableRow.appendChild(jenisCell);

    const jaksaCell = document.createElement("td");
    jaksaCell.textContent = item.jaksa;
    tableRow.appendChild(jaksaCell);

    const tahapCell = document.createElement("td");
    tahapCell.textContent = item.tahap;
    tableRow.appendChild(tahapCell);

    const keteranganCell = document.createElement("td");
    keteranganCell.textContent = item.keterangan;
    tableRow.appendChild(keteranganCell);

    tableBody.appendChild(tableRow);
  });
}

// Ensure the function runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", displayData);
