const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

if (toggleButton && navbarLinks) {
  toggleButton.addEventListener('click', (event) => {
    event.preventDefault();
    const isActive = navbarLinks.classList.toggle('active');
    toggleButton.setAttribute('aria-expanded', String(isActive));
  });
}

const contactForm = document.getElementById('sm-form');

if (contactForm && typeof emailjs !== 'undefined') {
  emailjs.init('bureTdiiB3seKPaKA');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
      fname: document.getElementsByName('fname')[0]?.value.trim() || '',
      lname: document.getElementsByName('lname')[0]?.value.trim() || '',
      email: document.getElementsByName('email')[0]?.value.trim() || '',
      phone: document.getElementsByName('phone')[0]?.value.trim() || '',
      message: document.getElementsByName('message')[0]?.value.trim() || '',
      address: document.getElementsByName('address')[0]?.value.trim() || '',
      pname: document.getElementsByName('pname')[0]?.value.trim() || ''
    };

    let errorMessage = '';
    if (!formData.fname) errorMessage += 'First name is required.\n';
    if (!formData.lname) errorMessage += 'Last name is required.\n';
    if (!formData.email) errorMessage += 'Email is required.\n';
    if (!formData.message) errorMessage += 'Message is required.\n';
    if (!formData.address) errorMessage += 'Address is required.\n';
    if (!formData.pname) errorMessage += 'Product name is required.\n';

    const errorBox = document.querySelector('.error-msg');
    const thanksBox = document.querySelector('#thanks_msg');

    if (errorMessage) {
      if (errorBox) {
        errorBox.textContent = errorMessage;
        errorBox.style.display = 'block';
      }
      if (thanksBox) thanksBox.style.display = 'none';
      return;
    }

    emailjs.send('service_53hyd8i', 'template_tbdj4vl', formData).then(
      function () {
        if (thanksBox) thanksBox.style.display = 'block';
        if (errorBox) errorBox.style.display = 'none';
        contactForm.reset();
      },
      function () {
        if (errorBox) {
          errorBox.textContent = 'Failed to send your message. Please try again.';
          errorBox.style.display = 'block';
        }
        if (thanksBox) thanksBox.style.display = 'none';
      }
    );
  });
}
