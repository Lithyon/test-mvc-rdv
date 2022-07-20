import LoadElementEvent from "./LoadElementEvent";
import LoadPercentEvent from "./LoadPercentEvent";
import LoadWaitingIsOver from "./LoadWaitingIsOver";

export default interface LoadingEvent extends LoadElementEvent, LoadPercentEvent, LoadWaitingIsOver {
}
