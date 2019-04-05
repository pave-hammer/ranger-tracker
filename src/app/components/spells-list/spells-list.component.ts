import { Component, OnInit } from '@angular/core';
import Spells from '../../../assets/spells.json';

@Component({
  selector: 'spells-list',
  templateUrl: './spells-list.component.html',
  styleUrls: ['./spells-list.component.scss']
})
export class SpellsListComponent implements OnInit {
  constructor() { this.allSpells = Spells }
  ngOnInit() { this.getSpells() }

  allSpells: any;
  mySpells: Array<any> = [];

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
