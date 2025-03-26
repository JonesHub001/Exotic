var toggleButton = document.getElementsByClassName('toggle-button')[0]
var navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click',() => {
	navbarLinks.classList.toggle('active')
})



// Removed invalid <script> tag. Ensure the EmailJS script is included in the HTML file.

    // Initialize EmailJS
    emailjs.init("bureTdiiB3seKPaKA"); // Replace with your EmailJS Public Key

    // Handle form submission
    document.getElementById('sm-form').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = {
            fname: document.getElementsByName('fname')[0].value.trim(),
            lname: document.getElementsByName('lname')[0].value.trim(),
            email: document.getElementsByName('email')[0].value.trim(),
            phone: document.getElementsByName('phone')[0].value.trim(),
            message: document.getElementsByName('message')[0].value.trim(),
            address: document.getElementsByName('address')[0].value.trim(),
            pname: document.getElementsByName('pname')[0].value.trim(),


        };

        // Validate required fields
        let errorMessage = '';
        if (!formData.fname) errorMessage += 'First name is required.\n';
        if (!formData.lname) errorMessage += 'Last name is required.\n';
        if (!formData.email) errorMessage += 'Email is required.\n';
        if (!formData.message) errorMessage += 'Message is required.\n';
        if (!formData.address) errorMessage += 'Address is required.\n';
        if (!formData.pname) errorMessage += 'Product name is required.\n';

        if (errorMessage) {
            document.querySelector('.error-msg').textContent = errorMessage;
            document.querySelector('.error-msg').style.display = 'block';
            document.querySelector('#thanks_msg').style.display = 'none';
            return;
        }

        // Send email using EmailJS
        emailjs.send("service_53hyd8i", "template_tbdj4vl", formData)
            .then(function (response) {
                console.log("SUCCESS!", response.status, response.text);
                document.querySelector('#thanks_msg').style.display = 'block';
                document.querySelector('.error-msg').style.display = 'none';
                document.getElementById('sm-form').reset(); // Clear the form
            }, function (error) {
                console.log("FAILED...", error);
                document.querySelector('.error-msg').textContent = 'Failed to send your message. Please try again.';
                document.querySelector('.error-msg').style.display = 'block';
                document.querySelector('#thanks_msg').style.display = 'none';
            });
    });
