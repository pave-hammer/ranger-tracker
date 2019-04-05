import { Component, OnInit } from '@angular/core';
import { AbilityDataService } from '../../services/ability-data.service'
import Spells from '../../../assets/spells.json';

@Component({
  selector: 'spells-list',
  templateUrl: './spells-list.component.html',
  styleUrls: ['./spells-list.component.scss']
})
export class SpellsListComponent implements OnInit {
  constructor(private abilityDataService: AbilityDataService) { this.allSpells = Spells }
  ngOnInit() { this.getSpells(), this.getAbilities() }

  allSpells: any
  mySpells: Array<any> = []
  spellcastingAbility: Object = {}

  getAbilities() {
    const res = this.abilityDataService.abilities().filter(ability => ability.name === "Wis")
    return this.spellcastingAbility = res[0]
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
  attackRoll(mod, prof) {
    const roll = Math.floor(Math.random() * (21 - 1) + 1)
    console.log("wired up boss", roll)
  }
  damageRoll(mod, max, min, quant) {
    const roll = Math.floor(Math.random() * ((max + 1) - min) + min)
    console.log("wired up boss")
  }
}
