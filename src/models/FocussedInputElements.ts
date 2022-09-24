// for Controlling module's array...
export type VueComponent = {
  id: string;
  name: string;
  entityId: string;
  
  //parameters: string;
  parameters: IQuestionComponent;   
};

// for Vue controls...
export interface IVueComponent {
  Id: string;
  parametersType: ParametersType;
}
export enum ParametersType {
  // ImageWithHeadline,
  Question,
}
export interface IQuestionComponent extends IVueComponent {
  Question: IQuestion;
}
export interface IQuestion {
  questionId: string;
  // questionGuid: string;
  // questionScope: QuestionScope;
  questionText: string;
  // successMessage: string;
  // failedMessage: string;
  // dataType: string;
  controlType: ControlType;
  answer: string;
  // placeholder?: string;
  // messages: Array<string>;
  // availableAnswers: Array<string>;
  // mask: string;
}

export enum ControlType {
  InputString = "InputString",

  // Dropdown = "Dropdown",
  // ImageWithHeadline = "  ImageWithHeadline",
  // NumbersInput = "  NumbersInput",
  // DatePicker = "  DatePicker",
  // Checkboxes = "  Checkboxes",
}