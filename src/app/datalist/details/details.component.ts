import { Component, Input, Output, EventEmitter } from '@angular/core';
import { item } from '../utils/interface';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  @Input() detailData: item | null = null;
  @Output() saveButton = new EventEmitter<string | undefined>();

  onSave() {
    console.log(this.detailData);
    this.saveButton.emit(this.detailData?.name);
  }
}
