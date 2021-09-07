const months = ["January", "February", "March", "April", 'May', "June", "July", 'August', 'September', "October", 'November', "December"]
const weatherText = document.querySelector('.weatherText');

fetch(`https://api.openweathermap.org/data/2.5/weather?q=pithoragarh&units=metric&appid=bbf4378d7abeb988c9b73ca8a24ec2a6`)
    .then((data) => {
        return data.json();
    }).then((data) => {
        if (data.name !== undefined) {
            let curr = new Date().getDate() + " " + months[new Date().getMonth()] + " 2021";
            let temp = `<span class="temp">${data.main.temp} &#176;C</span>`

            document.querySelector('.city_name').innerHTML = data.name;
            document.querySelector('.curr_date').innerHTML = curr;
            document.querySelector('.curr_temp').innerHTML = temp;
            document.querySelector('.desc').innerHTML = data.weather[0].description;
            document.querySelector('.icon').src = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

            document.querySelector('.maxmin_temp').innerHTML = data.main.temp_max + " &#176;C (max) / " + data.main.temp_min + " &#176;C (min) ";
        }
    }).catch((err) => {
        console.log(err.message);
    })

weatherText.addEventListener('keypress', function (e) {
    if (e.which === 13) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherText.value}&units=metric&appid=bbf4378d7abeb988c9b73ca8a24ec2a6`)
            .then((data) => {
                return data.json();
            }).then((data) => {
                if (data.name !== undefined) {
                    let curr = new Date().getDate() + " " + months[new Date().getMonth()] + " ,2021";
                    let temp = `<span class="temp">${data.main.temp} &#176;C</span>`

                    document.querySelector('.city_name').innerHTML = data.name;
                    document.querySelector('.curr_date').innerHTML = curr;
                    document.querySelector('.curr_temp').innerHTML = temp;
                    document.querySelector('.desc').innerHTML = data.weather[0].description;
                    document.querySelector('.icon').src = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";;

                    document.querySelector('.maxmin_temp').innerHTML = data.main.temp_max + " &#176;C (max) / " + data.main.temp_min + " &#176;C (min) ";
                    
                    let newUrl;
                    switch (data.weather[0].main) {
                        case 'Drizzle':
                            newUrl = "https://images.unsplash.com/photo-1565039752741-8004b7ad1bf0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80";
                            break;
                        case 'Clouds':
                            newUrl = "https://images.unsplash.com/photo-1469365556835-3da3db4c253b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNsb3VkcyUyMDE5ODAqMTA4MHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
                            break;
                        case 'Rain':
                            newUrl = "https://images.unsplash.com/photo-1438449805896-28a666819a20?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMDE5ODAqMTA4MHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
                            break;
                        case 'Snow':
                            newUrl = "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c25vdyUyMDE5ODAqMTA4MHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
                            break;
                        case 'Clear':
                            newUrl = "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
                            break;
                        case 'Thunderstom':
                            newUrl = "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGh1bmRlciUyMGFuZCUyMGxpZ2h0bmluZ3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
                            break;
                        default:
                            newUrl = "https://images.unsplash.com/photo-1420745981456-b95fe23f5753?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG5hdHVyZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
                            break;
                    }
                    document.querySelector('.bg-image').style.backgroundImage = `url("${newUrl}")`
                } else {
                    let curr = `<span>No such Place</span>`;
                    document.querySelector('.card-title').innerHTML = curr;
                }
            }).catch((err) => {
                console.log(err.message);
            })
    }
})