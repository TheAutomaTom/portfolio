export enum ElementKind {
  // Billboard =  "Billboard",
  // Checkboxes = "Checkboxes",
  // DatePicker = "DatePicker",
  // ListBox = "ListBox",
  NumbersInput =  "NumbersInput",
  StringInput =   "StringInput",
}

export interface IFocussed {  
  id: string;
  spec?:{
    kind: ElementKind;
    label?: string;
  }
  value?: string| number| boolean| undefined;
}

// //== Strings
// export interface IStringInput extends Omit<IFocussed, 'value'> {
//   // label?: string;
//   value: string;
// }
// export interface INullableStringInput extends Omit<IStringInput, 'value'> {
//   value?: string;
// }

// //== Numbers 
// export interface INumberInput extends Omit<IFocussed, 'value'> {
//   label?: string;
//   value: number;
// }
// export interface INullableNumberInput extends Omit<INumberInput, 'value'> {
//   value?: number;
// }