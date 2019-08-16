import {FormBuilder, FormGroup} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
/** @title Form field with label */
@Component({
  selector: 'app-registration-to-study',
    templateUrl: './registration-to-study.component.html',
    styleUrls: ['./registration-to-study.component.css']
})
export class RegistrationToStudyComponent implements OnInit{
  options: FormGroup;
  myControl = new FormControl();
  options2: string[] = ['אחד', 'שתיים', 'שלוש'];
  filteredOptions: Observable<string[]>;

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options2.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }


  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });

    
  }

  
}




  
