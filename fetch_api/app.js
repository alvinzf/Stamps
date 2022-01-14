var button = document.querySelector(".submit");

button.addEventListener("click", function (name) {
  fetch(
    //API Provider
    "https://api.openweathermap.org/data/2.5/onecall?lat=-6.21462&lon=106.84513&units=metric&exclude=hourly,minutely&appid=bd467d76c853f86f0e1dffccfd487835"
  )
    //Convert received data as json
    .then((response) => response.json())
    //Process the data
    .then((data) => {
      console.log("Weather Forecast :");
      for (let i = 0; i < 8; i++) {
        //get date value
        var date = data["daily"][i]["dt"];
        //get temperature value
        var temp = data["daily"][i]["temp"]["day"];

        //convert date value from UNIX timestamp into time
        var convDate = new Date(date * 1000);
        //get Day name
        var getD = convDate.toLocaleString("default", { weekday: "short" });
        // get month name
        var getM = convDate.toLocaleString("default", { month: "short" });
        //Format date into 14 Jan 2022
        function getMon(d) {
          var t = new Date(d);
          return t.getDate() + " " + getM + " " + t.getFullYear();
        }

        //print the result
        console.log(getD + ", " + getMon(convDate) + ": " + temp + "\u00B0 C");
      }
    })

    .catch((err) => alert("Something went wrong"));
});
