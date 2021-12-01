

const ResidentBtn = document.querySelector('button')

const buttonClicked = () => {
    console.log('button clicked')

    

    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
.then(response =>{
    console.log(response.data.results[0])

    for(i = 0; i < response.data.results[0].residents; i++){
        
    }
})
}


addEventListener('click', buttonClicked)
