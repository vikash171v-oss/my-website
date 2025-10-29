document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  alert(`Thanks ${name}! (This is just a demo — no message was sent.)`);
});
