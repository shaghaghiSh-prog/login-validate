// script.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 } },
            opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
            line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
        },
        retina_detect: true
    });

    // Add fade-in animation to form container
    document.querySelector('.auth-container').classList.add('fade-in');

   

 

    // Add input animation
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('input-focus');
        });
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('input-focus');
            }
        });
    });

   
});















function validate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Check if fields are empty
    if (username === "" || password === "") {
        alert("Please fill in both fields.");
        return false;
    }

    // Check if password length is less than 8
    if (password.length < 8) {
        alert("Password is too short. It must be at least 8 characters long.");
        return false;
    }

    // Check if password includes at least one number
    if (!/\d/.test(password)) {
        alert("Password must include at least one number.");
        return false;
    }

    // Check if password includes specific special characters
    const specialCharacters = /[+\-*/@#$%^&*()_+=!]/; // Add more special characters as needed
    if (!specialCharacters.test(password)) {
        alert("Password must include at least one special character (e.g., +, *, /, @, #, $, %, ^).");
        return false;
    }

    // Check if password includes at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        alert("Password must include at least one uppercase letter.");
        return false;
    }

    // If all checks pass
    return true;
}


function formvalidate() {
  if (validate()=== true) {

          let sperson = [
              {
                  username: "shayan",
                  password: "Sh@yan001",
                  role: 1,
              },
              {
                  username: "amir",
                  password: "Am@Amir001",
                  role: 1,
              },
              {
                  username: "ahmad",
                  password: "@AHmad001",
                  role: 2,
              },
              {
                  username: "sara",
                  password: "S@ra001001",
                  role: 2,
              }
          ];
          let username = document.getElementById("username").value;
          let password = document.getElementById("password").value;


          let user = sperson.find(function (item) {
              return item.username === username && item.password === password;
          });

          if (user) {

              if (user.role === 1) {
                localStorage.setItem("LoggedInAdmin", user.username); // Store admin username

                  console.log("yes , its admin");
                  window.location.href = "admin.html";
              } else if (user.role === 2) {
                localStorage.setItem("loggedInUser", user.username);

                  window.location.href = "user.html";

                  console.log("no , its not admin , its a normal user");
              }
          } else {
              console.log("not user , not admin so go to register");
              window.location.href = "register.html";

          }
      }


}


// |||||||||||||||||||||||||||||||||||||| VALIDATE REGISTER|||||||||||||||||||||||||||||||||||||



function validateRegister() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;


    // Check if fields are empty
    if (name === "" || password === "" || email === "" || confirmPassword === "") {
        alert("Please fill the fields.");
        return false;
    }

    // Check if password length is less than 8
    if (password.length < 8) {
        alert("Password is too short. It must be at least 8 characters long.");
        return false;
    }

    // Check if password includes at least one number
    if (!/\d/.test(password)) {
        alert("Password must include at least one number.");
        return false;
    }

    // Check if password includes specific special characters
    const specialCharacters = /[+\-*/@#$%^&*()_+=!]/; // Add more special characters as needed
    if (!specialCharacters.test(password)) {
        alert("Password must include at least one special character (e.g., +, *, /, @, #, $, %, ^).");
        return false;
    }

    // Check if password includes at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        alert("Password must include at least one uppercase letter.");
        return false;
    }
    if (password != confirmPassword) {
        alert("Confirm pass  must same as password ");
        return false;
    }

    // If all checks pass
    return true;
}





function imanKhar() {
    if (validateRegister() === true) {
        alert("WELLCOME , U WILL LOGIN IN 24H (*_^)")
        window.location.href = "../../index.html";

    }

    
}



