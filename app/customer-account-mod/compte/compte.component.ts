import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PhoneFormatPipe } from '../../phone-format.pipe';

@Component({
    selector: 'app-compte',
    templateUrl: './compte.component.html',
    styleUrls: ['./compte.component.scss'],
    providers: [PhoneFormatPipe]
})
export class CompteComponent implements OnInit {

    registerForm: FormGroup;
    model:any={};
    submitted = false;
    private _ouputPhone;
    private _inputPhone;

    // show or hide
    public show: boolean = false;
    public buttonName: any = 'Show';

    // get and set ouputPhone
    get ouputPhone() {
        return this._ouputPhone;
    }
    set ouputPhone(value) {
        this._ouputPhone = value;
    }

    // get and set inputPhone
    get inputPhone() {
        return this._inputPhone;
    }
    set inputPhone(value) {
        this._ouputPhone = this.phonePipe.transform(value)
    }

    // get civility
    get civility() {
        return this.registerForm.get('civility');
    }

    constructor(
        private formBuilder: FormBuilder, private phonePipe: PhoneFormatPipe
    ) { this._inputPhone = ""; }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            civility: ['Monsieur', Validators.required],
            firstName: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z- ]*$')
            ])],
            lastName: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z- ]*$')
            ])],
            address: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9- ]*$')
            ])],
            cp: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^[0-9]{5}$')
            ])],
            city: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z-/ ]*$')
            ])],
            land: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z- ]*$')
            ])],
            phone: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^0[1-6]{1}(([0-9]{2}){4})$')
            ])],
            phone_formated: ['', Validators.required],
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
        });
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
