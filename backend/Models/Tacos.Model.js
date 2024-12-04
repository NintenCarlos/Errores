import { schema, Model } from "mongoose"; 

const tacosSchema = new Model({ 
  taco: String,
  cantidad: Number,
  conSalsa: Boolean,
});

export const tacoModel = new schema("Colección de Tacos", tacosSchema); 
