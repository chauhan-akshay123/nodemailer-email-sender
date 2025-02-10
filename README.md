# Nodemailer Email Sender

This is a simple Node.js application that demonstrates how to send emails using the Nodemailer library. It includes a basic Express.js server with a GET route to trigger the email sending process.

**Features:**

*   Sends emails using Nodemailer.
*   Uses Ethereal email service for testing purposes.
*   Includes basic error handling.

**Getting Started:**

1. **Install dependencies:**

   ```bash
   npm install

2. **Run the server:**
   
    ```bash
   node app.js

3. **Send an email:**   
- make a GET request to ``/mail``   

**Explanation:**
- **app.js:**
- Sets up the Express.js server.
- Defines a GET route (``/``) for a basic welcome message.
- Defines a GET route (``/mail``) that triggers the ``sendMail`` function.
- Handles server startup and potential errors.

**SendMail.js:**
- Imports the nodemailer library
- Creates a Nodemailer transporter using Ethereal email service for testing.
- Sends an email with a subject, plain text, and HTML content.
- Logs the message ID and sends a success response.
- Includes error handling to catch potential issues during email sending.
