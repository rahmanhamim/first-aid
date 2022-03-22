/* eslint-disable react-hooks/exhaustive-deps */
import Courses from "components/Courses/Courses";
import Freeresources from "components/Home/Freeresources";
import Hero from "components/Home/Hero";
import TipsSection from "components/Home/TipsSection";
import LatestNews from "components/Home/LatestNews";
import StudentReviewSection from "components/Shared/StudentReviewSection";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCourses } from "Redux/actions/fetchCourses";



export default function Home({ courses, freeResources, newses }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourses(courses));
  }, [dispatch, courses]);
  return (
    <div >
      <Head>
        <title>First Aid Online Courses</title>
        <link rel="shortcut icon" href="faviconHome.ico"></link>
      </Head>
      <Hero />
      <Courses courses={courses} />
      <Freeresources freeResources={freeResources} />
      <TipsSection />
      <StudentReviewSection />
      <LatestNews newses={newses} />
    </div>
  );

}

export async function getStaticProps() {
  // https://tawsifhye.github.io/data/courses.json

  const courseResponse = await fetch('https://tawsifhye.github.io/data/courses.json');
  const courses = await courseResponse.json();

  const freeResouresResponse = await fetch('https://tawsifhye.github.io/data/freeresources.json');
  const freeResources = await freeResouresResponse.json();

  const latestNewsResponse = await fetch('https://tawsifhye.github.io/data/latestnews.json');
  const newses = await latestNewsResponse.json();


  return {
    props: {
      courses,
      freeResources,
      newses
    }
  }
}

