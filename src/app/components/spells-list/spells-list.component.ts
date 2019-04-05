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
  proficiency: number = 0;
  attack: number;
  nat20: boolean = false;
  damage: number;

  getAbilities() {
    const ability = this.abilityDataService.abilities().filter(ability => ability.name === "Wis")
    const prof = this.abilityDataService.proficiency
    this.spellcastingAbility = ability[0]
    this.proficiency = prof
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
    if(roll === 20) {
      this.nat20 = true
      return this.attack = (mod + prof) + roll
    } else {
      this.nat20 = false
      return this.attack = (mod + prof) + roll
    }
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
}
