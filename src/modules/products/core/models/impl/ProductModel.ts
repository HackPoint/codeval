import {Product} from '../../entities/Product';
import {IProductService} from '../../services/impl/ProductService';

export class ProductModel {
    public static $inject: Array<string> = ["ProductService"];
    public products: Array<Product>;
    public currentPage: number = 0;
    public pageSize: number = 5;
    public query: string;

    constructor(private productService: IProductService) {
        this.products = this.productService.getAll();
        if (this.products === null) {
            this.mockData();
        }
    }

    public add(item: Product): ng.IPromise<Boolean> {
        return this.productService.create(new Product(null, item.sku, item.imageUrl, item.name, item.desc, item.price, item.cdate));
    }



    public mockData(): void {
        let mockedArray: Array<Product> = [];
        mockedArray.push(new Product(null, null,"http://loremflickr.com/80/80?random=2http://loremflickr.com/80/80?random=2", "Product Name1", "Some description", 10.2, new Date()));
        mockedArray.push(new Product(null, null,"http://loremflickr.com/80/80?random=2", "Product Name2", "Some description", 10.2, new Date()));
        mockedArray.push(new Product(null, null,"http://loremflickr.com/80/80?random=2", "Product Name3", "Some description", 10.2, new Date()));
        mockedArray.push(new Product(null, null,"http://loremflickr.com/80/80?random=2", "Product Name4", "Some description", 10.2, new Date()));
        mockedArray.push(new Product(null, null,"http://loremflickr.com/80/80?random=2", "Product Name5", "Some description", 10.2, new Date()));
        mockedArray.push(new Product(null, null,"http://loremflickr.com/80/80?random=2", "Product Name6", "Some description", 10.2, new Date()));
        mockedArray.push(new Product(null, null,"http://loremflickr.com/80/80?random=2", "Product Name7", "Some description", 10.2, new Date()));
        mockedArray.push(new Product(null, null,"http://loremflickr.com/80/80?random=2", "Product Name8", "Some description", 10.2, new Date()));
        mockedArray.push(new Product(null, null,"http://loremflickr.com/80/80?random=2", "Product Name9", "Some description", 10.2, new Date()));
        mockedArray.push(new Product(null, null,"http://loremflickr.com/80/80?random=2", "Product Name10", "Some description", 10.2, new Date()));
        mockedArray.push(new Product(null, null,"http://loremflickr.com/80/80?random=2", "Product Name11", "Some description", 10.2, new Date()));
        mockedArray.push(new Product(null, null,"http://loremflickr.com/80/80?random=2", "Product Name12", "Some description", 10.2, new Date()));

        this.productService.create(...mockedArray);
    }
}