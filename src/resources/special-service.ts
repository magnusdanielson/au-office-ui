import {MyAbstractBaseService} from './base-service';

export class MySpecialService extends MyAbstractBaseService {

  public doServiceThings(): void {
    console.log('services can also do special things');
  }
}
