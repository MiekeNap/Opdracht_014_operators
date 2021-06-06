const myAge = 20;
const isFemale = true;
const driverStatus = "bob";
const myName = "Bram";
const totalAmount = 10;

if (myAge < 18) {
    console.log("sorry, je bent te jong en mag niet naar binnen!");
} else if (myAge >= 18 && myAge <= 25) {
    console.log("je krijgt 50% korting!");
} else {
    console.log("je mag naar binnen en betaald de normale prijs");
}


if (isFemale) {
    console.log("yes, je bent welkom op de ladiesnight")
} else {
    console.log("sorry, alleen dames zijn vanavond welkom")
}
    
if (driverStatus === "bob") {
    console.log("je bent de bob en mag rijden");
} else {
    console.log("je hebt gedronken en bent dus geen bob");
}   

if (myName === "Bram" || myName === "Sarah") {
    console.log("Gefeliciteerd, je krijgt een gratis biertje");
} else {
   console.log("je moet betalen voor je biertje");
}

if (totalAmount > 100) {
    console.log("je krijgt een fles champagne!");
} else if (totalAmount > 50) {
    console.log("je krijgt er een portie nachos bij");
} else if (totalAmount > 25) {
    console.log("je krijgt er gratis (vega)bitterballen bij");
} else {
    console.log("je hebt nog niet het minimum bedrag besteedt voor een cadeau");
}
