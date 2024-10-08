import { useBlogsData, useCollection } from "../../firebase/helper";
import BlogCard from "./card";
import NavBar from "../../Components/NavBar/NavBar";
import Spinner from "../../Components/Spinner";
import { Link } from "react-router-dom";

const MainBlogPage = () => {
  const { documents, loading } = useCollection("mainBlogs");

  const { title, blogs } = documents[0] || {};

  // console.log(title, blogs);
  const blogPaths = Array.isArray(blogs) && blogs.map((docRef) => docRef.path);

  const { data: blogsData, loading: loadingBlogsData } = useBlogsData(
    blogPaths || []
  );

  if (loadingBlogsData || loading) return <Spinner value={"h-screen"} />;

  // console.log(blogsData, "blogsData");

  return (
    <>
      <NavBar />
      <div className=" pb-10  flex justify-center items-center flex-col">
        <div className="bg-blog_bg min-h-[400px] w-full flex justify-center items-center bg-cover bg-center">
          <h1 className="text-center text-4xl text-white">{title}</h1>
        </div>

        <div className="mt-10 flex justify-center items-center">
          <button
            className="flex justify-center items-center w-56 call_to_action h-12 mt-5 rounded-lg bg-[#f79f24] font-semibold text-white"
            onClick={() => window.location.href = 'tel:720-928-6680'}
          >
            Call us Today!
          </button>
        </div>

        <div className="pb:32">
          {blogsData &&
            blogsData.map((blog, index) => {
              return (
                <BlogCard
                  key={index}
                  title={blog.title}
                  description={blog.description}
                  date={blog.date}
                  image={blog.image}
                  link={`/${blogPaths[index]}`}
                  author={blog.author}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default MainBlogPage;
// .sort((a, b) => new Date(b.date) - new Date(a.date))
