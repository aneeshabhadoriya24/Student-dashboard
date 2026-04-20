
window.onload = function(){

    document.getElementById(
        "dashboard"
    ).style.display = "none";

}

function login(){

    let studentName =
    document.querySelector(
        'input[type="text"]'
    ).value;


    let password =
    document.querySelector(
        'input[type="password"]'
    ).value;



    if(studentName=="" || password==""){

        alert(
            "Enter name and password"
        );

        return;

    }





    document.getElementById(
        "login"
    ).style.display = "none";


    document.getElementById(
        "dashboard"
    ).style.display = "block";

    document.getElementById("dashboard" ).style.background = "pink";

    document.querySelector("h1" ).innerText =

    "Welcome " + studentName;

}