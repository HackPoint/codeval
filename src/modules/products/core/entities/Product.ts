import {Consts} from '../../../util/consts';
export class Product {
    constructor(public id: number,public sku: any, public imageUrl: string, public name: string, public desc: string, public price: number, public cdate: Date) {
        this.id = this.id || new Date().getTime();
        this.sku = `${Consts.LOCAL_STORAGE_KEY}::${new Date().getTime()}`;
    }
}