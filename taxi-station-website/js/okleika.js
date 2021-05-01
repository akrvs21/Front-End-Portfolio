$(document).ready(function () {
  var color = "yellow";
  var country = "Germany";
  var type = "first";
  // Pick a color
  $(".color-choose input").on("click", function () {
    color = $(this).attr("data-image");
    $(".parameters .choice").removeClass("choice");

    document.querySelector(".product-price span").textContent = "";
    $(".active").removeClass("active");
    $(".left-column img[data-image = " + color + "]").addClass("active");
    $(this).addClass("active");

    if (color === "yellow") {
      document.querySelector(".product-description h1").textContent =
        "Жёлтая Оклейка";
      document.querySelectorAll(".auto-type button").forEach((btn) => {
        btn.style.display = "inline";
      });
      document.querySelector(".tip").style.display = "inline";
      document.querySelector(".country #US").style.display = "inline";
      console.log(color + " " + country + " " + type);
    } else if (color === "white") {
      document.querySelector(".product-description h1").textContent =
        "Белая Оклейка";
      document.querySelector(".tip").style.display = "inline";
      document.querySelectorAll(".auto-type button").forEach((btn) => {
        btn.style.display = "inline";
      });
      document.querySelector(".country #US").style.display = "inline";
      console.log(color + " " + country + " " + type);
    } else if (color === "white-express") {
      document.querySelector(".product-description h1").textContent =
        "Экспресс Оклейка";
      document.querySelectorAll(".auto-type button").forEach((btn) => {
        btn.style.display = "none";
        document.querySelector(".product-price span").textContent = "9 990 руб";
      });
      document.querySelector(".country #US").style.display = "none";
      document.querySelector(".tip").style.display = "none";
      console.log(color + " " + country + " " + type);
    }
  });
  // Pick a manufacturer
  $(".country button").on("click", function () {
    country = $(this).attr("data-country");
    $(".auto-type .choice").removeClass("choice");
    $(".country .choice").removeClass("choice");
    $(this).addClass("choice");
    console.log(country);
  });
  // Pick vehicle type
  $(".auto-type button").on("click", function () {
    type = $(this).attr("data-auto");
    console.log(color + " " + country + " " + type);
    $(".auto-type .choice").removeClass("choice");
    $(this).addClass("choice");
    if (color === "yellow" && country === "Germany" && type === "first") {
      document.querySelector(".product-price span").textContent = "13 500 руб";
    } else if (
      color === "yellow" &&
      country === "Germany" &&
      type === "second"
    ) {
      document.querySelector(".product-price span").textContent = "16 500 руб";
    } else if (
      color === "yellow" &&
      country === "Germany" &&
      type === "third"
    ) {
      document.querySelector(".product-price span").textContent = "19 500 руб";
    } else if (color === "yellow" && country === "USA" && type === "first") {
      document.querySelector(".product-price span").textContent = "18 000 руб";
    } else if (color === "yellow" && country === "USA" && type === "second") {
      document.querySelector(".product-price span").textContent = "21 000 руб";
    } else if (color === "yellow" && country === "USA" && type === "third") {
      document.querySelector(".product-price span").textContent = "24 000 руб";
    } else if (color === "white" && country === "Germany" && type === "first") {
      document.querySelector(".product-price span").textContent = "12 000 руб";
    } else if (
      color === "white" &&
      country === "Germany" &&
      type === "second"
    ) {
      document.querySelector(".product-price span").textContent = "15 000 руб";
    } else if (color === "white" && country === "Germany" && type === "third") {
      document.querySelector(".product-price span").textContent = "18 000 руб";
    } else if (color === "white" && country === "USA" && type === "first") {
      document.querySelector(".product-price span").textContent = "16 500 руб";
    } else if (color === "white" && country === "USA" && type === "second") {
      document.querySelector(".product-price span").textContent = "19 500 руб";
    } else if (color === "white" && country === "USA" && type === "third") {
      document.querySelector(".product-price span").textContent = "22 500 руб";
    } else if (color === "white-express" && country === "Germany") {
      document.querySelector(".product-price span").textContent = "9 990 руб";
    }
  });
  // Tips modal
  $(".auto-type-1").on("click", function () {
    Swal.fire(
      "1 класс авто",
      "Audi: А1, A3.<br>«MW: 218i, 1.<br>Chevrolet: Aveo, Cobalt, Cruze KL1J, Lacetti.<br>Citroen: C4, Elysee.<br>Datsun: on-DO<br>Fiat: Albea, Bravo, Punto.<br>Ford: Focus (хэтчбек, седан), Fiesta. <br>Geely: Emgrand, MK Cross. <br>Honda: Civic (cедан, хэтчбек)<br>Hyundai: Genesis (купе), i30 (хэтчбек), Solaris, Sonata (до 2014 г.)<br>Kia: Ceed (хэтчбек), Ceed GT (хэтчбек), Cerato (до 2013 г), Rio, Picanto, X-Line.<br> LADA (ВАЗ): Vesta, Granta, X-Ray.<br>Mazda: 2, 3 (до 2013 г.)<br>Mercedes-Benz: C-klasse (седан до 2012 г.), E-klasse (седан до 2015 г.<br>Mitsubishi: Lancer<br>Nissan: Almera, Tiida 1.6 Comfort, Note. <br> Opel: Astra (седан до 2015 г.), Corsa. <br> Peugeot: 206, 207, 208, 307, 406. <br> Ravon R4. <br> Renault: Sandero, Logan, Megane, Fluence, Symbol. <br> Skoda: Fabia, Rapid, Octavia (до 2017 г.). <br> Toyota: Corolla (до 2013 г. Кузов E140), Prius, Auris, Avensis. <br> Volkswagen: Passat (до 2010 г.), Polo, Jetta (до 2015 г.), Golf. <br> Volgo: S40, C30. <br>"
    );
  });
  $(".auto-type-2").on("click", function () {
    Swal.fire(
      "2 класс авто",
      "BMW 3 серия. <br> Chevrolet: Epica, Cruze (универсал), Lacetti (универсал), Orlando. <br> Citroen: Berlingo, C4 Picasso, C5 (седан). <br> Fiat Doblo. <br> Ford: Focus (универсал), Mondeo, Kuga, Ecosport. <br> Honda Accord. <br> Hyundai: Creta, Elantra (c 2016), Sonata (c 2014), Sonata YF (I40), i30 (универсал), ix35. <br> Kia: Ceed ED (универсал), JF Optima, K5, Optima, Stinger, Soul, Sportage, YD Cerato Forte (седан с 2013 г.) <br> LADA: Vesta (универсал), Vesta Cross, Largus. <br> Madza: 6, 3 (с 2013 г.). <br> Mercedes-Benz: C180, E200. <br> Mitsubishi: ASX, Galant. <br> Nissan: Sentra, Juke, Qashqai, Terrano. <br> Opel; Astra (седан с 2015 г), Vectra, Mokka, Meriva. <br> Peugeot: 408 (c 2016), 508, 607. <br> Renault: Duster, Kaptur, Scenic, Kangoo. <br> Skoda: Octavia (c 2017), Octavia (универсал), Roomster, Yeti. <br> Toyota: Camry, Corolla (кузов E160). <br> Volkswagen: Golf Plus, Caddy, Passat (c 2011), Tiguan. <br> Volvo S60. <br>"
    );
  });
  $(".auto-type-3").on("click", function () {
    Swal.fire(
      "3 класс авто",
      "Audi A6. <br> BMW X5. <br> Chevrolet Captiva. <br> Citroen Space Tourer. <br> Ford: Galaxy, S-Max. <br> Hyundai: Tucson, Santa-Fe. <br> Kia: Sorento, K900. <br> Nissan: Teana, X-Trail. <br> Skoda: Karoq, Kodiaq, Superb. <br> Toyota RAV 4. <br> Volkswagen Touareg. <br>"
    );
  });
});
