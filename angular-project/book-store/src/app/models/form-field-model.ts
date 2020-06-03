
export class FormField {
    name: string;
    displayName: string;
    value: any;
    type: FormTypesEnum;
    section: FormSection;
    order: number;
    displayType: DisplayType;
    validator: string;
}
export class FormSection{

}

export enum FormTypesEnum {
    TextInput = 'textInput',
    CheckBox = 'checkBox',
    RadioButton = 'radioButton',
    Heading1 = 'h1',
    DisplayText = 'text'

}

export enum DisplayType {
    FullSectionDisplay = 'fullSection',
    FullDisplay = 'full',
    PartialDisplay = 'partial',
    InlineDisplay = 'inline'
}
