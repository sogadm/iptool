fetch("//ip.useragentinfo.com/json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("ip").innerHTML = data.ip;
    document.getElementById("isp").innerHTML = `${data.isp}`;
    document.getElementById(
      "location"
    ).innerHTML = `${data.country}-${data.province}${data.city}${data.area}`;
  })
  .catch((error) => console.error(error));
