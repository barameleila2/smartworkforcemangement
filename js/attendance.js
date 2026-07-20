document.addEventListener("DOMContentLoaded",function(){
    const addBtn = document.querySelector(".add-btn");
    addBtn.addEventListener("click",function(){
        let id = prompt("enter employee ID:");
         let name = prompt("Enter Employee Name:");
        let date = prompt("Enter Date (e.g. 1 July 2026):");
        let checkIn = prompt("Enter Check In Time:");
        let status = prompt("Enter Status (Present/Late/Absent):");

        if (id && name && date && checkIn && status) {

            const table = document.querySelector("table");

            const row = table.insertRow();

            row.innerHTML = `
                <td>${id}</td>
                <td>${name}</td>
                <td>${date}</td>
                <td>${checkIn}</td>
                <td>${status}</td>
                <td>
                    <button class="action-btn edit">Edit</button>
                    <button class="action-btn delete">Delete</button>
                </td>
            `;

            addEvents(row);
        }
    });
 document.querySelectorAll("table tr").forEach(function (row, index) {
        if (index > 0) {
            addEvents(row);
        }
    });

    function addEvents(row) {

        // Delete button
        const deleteBtn = row.querySelector(".delete");

        deleteBtn.addEventListener("click", function () {
            if (confirm("Delete this attendance record?")) {
                row.remove();
            }
        });
         const editBtn = row.querySelector(".edit");

        editBtn.addEventListener("click", function () {

            row.cells[1].textContent = prompt("Employee Name:", row.cells[1].textContent);
            row.cells[2].textContent = prompt("Date:", row.cells[2].textContent);
            row.cells[3].textContent = prompt("Check In:", row.cells[3].textContent);
            row.cells[4].textContent = prompt("Status:", row.cells[4].textContent);

        });
    }
    });