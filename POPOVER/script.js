const mybtn = document.getElementById("mybtn");
const myPopover = document.getElementById("mypopover");
const closeBtn = document.getElementById("closeBtn");

    mybtn.addEventListener("click" , ()=>{

        myPopover.classList.add("active")
    })

    closeBtn.addEventListener("click" , ()=>{

        myPopover.classList.remove("active")
    })

    
