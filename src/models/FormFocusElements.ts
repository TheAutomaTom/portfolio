export enum ElementKind {
  // Billboard =  "Billboard",
  // Checkboxes = "Checkboxes",
  // DatePicker = "DatePicker",
  // ListBox = "ListBox",
  InputNumber =  "InputNumber",
  InputString =   "InputString",
}

export interface IFocussed {
  //=From IVueComponent...
  id: string;
  name: string;
  // entityId: string;
  parameters: string;

  //=From IQuestionComponent...
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