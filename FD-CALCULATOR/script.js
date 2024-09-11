function calculateMaturityAmount(){
    //get input from form elements

    const principle = parseFloat(document.getElementById("principle").value)
    const interestRate = parseFloat(document.getElementById("interestrate").value)
    const tenure = parseFloat(document.getElementById("tenure").value)

    //perform the calculation

    const MaturityAmount = principle + (principle * interestRate * tenure)/100 
    
    // Display result

    document.getElementById("result").innerText = `Maturity Amount: ${MaturityAmount.toFixed(2)}`;

    //Attach the eventListener

    
}
document.getElementById("calculateBtn").addEventListener('click' ,()=>{
       calculateMaturityAmount()
    })