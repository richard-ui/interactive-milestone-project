
function sendMail(contactForm) {
    emailjs.send("service_csslju6", "Rick", {
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
            $("#success-form").html("E-mail has been sent!");
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}