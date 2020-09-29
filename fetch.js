class Fetch {
  async getCurrent(input) {
    const myKey = "YTMzYTY0ZGEyNDAwMTE1YTcxMzM4M2";

   //make request to url

    const response = await fetch(
   //   `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    //  `https://api.willyweather.com.au/v2/${myKey}/locations/${input}`
    //  `https://api.willyweather.com.au/v2/${myKey}/locations/weather.json?forecasts=swell&days=1&startDate=2020-09-29`
     ` https://api.willyweather.com.au/v2/${myKey}/locations/${input}/weather.json?forecasts=temperature&days=1&startDate=2014-03-27`
    );
     

    console.log(response);

     return response;
  }
}


// let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
//     targetUrl = 'https://api.willyweather.com.au/v2/${myKey}/locations/${input}.json'

//     const response = await fetch(proxyUrl + targetUrl);

//     console.log(response);

//      return response;
//   }
// };



//   .then(blob => blob.json())
//   .then(data => {
//     console.table(data);
//     document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
//     return data;
//   })
//   .catch(e => {
//     console.log(e);
//     return e;
//   });



// }




// var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
//     targetUrl = 'http://catfacts-api.appspot.com/api/facts?number=99'
// fetch(proxyUrl + targetUrl)
//   .then(blob => blob.json())
//   .then(data => {
//     console.table(data);
//     document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
//     return data;
//   })
//   .catch(e => {
//     console.log(e);
//     return e;
//   });