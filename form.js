/*function myfun() {
  var username = document.querySelector("#username");
  ("\n");
  var email = document.querySelector("#email");
  ("\n");
  var phone = document.querySelector("#phone");
  ("\n");
  var output = document.querySelector("#output");

  output.innerHTML += "Username: " + username.value;
  output.innerHTML += "User email: " + email.value;
  output.innerHTML += "User phone: " + phone.value;
}*/
function GEEKFORGEEKS() {
  var name = document.forms.RegForm.username.value;
  var email = document.forms.RegForm.email.value;
  var phone = document.forms.RegForm.phone.value;

  var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.
  var regPhone = /^\d{11}$/; // Javascript reGex for Phone Number validation.
  var regName = /\d+$/g; // Javascript reGex for Name validation

  if (name == "" || regName.test(name)) {
    window.alert("Please enter your name properly.");
    name.focus();
    return false;
  }

  if (email == "" || !regEmail.test(email)) {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }

  if (phone == "" || !regPhone.test(phone)) {
    alert("Please enter valid phone number.");
    phone.focus();
    return false;
  }

  return true;
}
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i < json.length; i++) {
      console.log(json[i].id);
      document.getElementById(
        "CARD"
      ).innerHTML += `<div style="background-color:whitesmoke;height:180px;width:400px ;margin-left:50px"id = "${json[i].id}">
      <h4 style="color:  #0D3AA9;padding-top: 10px;padding-left: 10px;">${json[i].username}</h4>
      <div style="display: flex;"><img src="image/icon3.png">

          <p>${json[i].email}</p>

      </div>
      <div style="display: flex;"> <img src="image/icon4.png">
          <p>${json[i].phone}</p>
      </div>
      <div style="display: flex; ;">
          <input type="submit"onclick = "EditCard()" value="Edit" style="background-color:black;color:white;">
          <input type="submit" onclick ="deletee(${json[i].id})" value="Delete" style="background-color:red;color:white;margin-left: 10px;">
      </div>
      <div>
          <div style="float: right;margin-top: -150px;">
              <input type="submit" value="Professional"
                  style="background-color:green;color:white;display: flex;margin-bottom: 10px;">
              <img src="image/img3.png">
          </div>
      </div>
  </div>`;
    }
  });
function deletee(idd) {
  console.log(idd);
  let aa = document.getElementById(idd);
  aa.remove();
}
function contact(){
  let a = document.getElementById("username").value;
  let b = document.getElementById("email").value;
  let c = document.getElementById("phone").value;
  

  var card = document.createElement("div");
          card.classList.add("card");
          card.innerHTML = `
          <div class="ccard" style="background-color:whitesmoke;height:180px;width:400px ;margin-left:50px">
                <h4 style="color:  #0D3AA9;padding-top: 10px;padding-left: 10px;">${a}</h4>
                <div style="display: flex;"><img src="image/icon3.png">

                    <p>${b}</p>

                </div>
                <div style="display: flex;"> <img src="image/icon4.png">
                    <p>${c}</p>
                </div>
                <div style="display: flex; ;">
                    <input type="submit" value="Edit" style="background-color:black;color:white;">
                    <input type="submit" onclick="deleteCard()"  value="Delete" style="background-color:red;color:white;margin-left: 10px;">
                </div>
                <div>
                    <div style="float: right;margin-top: -150px;">
                        <input type="submit" value="Professional"
                            style="background-color:green;color:white;display: flex;margin-bottom: 10px;">
                        <img src="image/img3.png">
                    </div>
                </div>
            </div>
                `;
                let NewCardd = document.getElementById("CARD");
                NewCardd.appendChild(card);
  
}
var addCardButton = document.getElementById("AddCard");
addCardButton.addEventListener("click", contact);
//   document.getElementById("myBtn").addEventListener("click", contact);
function deleteCard() {
// Find the first card element on the page
const Cardd = document.querySelector('.ccard');

// If a card element is found, remove it from the DOM
if (Cardd) {
Cardd.remove();
}
}
