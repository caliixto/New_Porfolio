document.addEventListener("DOMContentLoaded", (event)=>{


        setTimeout(()=>{
        document.querySelector("#load-iframe-map").innerHTML = `
        <iframe  class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidthe="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194348.23365593606!2d-3.844337180442472!3d40.437837294857474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!5e0!3m2!1ses!2ses!4v1750509411557!5m2!1ses!2ses" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
        }, 500);


})