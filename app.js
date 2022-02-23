const games = [
    {
        img:"https://i5.walmartimages.com/asr/afd341a0-735f-43b0-b917-07f3bd14622a_2.46f3410af681994543dddb67ec00ad4b.jpeg",
        price:"$19.99",
        name:"God of War",
        description:"Dad of war discovers how to be a father by chucking his axe at giant nordic creatures and yell BOY many many times.",
        platform:"playstation"
    },
    {
        img:"https://www.gamerevolution.com/assets/uploads/2014/07/file_8759_killer-instinct-box.jpg",
        price:"$14.99",
        name:"Killer Instinct",
        description:"Bunch of crazy 80s and 90s knock offs fighting using breakers and instinct senses.",
        platform:"xbox"
    },
    {
        img:"https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/DKC5_box_art.jpg/220px-DKC5_box_art.jpg",
        price:"$49.99",
        name:"Donkey Kong Country: Tropical Freeze",
        description:"A giant gorilla and possibly apes quest to unfeeze their island form a bunch of icey animals and collect lots of bananas.",
        platform:"switch"
    }
];

const playstationImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png";
const switchImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Nintendo_Switch_Logo.svg/1024px-Nintendo_Switch_Logo.svg.png";
const xboxImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Xbox_logo_%282019%29.svg/1200px-Xbox_logo_%282019%29.svg.png";

let listings = [];
let popUps = [];

function gameProduct(idNum, price, imgSrc, platform) {
    let that = this;

    this.id = idNum;

    this.divEle = document.createElement("div");
    this.divEle.classList.add("product");

    this.imgEle = document.createElement("img");
    this.imgEle.classList.add("prdImg");
    this.imgEle.src = imgSrc;

    // Class is assigned in the switch
    this.platformEle = document.createElement("img");
    this.platformEle.classList.add("plat");

    this.priceEle = document.createElement("h1");
    this.priceEle.innerHTML = price;

    // Add appropriate platform class depending on platform of object
    switch (platform) {
        case "playstation":
            this.divEle.classList.add("playstation");
            this.platformEle.src = playstationImg;
            break;
        case "xbox":
            this.divEle.classList.add("xbox");
            this.platformEle.src = xboxImg;
            break;
        case "switch":
            this.divEle.classList.add("switch");
            this.platformEle.src = switchImg;
            break;
        default:
            break;
    }

    this.divEle.append(this.imgEle);
    this.divEle.append(this.platformEle);
    this.divEle.append(this.priceEle);
    document.body.append(this.divEle);

    // Click that allows for popup to show
    this.divEle.addEventListener("click", function() {
        that.popUp(that.id);
    });
}

gameProduct.prototype.popUp = function(id) {
    popUps[id].divEle.style.display = "flex";
}


function gamePopUp(idNum, price, imgSrc, platform, name, description) {
    let that = this;

    this.id = idNum;

    this.divEle = document.createElement("div");
    this.divEle.classList.add("popUp");

    this.imgEle = document.createElement("img");
    this.imgEle.src = imgSrc;

    this.priceEle = document.createElement("h2");
    this.priceEle.innerHTML = price;

    this.nameEle = document.createElement("h1");
    this.nameEle.innerHTML = name;

    this.platformEle = document.createElement("h3");
    this.platformEle.innerHTML = platform;

    this.descEle = document.createElement("p");
    this.descEle.innerHTML = description;

    // Add appropriate platform class depending on platform of object
    switch (platform) {
        case "playstation":
            this.platformEle.style.color = "blue";
            break;
        case "xbox":
            this.platformEle.style.color = "green";
            break;
        case "switch":
            this.platformEle.style.color = "red";
            break;
        default:
            break;
    }

    this.divEle.append(this.imgEle);
    this.divEle.append(this.nameEle);
    this.divEle.append(this.priceEle);
    this.divEle.append(this.descEle);
    this.divEle.append(this.platformEle);
    document.body.append(this.divEle);

    // Click that hides popup
    this.divEle.addEventListener("click", function() {
        that.closePopUp(that.id);
    });
}

gamePopUp.prototype.closePopUp = function(id) {
    // Hides popup with "display: none"
    popUps[id].divEle.style.display = "none";
}

function createElements() {
    for(let i in games) {
      let val = games[i];
      listings.push(new gameProduct(i, val.price, val.img, val.platform));
      popUps.push(new gamePopUp(i, val.price, val.img, val.platform, val.name, val.description));
    }
}

createElements();