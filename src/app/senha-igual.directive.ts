import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector:'[appSenhaIgual]',
    providers: [{provide:NG_VALIDATORS, useExisting:SenhaIgualDirective,multi: true}]
})

export class SenhaIgualDirective implements Validator
{
    validate(control: AbstractControl): ValidationErrors | null{
        const senha = control.get('senha');
        const senhaConfirmacao = control.get('senhaConfirmacao');
        debugger;
        if((!senha) || (!senhaConfirmacao))
            return null;
     

        return senha.value!=senhaConfirmacao.value ? {senhasNaoBatem: true } : null;
    }
}