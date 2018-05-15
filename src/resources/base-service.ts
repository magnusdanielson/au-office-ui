export abstract class MyAbstractBaseService {

  public doServiceThings(): void {
    throw new Error('abstract services don\'t do things');
  }
}
