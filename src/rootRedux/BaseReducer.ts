import { BaseActions } from "./BaseActions";

export abstract class BaseReducer {
  abstract reducer(state:any, action:BaseActions<any>):any;
}
