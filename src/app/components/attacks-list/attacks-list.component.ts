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

  getAbilities() {
    const ability = this.abilityDataService.abilities().filter(ability => ability.name === "Dex")
    this.attackAbility = ability[0].name
    this.attackMod = ability[0].mod
    console.log(this.myEquip[0])
  }

}
