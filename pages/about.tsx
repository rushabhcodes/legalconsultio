import { GetStaticProps } from "next";
import Image from "next/image";
import { request, gql } from "graphql-request";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Post {
  name: string;
  dp: {
    url: string;
    fileName: string;
  };
}

interface PostsData {
  posts: Post[];
}

export const getStaticProps: GetStaticProps<{ data: PostsData }> = async () => {
  const query = gql`
    query Posts {
      posts {
        name
        dp {
          url
          fileName
        }
      }
      
    }
  `;

  const data = await request<PostsData>(
    "https://ap-south-1.cdn.hygraph.com/content/clh39efxt4w3q01um86kee6dq/master",
    query
  );

  return {
    props: {
      data,
    },
    revalidate: 60 * 60, // 1 hour
  };
};

function AboutPage({ data }: { data: PostsData }) {
  const posts = data.posts;

  return (
    <>
      <Navbar />
      <div className="max-w-screen bg-about bg-fixed bg-repeat-round h-80">
        <h1 className="font-bold flex justify-center text-center align-middle pt-40 text-6xl">
          About Us
        </h1>
      </div>
      <div className="flex justify-center pt-10">
        <h1 className="font-bold text-center text-6xl p-10 pb-10">
          The Founders
        </h1>
      </div>
      {posts.map((post) => (
        <div key={post.name}>
          <div className="grid justify-items-center justify-center justify- grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 px-10 py-10 ">
            <div className="flex justify-center p-10 shadow-2xl rounded-full">
              <Image
                className="rounded-full"
                src={post.dp.url}
                alt={post.dp.fileName}
                width={300}
                height={300}
              />
            </div>
            <div className="py-10">
              <div className="font-bold text-3xl mb-2">{post.name}</div>
              <p className="text-gray-700 text-base pr-12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-center pt-10">
        <h1 className="font-bold text-center text-6xl p-10 pb-10">
          Our Team
        </h1>
      </div>

      <Footer />
    </>
  );
}

export default AboutPage;
