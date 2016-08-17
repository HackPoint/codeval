import "./modules/products/angular/index";
import "./modules/application/angular/index";
import "angular";

// load our default (non specific) css
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/screen.scss";

angular.module("app", ["app.application", "app.products"]);
angular.bootstrap(document, ["app"], {
    strictDi: true
});