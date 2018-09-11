import { Component } from '@angular/core';
import { Profile } from '../profile/profile.interface';
import { HttpClient } from '@angular/common/http';

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface Result {
  picture: Picture;
}

interface RootObject {
  results: Result[];
}

@Component({
  selector: 'ngx-Home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})

export class HomeComponent {

  // baseUrl = "ec2-34-229-253-114.compute-1.amazonaws.com";

  userProfile: Profile = {  
		"employee_id":"051794767",
		"first_name":"Willabella",
		"last_name":"Marc",
		"email":"wmarc0@miitbeian.gov.cn",
		"skills":[
		   "Angular",
		   "React Js",
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
    }
    
	 };


  constructor(private http: HttpClient) { }
  
  matchedStudentsArr: [Profile];
  userProfileUrl;
  ngOnInit() {
    this.getData();
  }

  getData() {
    var skill = this.userProfile.skills[0];
    var url = '/students/field/search?field=skills&query='+ skill;

    this.http.get(url)
    .subscribe((data: [Profile]) => {
      this.matchedStudentsArr = data;
      this.http.get('api/'+'?results='+ this.matchedStudentsArr.length +'&inc=picture&noinfo&seed=foobar')
      .subscribe((data: RootObject) => {
        this.userProfileUrl = data.results;
        
      });

    });
  }
} 
