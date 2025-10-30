let destinations = ["a", "b", "c", "d", "e"]
let countries = document.querySelector('.countries')
let countryBtn = document.querySelector('.selectedDestinationBtns')

destinations.forEach(destination => { 
    let option = document.createElement('option')
    option.value = destination
    option.innerHTML = destination
    countries.append(option)
    // console.log(option.value);
});

document.addEventListener('change', function(){
    let countriesBtn = document.createElement('button')
        countriesBtn.value = countries.value
        countriesBtn.innerHTML = `${countries.value}<i class="fa-solid fa-xmark ms-2"></i>`
        countryBtn.append(countriesBtn)
        countriesBtn.classList.add('destinationTag','closeBtn')
        // console.log(countries.value);
})

countryBtn.addEventListener('click', function(event){
    if(event.target.classList.contains('fa-xmark')){
        let btn = event.target.closest('button')
        console.log(btn.value);
        btn.remove()
        
    }

})


