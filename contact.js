window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const serviceID = 'default_service';
        const templateID = 'template_ctsgu3i';
        emailjs.sendForm(serviceID, templateID, this)
            .then(function() {
                alert("SUCCESS")
            
            }, function(error) {
                alert("FAILED")
            });
    });
}
 