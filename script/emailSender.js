/**
 * Email Sender Module
 * Handles email sending via EmailJS by initializing with a public key, serviceId and templateId
 * and sending form data on submission.
*/

import personalData from "../data/personalData.js";

export default function emailSender() {
    // add you publicKey serviceId and templateId in data folder (personal-data.js)
    const publicKey = personalData.publicKey;
    const serviceId = personalData.serviceId;
    const templateId = personalData.templateId;

    // Initialize EmailJS with the public key
    emailjs.init(publicKey);
    
    document.getElementById("contact-form").addEventListener("submit", (event) => {
        event.preventDefault();

        // Collect form data from input fields
        const formData = {
            name: document.querySelector("#contact-form #input-name").value,   // input name value
            email: document.querySelector("#contact-form #input-email").value, // input email value
            message: document.querySelector("#contact-form #input-message").value // input message value
        };

        console.log("Sending email with data:", formData); // Log the form data for debugging

        // Send the email using EmailJS
        emailjs.send(serviceId, templateId, formData)
            .then((response) => {
                // Success callback
                console.log("Email sent successfully:", response); // Log the success response
                alert("Message sent successfully!"); // Notify the user of success
                document.getElementById("contact-form").reset(); // Reset the form fields
            })
            .catch((error) => {
                // Error callback
                console.error("Failed to send email:", error); // Log the error
                alert("Failed to send message. Please try again."); // Notify the user of failure
            });
    });
}
