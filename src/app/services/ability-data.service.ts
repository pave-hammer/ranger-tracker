import { Injectable } from '@angular/core';
import Spells from '../../assets/spells.json';

@Injectable({
  providedIn: 'root'
})
export class AbilityDataService {
  constructor() { this.allSpells = Spells, this.getSpells() }

  allSpells: any;
  mySpells: Array<any> = [];
  nat20: boolean = false;
  attack: number = 0;
  damage: number = 0;

  getSpells() {
    const index: Array<number> = [163, 185, 79, 235, 209, 320]
    const result = index.map(idx => {
      return this.allSpells.filter(spell => {
        return spell.index === idx ? this.mySpells.push(spell) : null
      })
    })
    return result
  }
  attackRoll(mod = 0, prof = 3) {
    // console.log('Wired up, Boss.', mod)
    const roll = Math.floor(Math.random() * (21 - 1) + 1)
    let result: number = 0;
    if(roll === 20) {
      this.nat20 = true
      result = (mod + prof) + roll 
    } else {
      this.nat20 = false
      result = (mod + prof) + roll
    }
    console.log('Wired up, Boss.', result)
    return this.attack = result
  }
  damageRoll(mod, max, min, quant) {
    let count: number = 0;
    let dmgTotal: number = 0;
    while (count < quant) {
      if(this.nat20 === true) {
        const roll = Math.floor(Math.random() * ((max + 1) - min) + min) * 2
        dmgTotal += roll
      } else {
        const roll = Math.floor(Math.random() * ((max + 1) - min) + min)
        dmgTotal += roll
      }
      dmgTotal += mod
      ++count
    }
    return this.damage = dmgTotal
  }
  abilities = () => {
    const statArray: number[] = [8, 18, 10, 12, 15, 12]
    return [
      {name: "Str", stat: statArray[0], mod: Math.floor((statArray[0] - 10) / 2)},
      {name: "Dex", stat: statArray[1], mod: Math.floor((statArray[1] - 10) / 2)},
      {name: "Con", stat: statArray[2], mod: Math.floor((statArray[2] - 10) / 2)},
      {name: "Int", stat: statArray[3], mod: Math.floor((statArray[3] - 10) / 2)},
      {name: "Wis", stat: statArray[4], mod: Math.floor((statArray[4] - 10) / 2)},
      {name: "Cha", stat: statArray[5], mod: Math.floor((statArray[5] - 10) / 2)}
    ]
  }
}
