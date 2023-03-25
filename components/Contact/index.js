import React from 'react'

const Contact = () => {
  return (
    <>
    <form action="https://airform.io/chintanudani2000@gmail.com" method="post">
      <input type="text" name="name" placeholder="Enter your name" />
    <textarea name="message" placeholder="Enter your message"></textarea>
    <button>Send</button>
</form>
    </>
  )
}

export default Contact;