import { GetStaticProps } from "next";
import Image from "next/image";
import { request, gql } from "graphql-request";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import parse from "html-react-parser";

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
    "https://ap-south-1.cdn.hygraph.com/content/cljxvfzxd128b01ukbs7ic4ex/master",
    query
  );

  return {
    props: {
      data,
    },
    revalidate: 60 * 2, // 2 minutes
  };
};

function AboutPage({ data }: { data: PostsData }) {
  const { founders, employees, interns } = data;

  return (
    <>
      <Navbar />
      <div className="bg-cover h-96 rounded border bg-white bg-slider_4 bg-fixed bg-no-repeat">
        <h1 className="font-bold flex justify-center text-center align-middle pt-40 text-6xl">
          <span className="text-gray-950  text-6xl bg-white px-2 bg-opacity-30">
            About Us
          </span>
        </h1>
      </div>
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
                {parse(person.content.html)}
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
              {parse(person.content.html)}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-center pt-10">
        <h1 className="font-bold text-center text-6xl p-10 pb-10">
          Our Interns
        </h1>
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
              {parse(person.content.html)}
              </p>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
};

export default AboutPage;