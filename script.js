document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('enquiryForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            responseMessage.textContent = `Thank you, ${name}! We have received your message: "${message}" We will respond to you at ${email} soon.`;
            form.reset();
        } else {
            responseMessage.textContent = 'Please fill out all fields.';
        }
    });
});
