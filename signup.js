let getUsersdata = JSON.parse(localStorage.getItem("usersdata"));
console.log(getUsersdata);

function Signup(){
    let username = document.getElementById("name").value;
    let mobile = document.getElementById("phone").value;
    let password = document.getElementById("pass").value;

    // let userData;

    if(mobile.length == 0){
        alert("Enter mobile number.")
    }
    else if(mobile.length !== 10){
        alert("Mobile number should have 10 digits");
    }
    else{
        let userData = {
            username:username,
            mobile:mobile,
            password:password
        }
        // console.log(userData);
        // let users = [];
        // users.push(userData);

        let users = [...getUsersdata, userData];

        localStorage.setItem("usersdata", JSON.stringify(users));
    
        alert("Signup Sucessful.")
        window.location.href = "signin.html";
        
    }
}

function redirect_signin(){
    window.location.href = "./signin.html"
}