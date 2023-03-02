export interface PokemonDetails {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: Ability[];
    forms: any[];
    game_indices: any[];
    held_items: any[];
    location_area_encounters: string;
    moves: any[];
    past_types: any[];
    sprites: Sprites;
    species: any;
    stats: any[];
    types: any[];
}

interface Sprites {
    front_default: string;
    front_shiny: string;
    front_female: string;
    front_shiny_female: string;
    back_default: string;
    back_shiny: string;
    back_female: string;
    back_shiny_female: string;
}

interface Ability {
    is_hidden: boolean;
    slot: number;
    ability: any;
}