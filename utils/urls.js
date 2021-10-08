export const api = {
    domain:'https://uon-notes-api.herokuapp.com/',
    routes: {
        allUnitsUrl: '/ext/api/units/all'
        , coursesUrl: '/ext/api/courses/all'
        , addMyCourseUrl: '/ext/api/add/mycourse'
        , getCourseUrl: '/ext/api/course/details'
        , unitNotesUrl: '/ext/api/unit/notes/all'
        , courseUnitsUrl: '/ext/api/course/units'
        , addContentUrl: '/ext/api/add/content'
        , uploadUrl: 'https://alex2kepler.pythonanywhere.com/upload'
        , addModeratorUrl: '/ext/api/add/moderator'
        , searchUrl: '/ext/api/search'
        , uploadVideoUrl: '/ext/api/add/videos'
        ,getToken:'/ext/api/token'
        ,filterUnitsUrl:'/ext/api/units/filter'
        ,courseInfo:'/ext/api/user/courseInfo'
    }
}