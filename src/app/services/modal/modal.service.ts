import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public toggle: EventEmitter<any>;

  constructor() {
    this.toggle = new EventEmitter();
  }

  public show(li: any) {
    this.toggle.emit(li);
  }
}
