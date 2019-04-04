import { Injectable } from '@angular/core';
import spells from '../../assets/spells.json';

@Injectable({
  providedIn: 'root'
})
export class GetSpellsService {

  constructor() { }
  private _spellsList: Array<Object> = spells;

  getSpells = () => {
    return this._spellsList;
  }
}
