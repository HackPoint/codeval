config.$inject = ["$routeProvider"];
export function config($routeProvider: ng.route.IRouteProvider): void {
    $routeProvider
        .when("/", {
            template: "<page-product></page-product>",
            redirectTo: '/products'
        })
        .when('/products', {template: "<page-product></page-product>"});
}