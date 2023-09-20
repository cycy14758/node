// Import the generate function from the generate-password package
const generatePassword = require('generate-password');

// Define an async function to generate a random password
async function generateRandomPassword() {
  return generatePassword.generate({
    length: 12,           // Length of the password (adjust as needed)
    numbers: true,        // Include numbers in the password
    symbols: true,        // Include symbols in the password
    uppercase: true,      // Include uppercase letters in the password
    strict: true,         // Ensure the password meets all requirements
  });
}

// Generate a random password and log it to the console using async/await
(async () => {
  const password = await generateRandomPassword();
  console.log('Generated Password:', password);
})();

