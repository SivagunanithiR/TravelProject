import React from 'react';
import './ContactFormStyles.css';
import Swal from 'sweetalert2'; // Ensure SweetAlert2 is installed
import { Link } from 'react-router-dom';

function ContactForm() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Append the access key to the form data
    formData.append("access_key", "564df266-6e69-4c35-8007-e33148581011");

    // Convert form data to JSON
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      // Send form data to the API
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      // Check the response and show success message
      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success"
        });
      } else {
        // Handle errors or unsuccessful responses
        Swal.fire({
          title: "Error!",
          text: "Failed to send message.",
          icon: "error"
        });
      }
    } catch (error) {
      // Handle network or other errors
      Swal.fire({
        title: "Error!",
        text: "An error occurred while sending the message.",
        icon: "error"
      });
    }
  };

  return (
    <div className='from-container'>
      <h1>Send a message to us!</h1>
      <form onSubmit={onSubmit}>
        <input name='name' placeholder='Name' required />
        <input name='email' type='email' placeholder='Email' required />
        <input name='subject' placeholder='Subject' required />
        <textarea name='message' placeholder='Message' rows="4" required></textarea>
        <button type='submit'>Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;