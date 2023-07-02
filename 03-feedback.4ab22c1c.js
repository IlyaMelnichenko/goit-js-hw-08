!function(){var e=document.querySelector(".feedback-form"),a=e.querySelector('input[name="email"]'),t=e.querySelector('textarea[name="message"]'),n=(a.value,t.value,{});e.addEventListener("input",(function(e,a){n.email=e,n.message=a,localStorage.setItem("feedback-form-state",JSON.stringify(n))})),console.log(a.value)}();
//# sourceMappingURL=03-feedback.4ab22c1c.js.map
