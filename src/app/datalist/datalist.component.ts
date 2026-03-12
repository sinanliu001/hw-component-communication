import { Component } from '@angular/core';
import { MockData } from './utils/utils';
import { item } from './utils/interface';

@Component({
  selector: 'app-datalist',
  standalone: false,
  templateUrl: './datalist.component.html',
  styleUrl: './datalist.component.scss',
})
export class DatalistComponent {
  data: item[] = MockData;
  selectedData: item | null = null;
  saveData: string | undefined = undefined;

  onItemClick(item: item) {
    this.selectedData = item;
  }
  onTitleUpdate(event: string | undefined) {
    this.saveData = event;
  }
}
