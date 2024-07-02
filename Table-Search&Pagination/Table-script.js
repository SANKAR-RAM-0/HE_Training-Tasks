const searchInput = document.getElementById("searchInput"); //Getting the search input
const table = document.getElementById("myTable"); 
const rows = table.getElementsByTagName("tr"); 

searchInput.addEventListener("keyup", search);
    
    function search(){
        const searchTerm = searchInput.value.toLowerCase();

        for (let i = 1; i < rows.length; i++) {
            let found = false;
            const cells = rows[i].getElementsByTagName("td");

            for (let j = 0; j < cells.length; j++) {
                const cellValue = cells[j].textContent.toLowerCase();

                if (cellValue.includes(searchTerm)) {
                    found = true;
                    break;
                }
            }

            if (found) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    };

    
    // const table,rows
    const rowsPerPage = 5;
    let currentPage = 1;

    function showPage(pageNumber) {
        currentPage = pageNumber;
        const startIndex = (pageNumber - 1) * rowsPerPage + 1;
        const endIndex = pageNumber * rowsPerPage;

        for (let i = 1; i < rows.length; i++) {
            if (i >= startIndex && i <= endIndex) {
                rows[i].style.display = "table-row";
            } else {
                rows[i].style.display = "none";
            }
        }

        updatePaginationButtons();
    }

    function previousPage() {
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    }

    function nextPage() {
        const pageCount = Math.ceil((rows.length - 1) / rowsPerPage);
        if (currentPage < pageCount) {
            showPage(currentPage + 1);
        }
    }

    function updatePaginationButtons() {
        const buttons = document.querySelectorAll(".pagination button");
        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            if (button.innerText === "Previous" || button.innerText === "Next") {
                continue;
            }
            if (button.innerText == currentPage) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        }
    }

    showPage(1); // Show the first page initially