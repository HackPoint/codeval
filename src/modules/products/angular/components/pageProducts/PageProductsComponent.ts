import {ProductModel} from '../../../core/models/impl/ProductModel';
import {Product} from "../../../core/entities/Product";

export class PageProductsComponent implements ng.IComponentOptions {
    public controller: Function = PageProductsController;

    public template: string = `
        <navbar></navbar>
        <br/>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-inline">
                          <button type="submit" class="btn btn-default">
                            <i class="fa fa-plus"></i>
                            Add
                          </button>
                          <div class="form-group">
                            <input type="search" ng-model="$ctrl.model.query" class="form-control" placeholder="Search products">
                          </div>
                          <div class="form-group">
                           Sort by
                             <select class="form-control">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                    </div>
                    <br/>                                           
                    
                    <div class="list-group">
                        <div class="media list-group-item" ng-repeat="product in $ctrl.model.products| filter:$ctrl.model.query | startFrom:$ctrl.model.currentPage*$ctrl.model.pageSize| limitTo: $ctrl.model.pageSize" ng-cloak>
                            <div class="media-left media-bottom">
                                <a href="#">
                                    <img ng-src="{{product.imageUrl}}" class="media-object" alt="product.name">
                                </a>
                            </div>
                            <div class="media-body">
                                <h4 class="media-heading">{{product.name}}</h4>
                                <p>{{product.desc}}</p>
                            </div>
                            <div class="media-right media-bottom">
                                <a ng-click="$ctrl.model.remove(product.id)" class="btn btn-warning">Delete</a>
                            </div>
                        </div>
                        <nav aria-label="...">
                          <ul class="pager">
                            <li ng-class="{'disabled': $ctrl.model.currentPage === 0}">
                                <a ng-click="$ctrl.model.currentPage=$ctrl.model.currentPage-1"><span aria-hidden="true">&larr;</span>Previous</a>
                            </li>
                            <li> {{$ctrl.model.currentPage+1}} of {{$ctrl.totalPages()}}</li>
                            <li ng-class="{'disabled': $ctrl.model.currentPage >= $ctrl.filteredData().length/$ctrl.model.pageSize - 1}">
                                <a ng-click="$ctrl.model.currentPage=$ctrl.model.currentPage+1">Next<span aria-hidden="true">&rarr;</span></a>
                             </li>
                          </ul>
                        </nav>
                    </div>
                </div>    
                <div class="col-md-6">
                    <fieldset>
                        <legend>Product</legend>
                        
                         <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Product name">
                          </div>
                          
                         <div class="form-group">
                            <label for="description">Description</label>
                            <textarea class="form-control" rows="3"></textarea>
                         </div>
                         
                         <div class="form-group">
                            <label for="price">Price</label>
                            <input type="text" class="form-control" style="width: 80px;" id="price" placeholder="Price">
                         </div>
                         
                         <button class="btn btn-primary pull-right">Save</button>
                    </fieldset>
                </div>
            </div>
        </div>
    `;
}

export class PageProductsController {
    public static $inject: Array<string> = ["ProductModel", "$filter"];

    constructor(public model: ProductModel, private $filter: ng.IFilterService) {
    }

    public filteredData(): Array<Product> {
        return this.$filter("filter")(this.model.products, this.model.query);
    }

    public totalPages(): number {
        return Math.ceil(this.filteredData().length / this.model.pageSize);
    }

}

export class StartFromFilter {
    public static $inject: Array<string> = ["$filter"];

    constructor(private $filter: ng.IFilterService) {

    }

    public static factory() {
        return (input: Array<Product>, start: number): Array<Product> => {
            start = +start;
            return input.slice(start);
        };
    }
}