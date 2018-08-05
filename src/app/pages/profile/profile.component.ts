import { Component } from '@angular/core';
import { Profile } from './profile.interface';

@Component({
  	selector: 'ngx-profile',
  	styleUrls: ['./profile.component.scss'],
  	templateUrl: './profile.component.html',
})
export class ProfileComponent {
	constructor(){
		 
	}

	userProfile: Profile = {  
		"employee_id":"051794767",
		"first_name":"Willabella",
		"last_name":"Marc",
		"email":"wmarc0@miitbeian.gov.cn",
		"skills":[
		   "Whiplash",
		   "Basel III",
		   "Family Therapy"
		],
		"location":"7222 Chinook Pass",
		"github":"https://github.com/hkqmrby",
		"linkedin":"https://www.linkedin.com/in/erwtk",
		"school": {
		 "school_name": "University of toronto",
		 "school_location": "Toronto",
		 "field_of_study": "Computer Engineering Honors",
		 "year_of_school": "Final year",
		 "graduating_year": "2019",
		 "graduating_term": "Fall"
		},
		"job": {
		   "job_title": "Software Developer",
		   "job_team": "Global Technology Infrastructure",
		   "job_hired_term": "Summer",
		   "job_hired_year": "2019"
		},
		"top10skills": [
			"Adobe Design Suit",
		   "Angular",
		   "React",
		   "Javascript/ECMA6",
		   "HTML/CSS"
		 ]
	 };

	 onEditClick(){
		 console.log("Open a modal");
	 }
}	
