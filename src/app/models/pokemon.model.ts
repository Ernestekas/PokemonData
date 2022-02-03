import PokeType from "./pokeType.model";

export default interface Pokemon{
    id: number,
    name: string,
    weight: number,
    sprites: {
        other : {
            dream_world : {
                front_default : string
            }
        }
    },
    types : any[]
}