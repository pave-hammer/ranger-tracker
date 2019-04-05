import { Component, OnInit } from '@angular/core';
import Spells from '../../../assets/spells.json';

@Component({
  selector: 'app-spells-list',
  templateUrl: './spells-list.component.html',
  styleUrls: ['./spells-list.component.scss']
})
export class SpellsListComponent implements OnInit {
  constructor() { this.allSpells = Spells }
  ngOnInit() { this.getSpells(), this.getAbilities() }

  allSpells: any;
  mySpells: Array<any> = [];
  abilities: Array<Object> = []

  getAbilities() {
    const statArray: number[] = [8, 18, 10, 12, 15, 12]
    return this.abilities = [
      {name: "Str", stat: statArray[0], mod: Math.floor((statArray[0] - 10) / 2)},
      {name: "Dex", stat: statArray[1], mod: Math.floor((statArray[1] - 10) / 2)},
      {name: "Con", stat: statArray[2], mod: Math.floor((statArray[2] - 10) / 2)},
      {name: "Int", stat: statArray[3], mod: Math.floor((statArray[3] - 10) / 2)},
      {name: "Wis", stat: statArray[4], mod: Math.floor((statArray[4] - 10) / 2)},
      {name: "Cha", stat: statArray[5], mod: Math.floor((statArray[5] - 10) / 2)}
    ]
  }

  getSpells() {
    const index: Array<number> = [163, 185, 79, 235, 209, 320]
    const result = index.map(idx => {
      return this.allSpells.filter(spell => {
        return spell.index === idx ? this.mySpells.push(spell) : null
      })
    })
    return result
  }
  attackRoll() {
    console.log("wired up boss")
  }
  damageRoll() {
    console.log("wired up boss")
  }
}
