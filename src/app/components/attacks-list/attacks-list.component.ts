import { Component, OnInit } from '@angular/core';
import { AbilityDataService } from '../../services/ability-data.service'

@Component({
  selector: 'app-attacks-list',
  templateUrl: './attacks-list.component.html',
  styleUrls: ['./attacks-list.component.scss']
})
export class AttacksListComponent implements OnInit {
  constructor(private abilityDataService: AbilityDataService) { }
  ngOnInit() { this.getAbilities() }

  myEquip: Array<any> = this.abilityDataService.myEquip
  attackAbility: string = "";
  attackMod: number = 0;
  attack: number;
  nat20: boolean = false;
  damage: number;

  getAbilities() {
    const ability = this.abilityDataService.abilities().filter(ability => ability.name === "Dex")
    this.attackAbility = ability[0].name
    this.attackMod = ability[0].mod
    console.log(this.myEquip[0])
  }
  attackRoll(mod = 0, prof = 3) {
    const roll = Math.floor(Math.random() * (21 - 1) + 1)
    let result: number = 0;
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
        const roll = Math.floor(Math.random() * ((max + 1) - min) + min) *2
        dmgTotal += roll
        ++count
      }
      dmgTotal += mod
    }
    return this.damage = dmgTotal
  }
}
