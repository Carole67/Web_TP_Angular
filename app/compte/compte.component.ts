import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PhoneFormatPipe } from '../phone-format.pipe';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
    selector: 'app-compte',
    templateUrl: './compte.component.html',
    styleUrls: ['./compte.component.scss'],
    providers: [PhoneFormatPipe]
})
export class CompteComponent implements OnInit {

    registerForm: FormGroup;
    submitted = false;
    private _segment;
    private _seg;
    valueToBePassed: string;

    // show or hide
    public show: boolean = false;
    public buttonName: any = 'Show';

    // get and set segment
    get segment() {
        return this._segment;
    }
    set segment(value) {
        this._segment = value;
    }

    // get and set seg
    get seg() {
        return this._seg;
    }
    set seg(value) {
        this._segment = this.phonePipe.transform(value)
    }

    // get civility
    get civilite() {
        return this.registerForm.get('civilite');
    }

    constructor(
        private formBuilder: FormBuilder, private phonePipe: PhoneFormatPipe
    ) { this._seg = ""; }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            civilite: ['Monsieur', Validators.required],
            firstName: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z ]*$')
            ])],
            lastName: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z ]*$')
            ])],
            address: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9 ]*$')
            ])],
            cp: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^[0-9]{5}$')
            ])],
            ville: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z ]*$')
            ])],
            pays: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z ]*$')
            ])],
            tel: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^0[1-6]{1}(([0-9]{2}){4})$')
            ])],
            tel_formated: ['', Validators.required],
            mail: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z]{2,6}$')
            ])],
            login: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9-_]+$')
            ])],
            password: ['', [
                Validators.required,
                Validators.minLength(8)
                //Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')
            ]],
            confirmPassword: ['', Validators.required],
        },
            {
                validator: MustMatch('password', 'confirmPassword')
            });

        this.registerForm.valueChanges.subscribe(newVal => console.log(newVal))
    }


    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.show = true;
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            this.show = false;
        }
        else {
            // display form values on success
            //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.get('login').value, null, 4));
        }
        this.toggle(this.show);
    }

    toggle(show: Boolean) {
        // hide or show reacap
        if (show)
            this.buttonName = "Hide";
        else
            this.buttonName = "Show";
    }
}
