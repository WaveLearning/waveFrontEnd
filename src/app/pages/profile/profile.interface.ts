interface Job{
    job_title: string;
    job_team: string;
    job_hired_term: string;
    job_hired_year: string;
}

interface School{
    school_name: string;
    school_location: string;
    field_of_study: string;
    year_of_school: string
    graduating_year: string;
    graduating_term: string;
}

export interface Profile {
    employee_id: string;
    first_name: string;
    last_name: string;
    email: string;
    skills: string[];
    location: string;
    github: string;
    linkedin: string;
    school: School;
    job: Job;
}
