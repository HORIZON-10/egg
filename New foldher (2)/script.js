function generateGreeting() {
    const name = document.getElementById("nameInput").value;
    const greetingDiv = document.getElementById("greetingMessage");
    
    if (name) {
        greetingDiv.innerHTML =`&#129305 Shubho Bijoya, ${name}!<br> Wishing you happiness <br>  prosperity  <br> a day  of love ,unity <br> and greetings 
       <br> from Diganta. &#129505 <br> Stay always happy . &#128519`;
    } else {
        greetingDiv.innerHTML = "No chitting &#128544 <br> Enter your name name";
    }
}
