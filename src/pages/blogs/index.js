import BlogsHome from "components/Blogs/BlogsHome";
import Head from "next/head";

const blogs = ({ blogsData }) => {
 return (
  <>
   <Head>
    <title>First Aid | Blogs</title>
    <link rel="shortcut icon" href="faviconHome.ico"></link>
   </Head>
   <BlogsHome blogsData={blogsData} />
  </>
 );
};

export default blogs;

export async function getStaticProps() {
 const res = await fetch("https://tawsifhye.github.io/data/blogs.json");
 console.log(res);
 const blogsData = await res.json();

 return {
  props: {
   blogsData,
  },
 };
}
