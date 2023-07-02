const e=document.querySelector(".feedback-form"),t=e.querySelector('input[name="email"]'),a=e.querySelector('textarea[name="message"]'),o=(t.value,a.value,{});e.addEventListener("input",(function(e,t){o.email=e,o.message=t,localStorage.setItem("feedback-form-state",JSON.stringify(o))})),console.log(t.value);
//# sourceMappingURL=03-feedback.7a6e301a.js.map
