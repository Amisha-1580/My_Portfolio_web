window.onload=()=>{document.getElementById('loader').style.display='none'}
document.getElementById('contactForm').addEventListener('submit',e=>{
e.preventDefault();
alert('Message sent successfully!');
});
