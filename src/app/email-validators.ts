import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    // One uppercase at least
    const emailRegex = RegExp('(?=.*[A-Z])');
    const valid = emailRegex.test(control.value);

    const errors = {
        email: {
            email: 'doit contenir @'
        }
    };

    return !valid ? errors : null;
}