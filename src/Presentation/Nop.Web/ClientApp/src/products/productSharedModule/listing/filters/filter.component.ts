import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  ViewEncapsulation,
  Output,
  EventEmitter
} from '@angular/core';
import { AppService } from '../../../../app/app.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FilterComponent implements OnInit, OnDestroy {
  public sliderVersionTabletMobile;
  public filtreShow = true;
  public menuActive = false;
  public _Filters;
  public _category;
  public selectedFilters = [];
  public FilterSelected = {};
  public categorySelect = 1;
  public filterSelect;
  @Output()
  filterSelected = new EventEmitter();
  constructor(private appService: AppService) {}

  ngOnInit() {
    setTimeout(function() {
      const formSelected = Array.from(
        document.querySelectorAll('.form_selected_')
      );
      formSelected.forEach(function(button) {
        if (button.getElementsByClassName('dropdown')[0] !== undefined) {
          const wrapElem = button.getElementsByClassName('wrap-dd-select')[0];
          let widthButton = 0;
          if (wrapElem instanceof HTMLElement) {
            widthButton = wrapElem.offsetWidth;
          }
          const widthDropDown = 160;
          const calcul = -1 * ((widthDropDown - widthButton) / 1.6);
          const dropdownElem = button.getElementsByClassName('dropdown')[0];
          if (dropdownElem instanceof HTMLElement) {
            dropdownElem.style.marginLeft = calcul + 'px';
          }
        }
      });
    }, 2000);

    this.appService.changeInHome.subscribe(value => {
      if (value === 'change') {
        this.sliderVersionTabletMobile = this.appService.sliderVersionTabletMobile;
      }
    });
  }

  @Input()
  set Filters(Filters) {
    Filters.unshift({});
    this._Filters = Filters;
  }

  get Filters() {
    return this._Filters;
  }

  
  @Input()
  set category(category) {
    let a;
    category.forEach(item => {
      const obj = {
        CharacteristicId: item.catId,
        Reference: null,
        Name: item.txt,
        CharacteristicTypeCode: null,
        disabled: false
      };
      a.push({...obj});
    })
    a.menuActive = false;
    a.selected = false;
    a.SelectedName = '';
    this._category = a;
  }


  get category() {
    return this._category;
  }

  selectCategory() {
    this.category.menuActive = !this.category.menuActive;
  }

  unSelectCategory() {
    this.categorySelect = 1;
    this.category.menuActive = !this.category.menuActive;
    let item = {
      filter: this.filterSelect,
      category: 1
    };
    this.filterSelected.emit(item);
  }

  selectCatItem(item) {
    this.categorySelect = item.CharacteristicId;
    this.category.selected = true;
    this.category.selectedName = item['Name'];
    let obj = {
      filter: this.filterSelect,
      category: item.CharacteristicId
    };
    this.filterSelected.emit(obj);
  }

  selectFilter(i) {
    this.Filters.forEach((filter, index) => {
      if (index === i) {
        this.Filters[index].menuActive = !this.Filters[index].menuActive;
      } else {
        this.Filters[index].menuActive = false;
      }
    });
  }

  unSelectFilter(ID) {
    delete this.filterSelected[ID];
    this.Filters[ID].forEach(filter => {
      let i = -1;
      let link;
      this.selectedFilters.forEach((item, index) => {
        if (filter.CharacteristicId === item.CharacteristicId) {
          i = index;
          link = item.link;
        } else {
          i = -1;
        }
      });
      if (i !== -1) {
        this.selectedFilters.splice(i, 1);
        const item = { filter: link, category: this.categorySelect };
        this.filterSelected.emit(item);
      }
    });
  }

  closeAllFilters(index) {
    this.Filters[index].menuActive = false;
  }

  selectItem(item, filterType) {
    item.add = true;
    this.selectedFilters.push(item);
    this.filterSelected[filterType] = item.Name;
    this.filterSelect = item.link;
    const obj = {
      filter: this.filterSelect,
      category: this.categorySelect
    }
    this.filterSelected.emit(obj);
  }

  // hideFilters() {
  //   $('#products_filters>.form_selected_').slideToggle();
  //   $('#products_filters>.filter_slide_toggle').text(function(index, text) {
  //     text = text.trim();
  //     return (text.charAt(0) === '-' ? '+' : '-') + text.substr(1);
  //   });
  // }

  ngOnDestroy() {}
}
