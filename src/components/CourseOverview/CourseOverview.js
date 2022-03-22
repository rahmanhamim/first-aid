import AboutCourse from './AboutCourse';
import CourseLink from './CourseLink';
import CourseCurriculam from './CourseCurriculam';
import CourseCertificate from './CourseCertificate';
import CourseReview from './CourseReview';
import CourseFaq from './CourseFaq';
import ViewCourseBottom from './ViewCourseBottom';
const CourseOverview = ({ course }) => {
    return (
        <>
            <AboutCourse course={course} />
            <CourseLink />
            <CourseCurriculam course={course} />
            <CourseCertificate />
            <CourseReview />
            <CourseFaq />
            <ViewCourseBottom />
        </>
    )
}

export default CourseOverview;
