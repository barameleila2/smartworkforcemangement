document.addEventListener("DOMContentLoaded",function(){
    const loginForm = document.getElementById("loginForm");

    if(!loginForm){
        console.error("login form not found.");
        return;
    }
    loginForm.addEventListener("submit",function(event){
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if(email === ""|| password === ""){
            alert("please fill in all fields.");
            return;
        }
        const validEmail = "admin@gmail.com";
        const validPassword = "1234";

        if(email === validEmail && password === validPassword){
            alert("Login successful");
            window.location.href = "home.html"
        } else{
            alert("Incorrect email or password.");
        }
    });
});