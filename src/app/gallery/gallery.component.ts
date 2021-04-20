import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal/modal.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public imgs: Array<string>;

  constructor(private modalServ: ModalService) {
    this.imgs = [
      'assets/gallery_card1.jpg',
      'assets/gallery_card2.jpg',
      'assets/gallery_card3.jpg',
      'assets/gallery_card4.jpg',
      'assets/gallery_card5.jpg',
      'assets/gallery_card6.jpg',
    ]
  }

  ngOnInit(): void {
  }

  public showModal(li: any) {
    this.modalServ.show(li);
  }

}
