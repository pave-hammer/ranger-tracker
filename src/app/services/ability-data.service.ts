import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbilityDataService {
  constructor() { }

  abilities = () => {
    const statArray: number[] = [8, 18, 10, 12, 15, 12]
    return [
      {name: "Str", stat: statArray[0], mod: Math.floor((statArray[0] - 10) / 2)},
      {name: "Dex", stat: statArray[1], mod: Math.floor((statArray[1] - 10) / 2)},
      {name: "Con", stat: statArray[2], mod: Math.floor((statArray[2] - 10) / 2)},
      {name: "Int", stat: statArray[3], mod: Math.floor((statArray[3] - 10) / 2)},
      {name: "Wis", stat: statArray[4], mod: Math.floor((statArray[4] - 10) / 2)},
      {name: "Cha", stat: statArray[5], mod: Math.floor((statArray[5] - 10) / 2)}
    ]
  }
}
