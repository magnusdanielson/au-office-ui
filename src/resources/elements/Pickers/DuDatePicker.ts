import { customElement, inject } from 'aurelia-framework';
import { DatePicker, IDatePickerProps  } from 'office-ui-fabric-react/lib/DatePicker';
import { AuReactStateWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: IDatePickerProps = <IDatePickerProps>{};
reactprops.onSelectDate = <any>onlyAureliaBound;
reactprops.label = <any>{};
reactprops.isRequired = <any>{};
reactprops.disabled = <any>{};
reactprops.isMonthPickerVisible = <any>{};
reactprops.showMonthPickerAsOverlay = <any>{};
reactprops.allowTextInput = <any>{};
reactprops.disableAutoFocus = <any>{};
reactprops.placeholder = <any>{};
reactprops.today = <any>{};
reactprops.value = <any>{};
reactprops.formatDate = <any>{};
reactprops.parseDateFromString = <any>{};
reactprops.firstDayOfWeek = <any>{};
reactprops.strings = <any>{};
reactprops.highlightCurrentMonth = <any>{};
reactprops.highlightSelectedMonth = <any>{};
reactprops.showWeekNumbers = <any>{};
reactprops.firstWeekOfYear = <any>{};
reactprops.borderless = <any>{};
reactprops.className = <any>{};
reactprops.dateTimeFormatter = <any>{};
reactprops.minDate = <any>{};
reactprops.maxDate = <any>{};
reactprops.initialPickerDate = <any>{};
reactprops.onAfterMenuDismiss = () => {};


@inject(Element)
@customElement('du-date-picker')
export class DuDatePicker extends  AuReactStateWrapper {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(DatePicker, this.createState(reactprops));
  }
}

addPropertiesState(DuDatePicker, reactprops);
