import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PhoneFormatPipe } from '../phone-format.pipe';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
    selector: 'app-compte',
    templateUrl: './compte.component.html',
    styleUrls: ['./compte.component.css'],
    providers: [PhoneFormatPipe]
})
export class CompteComponent implements OnInit {

    registerForm: FormGroup;
    submitted = false;
    private _segment;
    private _seg;

    get segment() {
        return this._segment;
    }

    get seg() {
        return this._seg;
    }

    set seg(value) {
        this._segment = this.phonePipe.transform(value)
    }

    constructor(
        private formBuilder: FormBuilder, private phonePipe: PhoneFormatPipe
    ) { this._seg ="";}

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
            tel: ['', Validators.required],
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

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }
}
