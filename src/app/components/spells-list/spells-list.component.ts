import { Component, OnInit } from '@angular/core';
import { AbilityDataService } from '../../services/ability-data.service'

@Component({
  selector: 'spells-list',
  templateUrl: './spells-list.component.html',
  styleUrls: ['./spells-list.component.scss']
})
export class SpellsListComponent implements OnInit {
  constructor(private abilityDataService: AbilityDataService) { }
  ngOnInit() { this.getAbilities() }

  
  mySpells: Array<any> = this.abilityDataService.mySpells
  spellcastingAbility: string = "";
  spellcastingMod: number = 0;
  attack: number;
  nat20: boolean = false;
  damage: number;
  firstLevelSlots: number = 4;
  secondLevelSlots: number = 2;

  getAbilities() {
    const ability = this.abilityDataService.abilities().filter(ability => ability.name === "Wis")
    this.spellcastingAbility = ability[0].name
    this.spellcastingMod = ability[0].mod
  }
  attackRoll(mod = 0, slot, prof = 3) {
    const roll = Math.floor(Math.random() * (21 - 1) + 1)
    let result: number = 0;
    if (slot === 1) {
      console.log(slot)
      this.firstLevelSlots--
    }else {
      console.log('not so much')
      this.secondLevelSlots--
    }
    if(roll === 20) {
      this.nat20 = true
      result = (mod + prof) + roll
    } else {
      this.nat20 = false
      result = (mod + prof) + roll
    }
    return this.attack = result
  }
  damageRoll(mod, max, min, quant) {
    let count: number = 0;
    let dmgTotal: number = 0;
    while (count < quant) {
      if(!this.nat20) {
        const roll = Math.floor(Math.random() * ((max + 1) - min) + min)
        dmgTotal += roll
        ++count
      } else {
        const roll = Math.floor(Math.random() * ((max + 1) - min) + min) * 2
        dmgTotal += roll
        ++count
      }
      dmgTotal += mod
    }
    return this.damage = dmgTotal
  }
  useSpell = (slot) => {
    if(slot === 1) {
      return this.firstLevelSlots--
    } else {
      return this.secondLevelSlots--
    }
  }
}
