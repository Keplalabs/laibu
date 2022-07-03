export const COURSES='courses'
export const UNITS='units'
export const NOTES='notes'
export const ASSIGNMENTS='assignments'
export const VIDEOS='videos'
export const ACTIVE_UNIT="activeUnit"
export const Categories = [
  { label: NOTES, category: 'document' },
  { label: ASSIGNMENTS, category: 'assignment' },
  { label: VIDEOS, category: 'video' }
]

export const RECENT='recent'
export const CURRENT_SEMESTER_UNITS='currentSemesterUnits'
export const RECENT_FILES='RECENT_FILES'
export const bgTypes={image:'image',color:'color',gradient:'gradient'}
export const defaultBgColor="#E0FBFF"
export const ERROR='error'
export const WARNING='warning'
export const SUCCESS='success'
export const STUDENT_EMAIL="@students.uonbi.ac.ke"
export const FACULTY_EMAIL="@uonbi.ac.ke"
export enum Status{
    //individual with student email
    STUDENT="student",
    //individual with faculty email
    FACULTY="faculty",
    //a moderator is a student who has been asigned the moderator role by a faculty member
    MODERATOR="moderator"
}