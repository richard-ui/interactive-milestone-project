function clearInputs(){
    
    // empty all form input validation labels

    $("#f_name_label").html(""), $("#l_name_label").html(""), $("#phone_label").html(""),
    $("#email_label").html(""), $("#date_label").html(""), $("#hour_label").html("");
    
    // remove any red border's from input boxes by removing the 'red' class from each id

    document.getElementById('f_name').classList.remove("red"), document.getElementById('l_name').classList.remove("red"),
    document.getElementById('phone').classList.remove("red"), document.getElementById('email').classList.remove("red"),
    document.getElementById('date').classList.remove("red"), document.getElementById('hour').classList.remove("red");

}

// function to validate input fields

function validateInput(input_name, validation_message){
    if (!$('#'+input_name).val()) {    // use of jQuery for validation
        document.getElementById(input_name).classList.add("red");
        $("#"+input_name+"_label").html(validation_message);  // output
      return false;
    }
    return true;

}

function sendMail(contactForm) {

    // empty all form input fields to ""

    clearInputs();

    /* Credits: Here is code to check whether input fields are empty from techiedelight.com */
    
   // validate function used in if statements, retrieving 2 parameters, input 'id' and display an error message in label

     if (validateInput('f_name', "Please Enter your First Name")){
        if (validateInput('l_name', "Please Enter your Last Name")){
            if (validateInput('phone', "Please Enter your Phone Number!")){
			    if (validateInput('email', "Please Enter your Email!")){
			        if (validateInput('date', "Please Enter a Date!")){
			            if (validateInput('hour', "Please Enter a Time!")){
			             
                        }
						
                        else{
						    emailjs.send("service_csslju6", "Rick", {          // grab values of contact form input fields and send to 'Ricks' Email
								"reserve_name": contactForm.reserve_name.value, 
								"first_name": contactForm.f_name.value,
								"last_name": contactForm.l_name.value,
								"phone": contactForm.phone.value,
								"email": contactForm.email.value,
								"date": contactForm.date.value,
								"hour": contactForm.hour.value,
								"guests": contactForm.guests.value,
								"specialrequests": contactForm.special.value
							})
							emailjs.send("service_csslju6", "SendToUser", {          // grab values of contact form input fields and send to 'Ricks' Email
								"email": contactForm.email.value,
								"first_name": contactForm.f_name.value
							})
							.then(
								function(response) {
									console.log("SUCCESS", response);
									$("#success-form").html("E-mail has been sent to the Developer!");    // message will output on the page if successful
								},
								function(error) {
									console.log("FAILED", error);
									$("#success-form").html("Something went wrong... E-mail Error!");  // error message will appear in label if there are any errors submitting form
								}
							);
						}

			
                    }
			
                }
			
            }
        }


    }

    return false;  // To block from loading a new page
    
}