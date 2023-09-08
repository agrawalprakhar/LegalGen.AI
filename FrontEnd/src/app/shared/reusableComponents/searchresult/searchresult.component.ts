import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent {
  show = true;
  researches: any[] = [];
  isPopupOpen = false;
  relevant: string[] = [];
  currentPage: number = 1;
  changedPage: number = 0;
  pageSize: number = 10;
  maxPageCountVisible: number = 5;
  @Output() pageNumberToGetData = new EventEmitter<number>();
  data: any;
  stats: any = [];
  common_judgements: any = [];
  objectKeys = Object.keys;
  queryForm!: FormGroup;
  courts: any = [{ name: 'Supreme Court of India' }, { name: 'High Court' }];

  constructor(
    private service: AppService,
    private formBuilder: FormBuilder,
    private _FB: FormBuilder
  ) {
    this.data = [];
    this.service.currentResults.subscribe((results) => {
      this.data = results;
      this.setData();
    });
  }

  // To avoid keyvalue pairs with default sorting
  returnZero() {
    return 0;
  }
  // To differentiate between value type object and string
  typeOf(value: any) {
    return typeof value;
  }

  ngOnInit(): void {}

  openPopup(data: string[]) {
    this.isPopupOpen = true;
    console.log(data);
    this.relevant = data;
  }
  close() {
    this.isPopupOpen = false;
  }

  get queries() {
    return this.queryForm.get('queries') as FormArray;
  }

  addQueries() {
    this.queries.push(this._FB.control(''));
  }

  removeQueries(index: number) {
    (this.queryForm.get('queries') as FormArray).removeAt(index);
  }

  /**
   * Set data based on the search result
   */
  setData(): void {
    this.common_judgements = [];
    if (this.data['resp'].length) {
      for (var i = 0; i < this.data['resp'].length; i++) {
        if (this.data['resp'][i]['stats']) {
          this.stats.push(this.data['resp'][i]['stats']);
          console.log(this.data['resp'][i]['stats']);
        }
        if (this.data['resp'][i]['common judgement among all facts']) {
          this.common_judgements.push(
            this.data['resp'][i]['common judgement among all facts']
          );
        }
      }
    }
  }

  /**
   * Event call on page change
   * @param event page change event
   */
  // pageChanged(event: PageChangedEvent): void {
  //   this.changedPage = event.page;
  //   this.pageNumberToGetData.emit(this.changedPage);
  // }
}
