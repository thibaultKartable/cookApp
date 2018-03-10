import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() pageActivated = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.pageActivated.emit('recipes');
  }

  changePage(page: 'recipes' | 'shoppingList'){
    this.pageActivated.emit(page);
  }

}
