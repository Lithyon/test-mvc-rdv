import RegionModelViewBuilder from "./RegionModelViewBuilder";

export default class DepartementModelViewBuilder {
    static buildEmpty() {
        return {
            codeDepartement: "",
            nom: "",
            region: RegionModelViewBuilder.buildEmpty()
        };
    }
}
