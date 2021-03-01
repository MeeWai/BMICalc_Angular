import {Component} from '@angular/core';
import {Result_Female} from './Result_Female';
import {Result_Male} from './Result_Male';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    bmi: any = {};

    constructor() {

    }

    Calculate() {
        debugger;
        let ResultFemale: Result_Female = new Result_Female(this.bmi);
        let ResultMale: Result_Male = new Result_Male(this.bmi);

        if (this.bmi.gender == 'Female') {
            if (this.bmi.height >= 152) {
                ResultFemale.CalculateMethod();
            } else {
                ResultFemale.CalculateMethod2();
            }
        } else {
            if (this.bmi.gender == 'Male') {
                if (this.bmi.height >= 152) {
                    ResultMale.CalculateMethod();
                } else {
                    ResultMale.CalculateMethod2();
                }
            }
        }
    }

    Clear() {
        debugger;
        this.bmi.age = '';
        this.bmi.height = '';
    }
}
