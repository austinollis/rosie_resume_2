emailjs.send('rosie2', 'template_ig7tosz',{
        "from_name": name.value,
        "from_email": emailaddress.value,
        "project_request": projectsummary.value
    })
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });