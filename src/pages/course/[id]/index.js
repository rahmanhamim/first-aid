import CourseOverview from "components/CourseOverview/CourseOverview";
import Head from "next/head";

const index = ({ course }) => {
    return (
        <>
            <Head>
                <title>Course Overview</title>
                <link rel="shortcut icon" href="favicon2.ico"></link>
            </Head>
            <CourseOverview course={course} />
        </>
    );
};

export async function getStaticPaths() {
    const res = await fetch('https://tawsifhye.github.io/data/courses.json');
    const courses = await res.json();
    const paths = courses.map(course => ({
        params: { id: course.id.toString() }
    })
    );
    return { paths, fallback: false };
}

export async function getStaticProps(context) {
    const res = await fetch('https://tawsifhye.github.io/data/courses.json');
    const courses = await res.json();
    const course = courses.find(course => course.id.toString() === context.params.id);
    return { props: { course } };
}

export default index;
