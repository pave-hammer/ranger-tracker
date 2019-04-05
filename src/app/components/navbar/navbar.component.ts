import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() { this.getAbilities() }
  ngOnInit() { }
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

}
