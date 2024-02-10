import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
  ];

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();
  // onDelete = Index value: number , que sera escuchado desde main page

  onDeleteCharacter(id?: string):void {
    if( !id ) return;
    this.onDelete.emit(id);
  }

}
