function sendMail(contactForm) {
    emailjs.send('icloud', 'rosie', {
        'from_name': contactForm.name.value,
        'from_email': contactForm.emailaddress.value,
        'project_request': contactForm.projectsummary.value
    }, 'thPcIT5HXr2cpQXjT').then(
        function(response) {
            console.log('Success', response);
        },
        function(error) {
            console.log('Failed', error);
        }
    );
    return false;
}