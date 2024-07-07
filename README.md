
# Simple Login Page

### Introduction
This project is a simple web application featuring a login page integrated with both front-end and back-end components. The goal is to provide a practical example of how to create a login page using HTML, CSS, and JavaScript on the front-end, and Node.js, Express.js, and MySQL on the back-end.

### Features
- **Front-End:**
  - HTML5 and CSS3 for designing the user interface.
  - JavaScript for interaction and enhancing user experience.

- **Back-End:**
  - Node.js and Express.js for creating the API.
  - MySQL for storing user data.

### Requirements
- Node.js
- MySQL

### Installation
1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/username/simple-login-page.git
   cd simple-login-page
   \`\`\`

2. Install back-end dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Set up the database:
   Ensure MySQL is running and create a database named \`mydatabase\`. Update the database configuration in \`serveur.js\`:
   \`\`\`javascript
   const connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'password',
     database: 'mydatabase'
   });
   \`\`\`

4. Start the back-end server:
   \`\`\`bash
   node serveur.js
   \`\`\`

### Project Structure
- \`index.html\`: Main HTML page for the login interface.
- \`serveur.js\`: Back-end server configuration and database connection.
- \`package.json\`: Project dependencies and scripts.

### License
This project is licensed under the ISC License.
