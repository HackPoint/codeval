import "angular";
import "angular-route";
import {config as routesConfig} from "./configs/routes";
import {PageProductsComponent, StartFromFilter} from './components/pageProducts/PageProductsComponent';
import {ProductModel} from '../core/models/impl/ProductModel';
import {ProductService} from '../core/services/impl/ProductService';
import {LocalStorageService} from  "../../util/LocalStorageService";

angular.module("app.products", ["ngRoute"])
    .service("LocalStorageService",LocalStorageService)
    .service("ProductService",ProductService)
    .service("ProductModel",ProductModel)
    .filter('startFrom', StartFromFilter.factory)
    .component("pageProduct", new PageProductsComponent())
    .config(routesConfig);
