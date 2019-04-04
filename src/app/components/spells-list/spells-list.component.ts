import { Component, OnInit } from '@angular/core';
import { GetSpellsService } from '../../services/get-spells.service';

@Component({
  selector: 'app-spells-list',
  templateUrl: './spells-list.component.html',
  styleUrls: ['./spells-list.component.sass']
})
export class SpellsListComponent implements OnInit {
  spells: Array<Object>;

  constructor(private getSpellService: GetSpellsService) { }
  ngOnInit() { this.showSpells() }

  showSpells() {
    this.spells = this.getSpellService.getSpells()
    console.log(this.spells)
    return this.spells
  }
}
