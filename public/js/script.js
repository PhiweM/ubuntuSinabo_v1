 // get references to the menu icon and mobile nav elements
 var menuIcon = $('#menu-icon');
 var mobileNav = $('#mobile-nav');

 // add click event listeners to the menu icon
 menuIcon.click(changeIcon);
 menuIcon.click(displayMobileMenu);

 // Function to change the menu icon in mobile view
 function changeIcon() {
   if (menuIcon.hasClass('fa-xmark')) {
     menuIcon.removeClass('fa-xmark').addClass('fa-bars');
   } else if (menuIcon.hasClass('fa-bars')) {
     menuIcon.removeClass('fa-bars').addClass('fa-xmark');
   }
 }

 // Function to display the mobile nav in mobile view
 function displayMobileMenu() {
   if (mobileNav.css('display') === 'block') {
     mobileNav.css('display', 'none');
   } else {
     mobileNav.css('display', 'block');
   }
 }

 $('#show-login').click(function(e) {
    e.preventDefault();
    $('#create-account').toggle();
    $('#login-account').toggle();
  });

  $('#show-create').click(function(e) {
    e.preventDefault();
    $('#login-account').toggle();
    $('#create-account').toggle();
  });



// Get user's location
navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  
  // Call a reverse geocoding API with the latitude and longitude
  const apiKey = 'af55b5b1e3ad448ab185e27adef29ffe';
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&pretty=1`;

  // Fetch the location data
  $.getJSON(url, function(data) {
    // Extract the location data from the API response
    const location = data.results[0].formatted;
    // Update the text of an existing paragraph element on the page
    $('.location-text').text(`Current location: ${location}`);
  });
}

function error() {
  console.log('Unable to retrieve your location');
}



















// let menuIcon = document.getElementById('menu-icon');
// let mobileNav = document.getElementById('mobile-nav')
// menuIcon.addEventListener('click', changeIcon)
// menuIcon.addEventListener('click', displayMobileMenu)

// // Function to display the menuIcon in mobile view
// function changeIcon() {
//     if(menuIcon.classList.contains('fa-xmark')){
//         menuIcon.classList.replace('fa-xmark','fa-bars');
//     }
//     else if(menuIcon.classList.contains('fa-bars')){
//         menuIcon.classList.replace('fa-bars', 'fa-xmark');
//     }
// }

// // function to display the menu nav in mobile view
// function displayMobileMenu() {
//     if (mobileNav.style.display === "block") {
//             mobileNav.style.display = "none";
//         } 
//         else {
//             mobileNav.style.display = "block";
//         }
// }


// let Client = {
//     Name: "Panasonic",
//     Designation: "Sponsor"
// }

// let client = document.getElementById('clients');
// client.innerHTML = ` <p> ${Client.Name} <span>/ ${Client.Designation}</span></p>`;

// // create new element and append to clients div
// let newEl = document.createElement('p');
// let newNode = document.createTextNode('Canon/ Partners');
// newEl.appendChild(newNode);
// client.appendChild(newEl);


// add grayscale to all project images.
// const sect = document.getElementById('section');
// const imgs = sect.childNodes;

// for(let i = 0; i < imgs.length; i++) {
//     imgs[i].style.filter  = 'grayscale(1)';
// }

