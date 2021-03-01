export class Result_Female implements common {

    BJDevine_Formula: number;
    DRMiller_Formula: number;
    GJHamwi_Formula: number;
    JDRobinson_Formula: number;
    bmi2: number;
    bmi: any = {};
    result: string = document.getElementById('result').style.display = 'none';
    resulttable: string = document.getElementById('resultTable').style.display = 'none';
    resultbmi: string = document.getElementById('resultBMI').style.display = 'none';

    constructor(bmi: any = []) {
        this.bmi = bmi;

    }

    CalculateMethod() {
        debugger;
        if (isNaN(this.bmi.height) || this.bmi.height == '') {
            this.bmi.result = 'Please enter your height/ number';
            this.result = document.getElementById('result').style.display = 'inline';
        } else if (this.bmi.height >= 200) {
            this.bmi.result = 'Please enter your height less than 200cm';
            this.result = document.getElementById('result').style.display = 'inline';
        } else {
            this.GJHamwi_Formula = (45.5 + (2.2 * ((this.bmi.height - 152.4) * 0.393701)));
            this.BJDevine_Formula = (45.5 + (2.3 * ((this.bmi.height - 152.4) * 0.393701)));
            this.JDRobinson_Formula = (49 + (1.7 * ((this.bmi.height - 152.4) * 0.393701)));
            this.DRMiller_Formula = (53.1 + (1.36 * ((this.bmi.height - 152.4) * 0.393701)));
            this.bmi2 = ((this.bmi.height - 100 + (this.bmi.age * 0.1)) * 0.85);
            this.ShowResult();
        }
    }


    ShowResult() {
        debugger;
        if (isNaN(this.bmi.age) || this.bmi.age == '') {
            this.bmi.result = 'Please enter number';
            this.result = document.getElementById('result').style.display = 'inline';
        } else if (this.bmi.age < 2) {
            this.bmi.result = 'Please enter your age more than 2';
            this.result = document.getElementById('result').style.display = 'inline';
        } else if (this.bmi.age >= 80) {
            this.bmi.result = 'Please enter your age less than 80';
            this.result = document.getElementById('result').style.display = 'inline';
        } else {
            this.bmi.resultRobison = parseFloat(String(this.JDRobinson_Formula)).toFixed(1) + ' kgs';
            this.bmi.resultMiller = parseFloat(String(this.DRMiller_Formula)).toFixed(1) + ' kgs';
            this.bmi.resultDvine = parseFloat(String(this.BJDevine_Formula)).toFixed(1) + ' kgs';
            this.bmi.resultHamwi = parseFloat(String(this.GJHamwi_Formula)).toFixed(1) + ' kgs';
            this.bmi.resultBMI = parseFloat(String(this.bmi2)).toFixed(1) + ' kgs';
            this.resulttable = document.getElementById('resultTable').style.display = 'inline';
        }
    }

    CalculateMethod2() {
        debugger;
        if (isNaN(this.bmi.height) || this.bmi.height == '') {
            this.bmi.result = 'Please enter your height/ number';
            this.result = document.getElementById('result').style.display = 'inline';
        } else if (this.bmi.height >= 200) {
            this.bmi.result = 'Please enter your height less than 200';
            this.result = document.getElementById('result').style.display = 'inline';
        } else {
            this.bmi2 = (this.bmi.height - 100 + (this.bmi.age * 0.1)) * 0.85;
            this.ShowResult2();
        }
    }

    ShowResult2() {
        debugger;
        if (isNaN(this.bmi.age) || this.bmi.age == '') {
            this.bmi.result = 'Please enter number';
            this.result = document.getElementById('result').style.display = 'inline';
        } else if (this.bmi.age < 2) {
            this.bmi.result = 'Please enter your age more than 2';
            this.result = document.getElementById('result').style.display = 'inline';
        } else if (this.bmi.age >= 80) {
            this.bmi.result = 'Please enter your age less than 80';
            this.result = document.getElementById('result').style.display = 'inline';
        } else {
            this.bmi.resultBMI = parseFloat(String(this.bmi2)).toFixed(1) + ' kgs';
            this.bmi.resultbmi = document.getElementById('resultBMI').style.display = 'inline';
        }
    }


}
