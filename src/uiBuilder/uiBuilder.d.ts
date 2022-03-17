export default class UiBuilder {
    constructor(defaultClickEvent?: null);
    colorPicker(name: any, defaultValue?: string): void;
    textInput(name: any, defaultValue?: string): void;
    numberInput(name: any, defaultValue?: number): void;
    submitFormBtn(caption?: string, className?: string): void;
    cancelFormBtn(caption?: string, className?: string): void;
    label(title?: string): void;
    titleLabel(title?: string): void;
    customDialogDivColumn(className?: string): HTMLDivElement;
    hr(): void;
    randomId(): number;
    display(): void;
}
//# sourceMappingURL=uiBuilder.d.ts.map