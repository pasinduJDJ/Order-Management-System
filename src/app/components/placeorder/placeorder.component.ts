import { Component } from '@angular/core';
import { NgbModal , NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent {

  constructor(
    private activeModal:NgbActiveModal,
    private modal:NgbModal
) {}
  closeModal(){
    this.activeModal.close();
  }
}
