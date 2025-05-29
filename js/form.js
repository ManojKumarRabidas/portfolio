/**
 * Form Handling JavaScript file for Manoj Kumar Rabidas Portfolio
 * Author: Manoj Kumar Rabidas
 * Version: 1.0
 */

/**
 * Initialize form handling functionality
 */
export function initializeFormHandling() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    // Add form submission handler
    contactForm.addEventListener('submit', handleFormSubmit);
    
    // Add input validation
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
      input.addEventListener('blur', validateInput);
      input.addEventListener('input', () => {
        // Remove error messages when user starts typing
        const errorMessage = input.parentElement.querySelector('.error-message');
        if (errorMessage) {
          errorMessage.remove();
          input.classList.remove('error');
        }
      });
    });
  }
}

/**
 * Handle form submission
 * @param {Event} e - Form submit event
 */
function handleFormSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData.entries());
  
  // Validate all inputs
  const nameInput = form.querySelector('#name');
  const emailInput = form.querySelector('#email');
  const subjectInput = form.querySelector('#subject');
  const messageInput = form.querySelector('#message');
  
  const isNameValid = validateInput({ target: nameInput });
  const isEmailValid = validateInput({ target: emailInput });
  const isSubjectValid = validateInput({ target: subjectInput });
  const isMessageValid = validateInput({ target: messageInput });
  
  // If all inputs are valid, submit the form
  if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
    // In a real application, you would send the form data to a server
    // For this demo, we'll just simulate a successful submission
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="btn-text">Sending...</span>';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
      // Show success message
      form.innerHTML = `
        <div class="form-success">
          <h3>Message Sent!</h3>
          <p>Thank you for your message, ${formValues.name}. I'll get back to you as soon as possible.</p>
        </div>
      `;
      
      // Add success animation
      const successMessage = form.querySelector('.form-success');
      successMessage.classList.add('scale-in');
      
    }, 1500);
  }
}

/**
 * Validate form input
 * @param {Event} e - Input blur event
 * @returns {boolean} - True if input is valid
 */
function validateInput(e) {
  const input = e.target;
  const value = input.value.trim();
  let isValid = true;
  let errorMessage = '';
  
  // Remove existing error message
  const existingError = input.parentElement.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }
  
  // Validate based on input type
  switch (input.id) {
    case 'name':
      if (value === '') {
        isValid = false;
        errorMessage = 'Please enter your name';
      } else if (value.length < 2) {
        isValid = false;
        errorMessage = 'Name should be at least 2 characters long';
      }
      break;
      
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value === '') {
        isValid = false;
        errorMessage = 'Please enter your email address';
      } else if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
      }
      break;
      
    case 'subject':
      if (value === '') {
        isValid = false;
        errorMessage = 'Please enter a subject';
      } else if (value.length < 3) {
        isValid = false;
        errorMessage = 'Subject should be at least 3 characters long';
      }
      break;
      
    case 'message':
      if (value === '') {
        isValid = false;
        errorMessage = 'Please enter your message';
      } else if (value.length < 10) {
        isValid = false;
        errorMessage = 'Message should be at least 10 characters long';
      }
      break;
  }
  
  // Show error message if invalid
  if (!isValid) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = errorMessage;
    errorElement.style.color = 'var(--error-color)';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginTop = '0.25rem';
    errorElement.style.animation = 'fadeIn 0.3s ease';
    
    input.parentElement.appendChild(errorElement);
    input.classList.add('error');
  } else {
    input.classList.remove('error');
  }
  
  return isValid;
}