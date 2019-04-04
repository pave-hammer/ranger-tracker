import { Component, OnInit } from '@angular/core';
import { GetSpellsService } from '../../services/get-spells.service';

@Component({
  selector: 'app-spells-list',
  templateUrl: './spells-list.component.html',
  styleUrls: ['./spells-list.component.sass']
})
export class SpellsListComponent implements OnInit {
  object: any;

  constructor(private getSpellService: GetSpellsService) { }
  ngOnInit() { this.showSpells() }

  showSpells() {
    this.getSpellService.getSpells().subscribe(data => this.object = data)
  }
}
