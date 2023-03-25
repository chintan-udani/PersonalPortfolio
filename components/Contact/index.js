import React from 'react'

const Contact = () => {
  return (
    <>
    <form name="contact" method="POST" netlify>
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

    </>
  );
};

export default Contact