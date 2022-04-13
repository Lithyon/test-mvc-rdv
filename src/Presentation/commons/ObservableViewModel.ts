import {DataChangedHandler, ObservableContext} from "../hooks/useBinding";

export default class ObservableViewModel implements ObservableContext {
    private readonly _dataChangedHandler:Map<string, Set<DataChangedHandler>>;

    constructor() {
        this._dataChangedHandler = new Map<string, Set<DataChangedHandler>>();
    }

    subscribeDataChanged(fieldName: string, onDataChangedHandler: DataChangedHandler): void {
        let currentDataChangedHandlerList = this._dataChangedHandler.get(fieldName);

        if(!currentDataChangedHandlerList) {
            currentDataChangedHandlerList = new Set<DataChangedHandler>();
            this._dataChangedHandler.set(fieldName, currentDataChangedHandlerList);
        }

        currentDataChangedHandlerList.add(onDataChangedHandler);
    }

    unsubscribeDataChanged(fieldName: string, onDataChangedHandler: DataChangedHandler): void {
        const currentDataChangedHandlerList = this._dataChangedHandler.get(fieldName);

        if (currentDataChangedHandlerList) {
            currentDataChangedHandlerList.delete(onDataChangedHandler);
        }
    }

    dispatchDataChanged(fieldName: string): void {
        const currentDataChangedHandlerList = this._dataChangedHandler.get(fieldName);

        if (currentDataChangedHandlerList) {
            currentDataChangedHandlerList.forEach(handler => handler());
        }
    }
}

