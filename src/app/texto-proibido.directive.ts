import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector:'[appTextoProibido]',
    providers: [{provide:NG_VALIDATORS, useExisting:TextoProibidoDirective,multi: true}]
})

export class TextoProibidoDirective implements Validator
{
    @Input('appTextoProibido') textoProibido='';
    validate(control: AbstractControl): ValidationErrors | null{
        let proibido=  false;
        if(this.textoProibido)
        {
            let reg = new RegExp(this.textoProibido,'i');
            proibido = reg.test(control.value);
        }
        return proibido ? {textoProibido: {value: control.value}} : null;
    }
}