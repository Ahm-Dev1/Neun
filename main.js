

window.addEventListener("load" , () => {
    const loader = document.getElementById("preloader");
    
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend" , () => {
        document.body.removeChild("loader");
    })
})



function sendMail(){
    var params = {
        form_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_xo45kq7" , "template_4ag1ddr" , params).then(function(res){
        alert("Success!" + res.status);
    })
}