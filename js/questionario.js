(function(){
    const sliders = [...document.querySelectorAll('.testimony__bodyy')]//obrener la section de testimony
    const buttonNext = document.querySelector('#next');//botones de siguiente
    const buttonBefore = document.querySelector('#before')//botones de atras
    
    let value;
    
    buttonNext.addEventListener('click',()=>{
        changePosition(1)
    })
    
    buttonBefore.addEventListener('click',()=>{
        changePosition(-1)    
    })


const changePosition = (add) => {
    const currentTestimony = document.querySelector('.testimony__body--showw ').dataset.id
    
    value = Number(currentTestimony)
    value += add
    

    sliders[Number(currentTestimony)-1].classList.remove('testimony__body--showw')
    if(value === sliders.length+1 || value === 0 ){
        value = value === 0 ? sliders.length : 1;
        
     }
     sliders[value -1].classList.add('testimony__body--showw');

}


console.log(sliders);
})();