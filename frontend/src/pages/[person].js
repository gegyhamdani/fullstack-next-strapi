import Image from "next/image";
import { Inter } from "next/font/google";
import { getAllPeople, getSelectedPerson } from "@/api/services";
import { backendUrl } from "@/helpers/config";

const inter = Inter({ subsets: ["latin"] });

const Person = ({ data }) => {
  return (
    <main
      className={`max-w-2xl m-auto flex min-h-screen flex-col items-center pt-24 p-4 ${inter.className}`}
    >
      <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden">
        <Image
          className="relative"
          src={`${backendUrl}${data.attributes.profile.data.attributes.url}`}
          alt="Next.js Logo"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="w-full flex flex-col items-center mt-8 gap-2">
        <h3 className="text-2xl font-bold">{data.attributes.name}</h3>
        <p className="text-lg">{data.attributes.description}</p>
      </div>
      <div className="h-full w-full flex flex-col items-center gap-8 mt-12">
        {data.attributes.links.data.map((val) => (
          <a
            target="_blank"
            href={val.attributes.url}
            rel="noopener noreferrer"
            className="h-full w-full text-center bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-[24px] p-4 hover:scale-105 transition-all cursor-pointer"
            key={val.id}
          >
            {val.attributes.description}
          </a>
        ))}
      </div>
    </main>
  );
};

export const getStaticPaths = async () => {
  const res = await getAllPeople();
  const data = res.data.data;

  const paths = data.map((value) => ({
    params: { person: value.attributes.url },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps = async ({ params }) => {
  const res = await getSelectedPerson(params.person);

  if (res.data.data.length === 0) {
    return {
      redirect: {
        destination: "/404",
      },
    };
  }

  return {
    props: {
      data: res.data.data[0],
    },
    revalidate: 20,
  };
};

export default Person;
