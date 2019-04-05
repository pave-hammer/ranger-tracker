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

  getAbilities() {
    const ability = this.abilityDataService.abilities().filter(ability => ability.name === "Wis")
    this.spellcastingAbility = ability[0].name
    this.spellcastingMod = ability[0].mod
  }

  attackRoll = (mod) => {
    return this.abilityDataService.attackRoll(mod)
  }
}
