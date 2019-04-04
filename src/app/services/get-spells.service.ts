import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import spells from '../../assets/spells.json';

@Injectable({
  providedIn: 'root'
})
export class GetSpellsService {

  constructor(private http: HttpClient) { }
  urlSpellNum: string = "http://www.dnd5eapi.co/api/spells/";
  spellsList: Array<number> = [163, 185, 79, 235, 209]

  urlName: string = "http://www.dnd5eapi.co/api/spells/?name=";
  huntersMark: string = `Hunter's+Mark`;
  longstrider: string = `Longstrider`;
  detectMagic: string = `Detect+Magic`;
  protection: string = `Protection+from+Evil+and+Good`;
  mistyStep: string = `Misty+Step`;

  getSpells() {
    return this.http.get(this.urlName + this.huntersMark)
  }
}
