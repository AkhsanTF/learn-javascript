let checkBox = document.getElementById("checkBox");
let visaBtn= document.getElementById("visaBtn");
let mastercardBtn= document.getElementById("mastercardBtn");
let paypalBtn= document.getElementById("paypalBtn");
let submitBtn= document.getElementById("submitBtn");
let p1= document.getElementById("p1");
let p2= document.getElementById("p2");

submitBtn.onclick = function() {
    
    if(checkBox.checked){
        p1.textContent = `You are subscribed`
    } else {
        p1.textContent = `You are NOT subscribed`
    }
    
    if(visaBtn.checked) {
        p2.textContent = `Your payment with Visa`
    }else if (mastercardBtn.checked) {
        p2.textContent = `Your payment with MasterCard`
    }else if (paypalBtn.checked) {
        p2.textContent = `Your payment with Paypal`
    }else {
        p2.textContent = `You have not choosen a payment yet`
    }
}
