import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
    // One uppercase at least
    const passwordRegex = RegExp('(?=.*[@])');
    const valid = passwordRegex.test(control.value);

    const errors = {
        password: {
            rules: 'doit contenir au moins une majuscule'
        }
    };

    return !valid ? errors : null;
}