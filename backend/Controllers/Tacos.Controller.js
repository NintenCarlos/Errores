import { tacoModel } from "../Models/Tacos.Model.js";

tacoModel.create({
    taco: "De pastor",
    cantidad: "5", 
    conSalsa: false
})

export const test =  () => {
    console.log("Si se escucha")
}