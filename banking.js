

const getInputValue=(inputId)=>{
    return document.getElementById(inputId)
}//inputValidation
function inputValidation(value,option){
    if(option=='deposite'){
        if(!isNaN(value)==true){
            if(value>0){
                return value
            }else{
                getInputValue('deposite-negative').style.display='block'
            }
            
        }else{
            getInputValue('deposite-number').style.display='block'
    
        }

    }else if(option=='withdraw'){
        if(!isNaN(value)==true){
            if(value>0){
                return value
            }else{
                getInputValue('withdraw-negative').style.display='block'
            }
            
        }else{
            getInputValue('withdraw-number').style.display='block'
    
        }

    }
    
}
//depositeCalculation
function depositeCalculation(){
    const depositeAmount=parseFloat(inputValidation(getInputValue('deposite-amount').value,'deposite'))
    const currentDeposite=parseFloat(getInputValue('current-deposite').innerText)
    const currentBlance=parseFloat(getInputValue('current-balance').innerText)
    if(!isNaN(depositeAmount)){
        getInputValue('current-deposite').innerText=currentDeposite+depositeAmount
        getInputValue('current-balance').innerText=currentBlance+depositeAmount

    }

}
//withdrawCalculation
function withdrawCalculation(){
    const currentBlance=parseFloat(getInputValue('current-balance').innerText)
    const currentWithdraw=parseFloat(getInputValue('current-withdraw').innerText)
    const withdrawAmount=parseFloat(inputValidation(getInputValue('withdraw-amount').value,'withdraw'))
    if(!isNaN(withdrawAmount)){
        if(currentBlance>=withdrawAmount){
            getInputValue('current-balance').innerText=currentBlance- withdrawAmount
            getInputValue('current-withdraw').innerText=currentWithdraw+withdrawAmount
        }else{
            getInputValue('insufficient-blance').style.display="block"
        }
    }
}
//

//eventHandle
const eventHandle=(buttonId,option,id)=>{
    getInputValue(buttonId).addEventListener('click',()=>{
        if(option=='deposite'){
            console.log('deposite clicked')
            depositeCalculation()

        }else if(option=='withdraw'){
            console.log('withdraw clicked')
            withdrawCalculation()

        }else if(option=='cross'){
            switch(id){
                case 'cross':
                    getInputValue('insufficient-blance').style.display="none";
                    getInputValue('withdraw-amount').value='';
                    break
                case 'd-negative-cross':
                    getInputValue('deposite-negative').style.display='none'
                    getInputValue('deposite-amount').value='';
                    break
                case 'd-number-cross':
                    getInputValue('deposite-number').style.display='none'
                    getInputValue('deposite-amount').value='';
                    break
                case 'w-negative-cross':
                    getInputValue('withdraw-negative').style.display='none'
                    getInputValue('withdraw-amount').value='';
                    break
                case 'w-number-cross':
                    getInputValue('withdraw-number').style.display='none'
                    getInputValue('withdraw-amount').value='';
                    break
            }
        }
       
    })
}
eventHandle('deposite-button','deposite')
eventHandle('withdraw-button','withdraw')
eventHandle('cross','cross','cross')
eventHandle('d-negative-cross','cross','d-negative-cross')
eventHandle('d-number-cross','cross','d-number-cross')
eventHandle('w-negative-cross','cross','w-negative-cross')
eventHandle('w-number-cross','cross','w-number-cross')