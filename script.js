"use strict";

function preload(){
 products = loadJSON("products.json");
}



let products = [
    {
    "sku": "123456789",
    "partNumber": "TEC1-12706",
    "brand": "Tecneu",
    "provider": "Tecneu S.A de C.V",
    "name": "Celda Peltier",
    "keywords": ["placa", "peltier", "termoelectrica", "enfriamiento"],
    "shortDescription": "Placa termoeléctrica peltier para enfriamiento sub-ambiente",
    "detailedDescription": "Cables de alimentación de 30 cm  Temperatura lado caliente: 50 ~ 57 ºC  Corriente máxima: 6.4 A",
    "measurements": "12V 150W, 2'",
    "price": 800,
    "lastPriceUpdate": "09/03/21"
    }
]
let animals = {
    cats : ["Mitzy", "Omar", "Didier"],
    dogs : ["Alan", "Gabriel", "Viridiana"]
}

const Adrian = {
	name : "Adrian" ,
	lastName : "Cortes" ,
	birthYear : "1998",
}