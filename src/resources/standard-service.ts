import {MyAbstractBaseService} from './base-service';

export class MyStandardService extends MyAbstractBaseService {

  public doServiceThings(): void {
    console.log('this service does nothing special');
  }
}
