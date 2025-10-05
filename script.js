document.addEventListener("DOMContentLoaded", function() {
    // Add collapsible functionality
    const collapsibles = document.querySelectorAll(".collapsible");
    collapsibles.forEach(button => {
        button.addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            if(content.style.maxHeight){
                content.style.maxHeight = null;
                content.classList.remove("show");
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.classList.add("show");
            }
        });
    });

    // Clock function
    function startTime() {
        const today = new Date();
        const h = today.getHours();
        const m = today.getMinutes();
        const s = today.getSeconds();
        const clock = document.getElementById('txt');
        if(clock){
            clock.innerHTML = (h<10?'0'+h:h) + ":" + (m<10?'0'+m:m) + ":" + (s<10?'0'+s:s);
            setTimeout(startTime, 1000);
        }
    }
    startTime();
});
