class Reducer {
  toasts: Array<any>;
  constructor() {
    this.toasts = [];
  }
}

export const Store = new Reducer();
