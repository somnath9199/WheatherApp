const API_KEY = "45b74706a13fdbacfa483e259b489630";


    navigator.geolocation.getCurrentPosition(
        function(position){
            var latitude = position.coords.latitude;
            var longitude =position.coords.longitude;
            console.log(`latitude is ${latitude} longitude is ${longitude}`);
    
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d0ad2516f49f5abe2d473538faf7cdc4`).then(response =>response.json()).then((data)=>{
               
                const cel= Math.ceil(data.main.temp/10);
                console.log(cel);
                var wheth =data.weather[0].description;
            //    const nammer = data.weather[0].icon;
             var temerator =  document.getElementById("temp");
             temerator.innerHTML = cel+"°C" ;
             var locality =  document.getElementById("location");
             locality.innerHTML = data.name;
             var desp =  document.getElementById("whaether");
             desp.innerHTML = wheth;
               var myerelement = document.getElementById("myelement");
            //    switch(nammer){
            //     case "01d": if(myerelement) myerelement.src=cloud;
            //     case "02d":
            //     case "03d":
            //     case "04d":
            //     case "09d":
            //     case "10d":
            //     case "11d":
            //     case "13d":
            //     case "50d":
            //    }
              
            }).catch((err)=>{
                console.log("have some eror");
            })
    
           
        }
    )


