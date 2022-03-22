import ResultsHome from "components/Quiz/ResultsHome";
import { useSelector } from "react-redux";


export  const  getStaticProps = async ()=>{
  const res = await fetch("https://tawsifhye.github.io/data/courses.json");
  const courses = await res.json()
  return {
    props: {
      courses
    }
  };
}


const results = ({courses}) => {


 
   
  return (
    <>
        <ResultsHome courses={courses}/>
    </>
  )
}

export default results