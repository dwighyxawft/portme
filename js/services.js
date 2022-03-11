$(document).ready(function(){
    var form = document.querySelector("#form1");
    var alert = document.querySelector(".alert");
    var arr = [];
    form1.addEventListener("submit", function(event){
        event.preventDefault();
        var name = document.querySelector("#name").value;
        var mail = document.querySelector("#mail").value;
        var msg = document.querySelector("#msg").value;
        arr.push({name: name, mail:mail, msg:msg});
        alert.classList.remove("d-none");
        alert.classList.add("d-flex");
        document.querySelector("#text").textContent = `Congrats ${name}, your message is ${msg}`;
        console.log(arr);

        

    })




});