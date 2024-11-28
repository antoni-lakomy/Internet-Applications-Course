const tableBody = document.querySelector("#product-table tbody");
const filterInput = document.getElementById("filter-input");
const sortSelect = document.getElementById("sort-select");

let originalData = [];
let displayedData = [];

// Pobierz dane
fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    originalData = data.products.slice(0, 30);
    displayedData = [...originalData];
    renderTable(displayedData);
  })
  .catch((error) => console.error("Błąd pobierania danych:", error));

// Funkcja renderująca tabelę
function renderTable(data) {
  tableBody.innerHTML = "";
  data.forEach((product) => {
    const row = `
            <tr>
                <td><img src="${product.thumbnail}" alt="${product.title}"></td>
                <td>${product.title}</td>
                <td>${product.description}</td>
            </tr>
        `;
    tableBody.innerHTML += row;
  });
}

// Funkcja filtrowania
function filterData(query) {
  return originalData.filter(
    (product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
  );
}

// Funkcja sortowania
function sortData(data, sortOrder) {
  if (sortOrder === "asc") {
    return data.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOrder === "desc") {
    return data.sort((a, b) => b.title.localeCompare(a.title));
  } else {
    return [...originalData]; // Oryginalna kolejność
  }
}

// Obsługa zmian w filtrach i sortowaniu
function updateTable() {
  // Filtrowanie
  const query = filterInput.value;
  let filteredData = filterData(query, originalData);

  // Sortowanie
  const sortOrder = sortSelect.value;
  if (sortOrder !== "original") {
    filteredData = sortData(filteredData, sortOrder);
  }

  displayedData = filteredData;
  renderTable(displayedData);
}

// Obsługa filtrów i sortowania
filterInput.addEventListener("input", updateTable);
sortSelect.addEventListener("change", updateTable);
