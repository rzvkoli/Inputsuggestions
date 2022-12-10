getCountries("https://laravel-world.com/api/countries");

async function getCountries(file){
    let response = await fetch(file);

    let data = await response.text();
    
    let object = JSON.parse(data);

    let countries = object.data;

    document.getElementById('countries').innerHTML=countries.map((countriy) => {
        return (
            '<option id="countriy" >'+countriy.name+'</option>'
        );
    });
}