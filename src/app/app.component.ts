import { Component } from '@angular/core';
import { ModalService } from './services/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public modalSrc: string;

  constructor(private modalServ: ModalService) {
    this.modalServ.toggle.subscribe((li) => {
      this.modalSrc = li;

      const modal: any = document.querySelector('.modal');
      modal.style.visibility = 'visible';
      modal.style.opacity = 1;
    });
  }

  public closeModal() {
    const modal: any = document.querySelector('.modal');
    modal.style.visibility = 'hidden';
    modal.style.opacity = 0;
    this.modalSrc = '';
  }
}
