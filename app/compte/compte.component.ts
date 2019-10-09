import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
    selector: 'app-compte',
    templateUrl: './compte.component.html',
    styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z]+$')
            ])],
            lastName: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z]+$')
            ])],
            address: ['', Validators.required],
            cp: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^[0-9]{5}$')
            ])],
            ville: ['', Validators.required],
            pays: ['', Validators.required],
            tel: ['', Validators.compose([
                Validators.required
            ])],
            mail: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$')
            ])],
            login: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9-_]+$')
            ])],
            password: ['', [Validators.required, Validators.minLength(8)]],
            confirmPassword: ['', Validators.required],
        },
            {
                validator: MustMatch('password', 'confirmPassword')
            });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }


}
