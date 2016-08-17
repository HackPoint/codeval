import "angular";

import {NavbarComponent} from "./components/navbar/NavbarComponent";
import {DataFilterComponent} from "./components/data-filter/DataFilterComponent";
angular.module("app.application", [])
    .component("navbar", new NavbarComponent())
    .component("filter", new DataFilterComponent());