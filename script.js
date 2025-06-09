// Changing the style of scroll bar
// window.onscroll = function() {myFunction()};
		
// function myFunction() {
// 	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
// 	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// 	var scrolled = (winScroll / height) * 100;
// 	document.getElementById("myBar").style.width = scrolled + "%"; 
// }

document.addEventListener("DOMContentLoaded", function () {
    // Scroll animations
    function scrollAppear() {
        const introText = document.querySelector('.side-text');
        const sideImage = document.querySelector('.sideImage');
        
        if (!introText || !sideImage) return;
        
        const introPosition = introText.getBoundingClientRect().top;
        const imagePosition = sideImage.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if(introPosition < screenPosition) {
            introText.classList.add('side-text-appear');
        }
        if(imagePosition < screenPosition) {
            sideImage.classList.add('sideImage-appear');
        }
    }

    window.addEventListener('scroll', scrollAppear);

    // Form handling
    const loginForm = document.getElementById("login");
    const registerForm = document.getElementById("register");
    const btnSlider = document.getElementById("btn");
    const loginTab = document.getElementById("log");
    const registerTab = document.getElementById("reg");
    const otherOptions = document.getElementById("other");

    if (loginForm && registerForm && btnSlider && loginTab && registerTab && otherOptions) {
        // Your existing login/register code here
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const roadmap1 = document.getElementById("roadmap1");
  const roadmap2 = document.getElementById("roadmap2");

  // Add event listeners for the roadmap options
  roadmap1.addEventListener("click", () => {
      // You can add code to navigate to the first roadmap page here
      alert("Explore Roadmap 1 for your education journey!");
  });

  roadmap2.addEventListener("click", () => {
      // You can add code to navigate to the second roadmap page here
      alert("Discover Roadmap 2 for your educational goals!");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const volunteerForm = document.getElementById("volunteer-form");
  const donateButton = document.getElementById("donate-button");

  // Submit volunteer form
  volunteerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // You can send this data to your server for processing or save it in a database
      // For now, we'll just display an alert
      alert(`Thank you, ${name}! Your volunteer information has been submitted.`);
      
      // Clear the form
      volunteerForm.reset();
  });

  // Handle donation button click
  donateButton.addEventListener("click", function () {
      // You can implement the donation processing logic here (e.g., redirect to a payment gateway)
      alert("Thank you for your donation!");
  });
});
