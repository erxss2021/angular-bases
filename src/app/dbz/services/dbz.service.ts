import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    constructor() { }

    characters: Character[] = [
        {
            id: uuid(),
            name: 'Krillin',
            power: 1000
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9500
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 7500
        }
    ];

    addCharacter(character: Character): void{
        //console.log('MainPage');
        const newCharacter: Character = {
            id: uuid(), ...character
        }
        this.characters.push(newCharacter);
        //console.log(character);
    }

    //onDeleteCharacter(index: number): void{
      //  this.characters.splice(index, 1); //Elimina 1 elemento en el indice = index
    //s}
 
    deleteCharacterById(id: string):void{
        this.characters = this.characters.filter( character => character.id !== id);
    }
}