
let latitude = 39.9526
let longitude = -75.1652

let skycons = new Skycons({"color": "#CF6766"});
// your code, here
//fetch(`https://api.darksky.net/forecast/7f1e494905f2e9dadb9002a84f2c8f18/${latitude},${longitude}`)
fetch(`http://localhost:4567/api/v1/forecast/${latitude},${longitude}`)
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.text())
  .then(body => {
    //console.log(body);
    let bodyParsed = JSON.parse(body);
    console.log(bodyParsed);
    skycons.add(document.getElementById("icon1"), bodyParsed.currently.icon);
    $('#temperature').append(`<p>Temperature: ${bodyParsed.currently.temperature}\xB0F</p>`);
    $('#conditions').append(`<p>Conditions: ${bodyParsed.currently.summary}</p>`);
    //skycons.play();
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));

  skycons.add(document.getElementById("icon1"), Skycons.PARTLY_CLOUDY_DAY);
  skycons.play();
