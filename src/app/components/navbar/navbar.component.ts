import { Component, OnInit } from '@angular/core';
import { AbilityDataService } from '../../services/ability-data.service'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private abilityDataService: AbilityDataService) { this.getAbilities() }
  ngOnInit() { }

  abilities: Array<Object> = []
  attackRoll: number;
  damageRoll: number;

  getAbilities() {
    return this.abilities = this.abilityDataService.abilities()
  }
}
