console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}

let navLinks = $$("nav a");
let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);
currentLink?.classList.add("current");
// Define your pages
const pages = [
    {url: ".", title: "Home"},
    {url: "Projects", title: "Projects"},
    {url: "Contact", title: "Contact"},
    {url: "cv", title: "Resume"},
    {url: "https://github.com/dashboard", title: "GitHub"}
];
// Check if we're on the home page
const ARE_WE_HOME = document.documentElement.classList.contains("home");
function createNavigation() {
    const nav = document.createElement("nav");
    
    for (let p of pages) {
        let url = p.url;
        let title = p.title;
        
        // Adjust URL if not on home page and not an absolute URL
        if (!ARE_WE_HOME && !url.startsWith("http")) {
            url = "../" + url;
        }
        let a = document.createElement("a");
        a.href = url;
        a.textContent = title;
        
        // Add 'current' class if it's the current page
        a.classList.toggle("current", a.host === location.host && a.pathname === location.pathname);
        
        // Add target="_blank" for external links
        if (a.host !== location.host) {
            a.target = "_blank";
        }
        
        nav.appendChild(a);
    }
    
    document.body.prepend(nav);
}

// Call the function to create the navigation
createNavigation();
function setupColorScheme() {
  console.log("setupColorScheme function called");
  let select = document.querySelector('.color-scheme select');
  
  if (!select) {
      console.log("Select element not found, creating it");
      const label = document.createElement('label');
      label.className = 'color-scheme theme-switcher';
      label.textContent = 'Theme: ';
      
      select = document.createElement('select');
      const options = [
          {value: 'auto', text: 'Automatic'},
          {value: 'light', text: 'Light'},
          {value: 'dark', text: 'Dark'}
      ];
      
      options.forEach(option => {
          const optionElement = document.createElement('option');
          optionElement.value = option.value;
          optionElement.textContent = option.text;
          select.appendChild(optionElement);
      });
      
      label.appendChild(select);
      document.body.insertAdjacentElement('afterbegin', label);
  }

  console.log("Select element:", select);

  function setColorScheme(scheme) {
      console.log("Setting color scheme to:", scheme);
      if (scheme === 'auto') {
          document.documentElement.removeAttribute('data-theme');
      } else {
          document.documentElement.setAttribute('data-theme', scheme);
      }
      select.value = scheme;
      localStorage.setItem('colorScheme', scheme);
  }

  select.addEventListener('change', function(event) {
      console.log("Select value changed to:", event.target.value);
      setColorScheme(event.target.value);
  });

  const savedScheme = localStorage.getItem('colorScheme') || 'auto';
  console.log("Found saved scheme:", savedScheme);
  setColorScheme(savedScheme);
}
  function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const data = new FormData(form);
            let mailtoUrl = 'mailto:emmangabire2000@gmail.com';
            let subject = encodeURIComponent(data.get('subject') || '');
            let body = encodeURIComponent(data.get('body') || '');
            mailtoUrl += `?subject=${subject}&body=${body}`;
            location.href = mailtoUrl;
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
  setupColorScheme();
  setupContactForm();
  // Any other initialization functions...
});