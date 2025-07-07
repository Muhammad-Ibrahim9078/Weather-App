function SearchBtn() {
    let inputElement = document.getElementById('inputData');    // Get input element
    let inputData = inputElement.value.trim();                  // Get input value
    let print = document.getElementById("print");

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputData}&units=metric&appid=1bbfa7f12769064bb5a92915efd3fb09`)
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        let typeEl = `
        <section class="w-55">
            <div class="d-flex justify-content-center py-1">
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <div class="card text-body" style="border-radius: 35px;">
                        <div class="card-body p-4">
                            <div class="d-flex">    
                                <h6 class="flex-grow-1">City: ${data.name}, ${data.sys.country}</h6>
                            </div>
                            <br/>
                            <div class="d-flex justify-content-center">
                                <img src="https://cdn.dribbble.com/userupload/21287376/file/original-0c76851e7391ff11ee69443f24abbd20.gif" width="160px" class="rounded">
                            </div>
                            <div class="d-flex flex-column text-center mt-5 mb-4">
                                <h6 class="display-4 mb-0 font-weight-bold">${data.main.temp}°C</h6>
                                <p class="display-9 mb-0 "><b>Weather:</b> ${data.weather[0].main}</p>
                                <p class="display-9 mb-0 "><b>Feels like:</b> ${data.main.feels_like}</p>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1" style="font-size: 1rem;">
                                    <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1"><b>Speed:</b> ${data.wind.speed} km/h</span></div>
                                    <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1"><b>Humidity:</b> ${data.main.humidity}%</span></div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;

        print.innerHTML = typeEl;
        inputElement.value = ""; // Clear input 
    })
    .catch((err) => {
        print.innerHTML = `<p style="color: red; text-align: center;">Error: City not found or network issue.</p>`;
        console.error("Error fetching weather data:", err);
        inputElement.value = ""; //  Clear input field even on error
    });
}
