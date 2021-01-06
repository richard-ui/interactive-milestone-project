
function sendMail(contactForm) {

    // empty all form input fields to ""
    $("#f_name_label").html(""), $("#l_name_label").html(""), $("#phone_label").html(""),
    $("#email_label").html(""), $("#date_label").html(""), $("#hour_label").html("");

    /* Credits: Here is code to check whether input fields are empty from techiedelight.com */
   
    if (!$('#f_name').val()) {    // use of jQuery for validation
      $("#f_name_label").html("Please Enter your First Name!");  // output
    }
    else if (!$('#l_name').val()) {
      $("#l_name_label").html("Please Enter your Last Name!");
    }
    else if (!$('#phone').val()) {
      $("#phone_label").html("Please Enter your Phone Number!");
    }
    else if (!$('#email').val()) {
      $("#email_label").html("Please Enter your E-mail!");
    }
    else if (!$('#date').val()) {
      $("#date_label").html("Please Enter a Date!");
    }
    else if (!$('#hour').val()) {
      $("#hour_label").html("Please Enter a Time!");
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
    .then(
        function(response) {
            console.log("SUCCESS", response);
            $("#success-form").html("E-mail has been sent!");    // message will output on the page if successful
        },
        function(error) {
            console.log("FAILED", error);
            $("#success-form").html("E-mail Error!");  // error message will appear in label if there are any errors submitting form
        }
    );
    }
    return false;  // To block from loading a new page
}