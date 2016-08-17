import {LocalStorageService} from '../../../../util/LocalStorageService';
import {Product} from "../../entities/Product";
import {Consts} from '../../../../util/consts';

export interface IProductService {
    getAll(): Array<Product>;
    single(id: number): ng.IPromise<Product>;
    create(...product: Array<Product>): ng.IPromise<Boolean>;
    update(products: Product): ng.IPromise<Boolean>;
    delete(id: number): ng.IPromise<Boolean>;
}

export class ProductService implements IProductService {
    public static $inject: Array<string> = ["$q", "$timeout", "LocalStorageService"];

    constructor(private $q: ng.IQService, private $timeout: ng.ITimeoutService, private localStorage: LocalStorageService) {

    }

    getAll(): Array<Product> {
       return this.localStorage.readObject<Array<Product>>(Consts.LOCAL_STORAGE_KEY);
    }

    single(id: number): ng.IPromise<Product> {
        let deferred = this.$q.defer();
        let key: string = `${Consts.LOCAL_STORAGE_KEY}`;
        this.$timeout(() => {
            let task: Product = this.localStorage.readObject<Product>(key);
            if (task != null) {
                deferred.resolve(task);
            } else {
                deferred.reject(task);
            }
        }, 0);
        return deferred.promise;
    }

    create(...products: Array<Product>): ng.IPromise<Boolean> {
        let deferred = this.$q.defer();
        let key: string = `${Consts.LOCAL_STORAGE_KEY}`;
        this.$timeout(() => {
            try {
                let existingItems: Array<Product> = this.getAll() || [];
                for(let p of products) {
                    existingItems.push(p);
                }
                this.localStorage.writeObject(key, existingItems);
                deferred.resolve(true);
            } catch (ex) {
                deferred.reject(ex);
            }
        }, 0);
        return deferred.promise;
    }

    update(product: Product): ng.IPromise<Boolean> {
        return this.create(product);
    }

    delete(id: number): ng.IPromise<Boolean> {
        let deferred = this.$q.defer();
        let key: string = `${Consts.LOCAL_STORAGE_KEY}`;

        this.$timeout(() => {
            try {
                this.localStorage.remove(key);
                deferred.resolve(true);
            } catch (ex) {
                deferred.reject(ex);
            }
        }, 0);
        return deferred.promise;
    }
}
