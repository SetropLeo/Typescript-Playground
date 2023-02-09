export abstract class ScreenState {}

export class Form extends ScreenState {
  email: string = "";
  password: string = "";
}

export class Error extends ScreenState {
  email: boolean = false;
  password: boolean = false;
}

export class Loading extends ScreenState {}
