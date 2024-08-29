const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
})

function successFunction() {
    var x = document.getElementsByClassName("card")[0];
    var y = document.getElementsByClassName("success")[0];
    if (x.style.display === "none") {
      x.style.display = "";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "";
    }
  }

  function validate(){
    var mail = document.getElementById("email").value;
    

    var regx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    

    if(regx.test(mail)){
      alert("You have provided a valid Email ID")
      successFunction()
      return true;
    }
    else{
      alert("Sorry! Incorrect Email ID")
      document.getElementById("invalidmail").style.display = "";
      document.getElementById("email").style.color = "hsl(4, 100%, 67%)";
      document.getElementById("email").style.border = "1px solid hsl(4, 100%, 67%)";
      document.getElementById("email").style.background= "#FFE8E6";
      return false;
    }
  }