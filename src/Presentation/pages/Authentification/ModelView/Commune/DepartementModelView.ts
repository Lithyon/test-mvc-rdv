import {RegionModelView} from "./RegionModelView";

export interface DepartementModelView {
    codeDepartement: string;
    nom: string;
    region: RegionModelView;
}
