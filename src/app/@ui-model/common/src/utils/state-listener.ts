export interface StateListener {
  setState(state: { [name: string]: any }): void;
}
