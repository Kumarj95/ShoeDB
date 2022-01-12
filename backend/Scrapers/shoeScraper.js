import asyncHandler from "express-async-handler";
import axios from "axios";

const getShoesFlightClub = asyncHandler(async () => {
  console.log("__________________________________________");
  const searchQueries = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
  ];
  const shoeIDS = [];
  const shoes = [];

  for (var i = 0; i < searchQueries.length; i++) {
    const query = searchQueries[i];
    const payload = {
      requests: [
        {
          indexName: "product_variants_v2_flight_club",
          params: `query=${query}&length=1000&offset=0&distinct=1`,
        },
      ],
    };
    const req1 = await axios.post(
      "https://2fwotdvm2o-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(3.35.1)%3B%20Browser%20(lite)%3B%20react%20(16.14.0)%3B%20react-instantsearch%20(5.7.0)%3B%20JS%20Helper%20(2.28.1)&x-algolia-application-id=2FWOTDVM2O&x-algolia-api-key=ac96de6fef0e02bb95d433d8d5c7038a",
      payload
    );

    const res1 = await req1.data;

    const shoeArray = res1.results[0].hits;
    console.log(shoeArray.length)
    shoeArray.forEach((shoe) => {
      if (shoeIDS.indexOf(shoe.product_template_id) === -1) {
        const quantity = [];
        shoe.size_range.forEach((size) => {
          quantity.push(Math.floor(Math.random() * 26));
        });
        shoes.push({
          product_template_id: shoe.product_template_id,
          name: shoe.name,
          price: shoe.retail_price_cents / 100,
          sizes: shoe.size_range,
          quantity: quantity,
          description: shoe.story !== "" ? shoe.story : "No Description Found",
          hasDescription: shoe.story !== "" ? true : false,
          hasImage: shoe.has_picture !== null ? shoe.has_picture : false,
          countInStock:Math.floor(Math.random() * 50),
          image: shoe.has_picture
            ? shoe.main_picture_url
            : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png",
          brand: shoe.brand_name,
          nickname: shoe.nickname ? shoe.nickname : "none",
          rating: Math.round(Math.random() * 5 * 10) / 10,
          numReviews:Math.floor(Math.random()*151)

        });
        shoeIDS.push(shoe.product_template_id);
      }
    });
  }
  return shoes;
});

export default getShoesFlightClub;
