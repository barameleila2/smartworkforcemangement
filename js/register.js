// Wait until the page has loaded
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".registration-from");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const department = document.getElementById("department").value;
        const position = document.getElementById("position").value;
        const startDate = document.getElementById("startdate").value;

        alert(
            "Employee Registered Successfully!\n\n" +
            "Name: " + fullName +
            "\nEmail: " + email +
            "\nPhone: " + phone +
            "\nDepartment: " + department +
            "\nPosition: " + position +
            "\nStart Date: " + startDate
        );

        form.reset();
    });

});