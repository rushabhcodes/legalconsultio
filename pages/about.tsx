import { GetStaticProps } from "next";
import Image from "next/image";
import { request, gql } from "graphql-request";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Person {
  name: string;
  dp: {
    url: string;
    fileName: string;
  };
  content: {
    html: string;
  };
}

interface PostsData {
  founders: Person[];
  employees: Person[];
  interns: Person[];
}

export const getStaticProps: GetStaticProps<{ data: PostsData }> = async () => {
  const query = gql`
    query Posts {
      founders {
        name
        dp {
          url
          fileName
        }
        content {
          html
        }
      }

      employees {
        name
        dp {
          url
          fileName
        }
        content {
          html
        }
      }

      interns {
        name
        dp {
          url
          fileName
        }
        content {
          html
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
  const { founders, employees, interns } = data;

  return (
    <>
      <Navbar />
      <div className="max-w-screen bg-about bg-fixed bg-repeat-round h-80">
        <h1 className="font-bold flex justify-center text-center align-middle pt-40 text-6xl">
          About Us
        </h1>
      </div>
<<<<<<< Updated upstream
      <div className="flex justify-center pt-10">
        <h1 className="font-bold text-center text-6xl p-10 pb-10">
          The Founders
        </h1>
      </div>

      {founders.map((person) => (
        <div key={person.name}>
          <div className="grid justify-items-center justify-center justify- grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 px-10 py-10 ">
            <div className="flex justify-center p-10 shadow-2xl rounded-full">
              <Image
                className="rounded-full"
                src={person.dp.url}
                alt={person.dp.fileName}
                width={300}
                height={300}
              />
            </div>
            <div className="py-10">
              <div className="font-bold text-3xl mb-2">{person.name}</div>
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
        <h1 className="font-bold text-center text-6xl p-10 pb-10">Our Team</h1>
      </div>

      {employees.map((person) => (
        <div key={person.name}>
          <div className="grid justify-items-center justify-center justify- grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 px-10 py-10 ">
            <div className="flex justify-center p-10 shadow-2xl rounded-full">
              <Image
                className="rounded-full"
                src={person.dp.url}
                alt={person.dp.fileName}
                width={300}
                height={300}
              />
            </div>
            <div className="py-10">
              <div className="font-bold text-3xl mb-2">{person.name}</div>
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
          Our Interns
        </h1>
=======


      {/* description */}
      <div className="flex justify-center">
        <p className="text-center font-semibold text-2xl p-5 mt-5  px-5 lg:px-40">
          We are a team of lawyers who are here to help you with your legal
          queries. We have a team of lawyers who are experts in their fields and
          are here to help you with your legal issues. We are here to help you
          with your legal issues and queries.
        </p>
      </div>

      <div>
        <p className="text-center font-semibold text-xl p-5 mt-5 px-5 lg:px-40">
          While you are facing any sort of a legal questioning, you must not be
          aware from where to start your journey from. Indeed it is a daunting
          task to evaluate the legal issues along with choosing the perfect
          lawyer to handle your legal things as per your requirements. Searching
          for a lawyer is an easy task but searching for the RIGHT LAWYER is
          what we can serve you right here to give you the One Stop Solution
          with our team of experts. We here at Dahanu Lawyers are right here to
          assist you with your personal and your financial stakes. Be it
          corporate or the general clients, since it is not that easy to gather
          the facts we help you out with every bit of it.
        </p>
>>>>>>> Stashed changes
      </div>
      {interns.map((person) => (
        <div key={person.name}>
          <div className="grid justify-items-center justify-center justify- grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 px-10 py-10 ">
            <div className="flex justify-center p-10 shadow-2xl rounded-full">
              <Image
                className="rounded-full"
                src={person.dp.url}
                alt={person.dp.fileName}
                width={300}
                height={300}
              />
            </div>
            <div className="py-10">
              <div className="font-bold text-3xl mb-2">{person.name}</div>
              <p className="text-gray-700 text-base pr-12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
}

export default AboutPage;

// import { GetStaticProps } from "next";
// import Image from "next/image";
// import { request, gql } from "graphql-request";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// interface Post {
//   name: string;
//   dp: {
//     url: string;
//     fileName: string;
//   };
// }

// interface PostsData {
//   posts: Post[];
// }

// export const getStaticProps: GetStaticProps<{ data: PostsData }> = async () => {
//   const query = gql`
//     query Posts {
//       posts {
//         name
//         dp {
//           url
//           fileName
//         }
//       }

//     }
//   `;

//   const data = await request<PostsData>(
//     "https://ap-south-1.cdn.hygraph.com/content/clh39efxt4w3q01um86kee6dq/master",
//     query
//   );

//   return {
//     props: {
//       data,
//     },
//     revalidate: 60 * 60, // 1 hour
//   };
// };

// function AboutPage({ data }: { data: PostsData }) {
//   const posts = data.posts;

//   return (
//     <>
//       <Navbar />
//       <div className="max-w-screen bg-about bg-fixed bg-repeat-round h-80">
//         <h1 className="font-bold flex justify-center text-center align-middle pt-40 text-6xl">
//           About Us
//         </h1>
//       </div>
//
// {posts.map((post) => (
//   <div key={post.name}>
//     <div className="grid justify-items-center justify-center justify- grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 px-10 py-10 ">
//       <div className="flex justify-center p-10 shadow-2xl rounded-full">
//         <Image
//           className="rounded-full"
//           src={post.dp.url}
//           alt={post.dp.fileName}
//           width={300}
//           height={300}
//         />
//       </div>
//       <div className="py-10">
//         <div className="font-bold text-3xl mb-2">{post.name}</div>
//         <p className="text-gray-700 text-base pr-12">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//           Voluptatibus quia, nulla! Maiores et perferendis eaque,
//           exercitationem praesentium nihil.
//         </p>
//       </div>
//     </div>
//   </div>
// ))}

//       <div className="flex justify-center pt-10">
//         <h1 className="font-bold text-center text-6xl p-10 pb-10">
//           Our Team
//         </h1>
//       </div>

//
//     </>
//   );
// }

// export default AboutPage;
