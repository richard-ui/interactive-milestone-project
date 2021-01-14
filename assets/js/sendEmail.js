
function sendMail(contactForm) {

    // empty all form input fields to ""

    $("#f_name_label").html(""), $("#l_name_label").html(""), $("#phone_label").html(""),
    $("#email_label").html(""), $("#date_label").html(""), $("#hour_label").html("");

    document.getElementById('f_name').classList.remove("red"), document.getElementById('l_name').classList.remove("red"),
    document.getElementById('phone').classList.remove("red"), document.getElementById('email').classList.remove("red"),
    document.getElementById('date').classList.remove("red"), document.getElementById('hour').classList.remove("red");

    /* Credits: Here is code to check whether input fields are empty from techiedelight.com */
   
    if (!$('#f_name').val()) {    // use of jQuery for validation
        document.getElementById('f_name').classList.add("red");
      $("#f_name_label").html("Please Enter your First Name!");  // output
    }
    else if (!$('#l_name').val()) {
        document.getElementById('l_name').classList.add("red");
      $("#l_name_label").html("Please Enter your Last Name!");
    }
    else if (!$('#phone').val()) {
        document.getElementById('phone').classList.add("red");
      $("#phone_label").html("Please Enter your Phone Number!");
    }
    else if (!$('#email').val()) {
        document.getElementById('email').classList.add("red");
      $("#email_label").html("Please Enter your E-mail!");
    }
    else if (!$('#date').val()) {
        document.getElementById('date').classList.add("red");
      $("#date_label").html("Please Enter a Date!");
    }
    else if (!$('#hour').val()) {
        document.getElementById('hour').classList.add("red");
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