function myfun() {
  var username = document.querySelector("#username"); "\n"
  var email = document.querySelector("#email"); "\n"
  var phone = document.querySelector("#phone"); "\n"
  var output = document.querySelector("#output")
  
  output.innerHTML += "Username: " + username.value;
  output.innerHTML += "User email: " + email.value;
  output.innerHTML += "User phone: " + phone.value;
  

}
function GEEKFORGEEKS() {
  var name =
      document.forms.RegForm.username.value;
  var email =
      document.forms.RegForm.email.value;
  var phone =
      document.forms.RegForm.phone.value;
  
    
  var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
  var regPhone=/^\d{11}$/;                                        // Javascript reGex for Phone Number validation.
  var regName = /\d+$/g;                                    // Javascript reGex for Name validation

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