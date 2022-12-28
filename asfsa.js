[...document.querySelectorAll("article")].filter(el => {
    if (el.querySelectorAll(".rule__categories__type:nth-child(2)[aria-hidden=true]").length > 0 && el.querySelectorAll(".rule__categories__type:nth-child(3):not([aria-hidden])").length > 0) return el
    
}).map(el => `'${el.querySelector("a").innerText}': [2],`).join('\n');