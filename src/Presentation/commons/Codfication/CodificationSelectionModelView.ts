import CodificationModelView from "./CodificationModelView";

export default interface CodificationSelectionModelView {
  readonly codification: Array<CodificationModelView>;
  readonly codificationSelected: CodificationModelView;
}
