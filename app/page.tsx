import Image from "next/image";
import { PropsWithChildren } from "react";
import PurgeButton from "./PurgeButton";

const Card = ({ children }: PropsWithChildren) => (
  <div className="bg-white shadow-md rounded-md p-4 flex flex-col gap-2">
    {children}
  </div>
);

const getCat = async () => {
  const apiUrl = "https://api.thecatapi.com/v1/images/search";
  const apiKey =
    "live_mNDGi2RPgIVlvaqP8gDpNQmwH46nVwPP7gDTHCviWxCasw0KftjUoUet5PHBSt4z";
  const headers = {
    "x-api-key": apiKey,
  };
  const catUrl = (
    await fetch(apiUrl, {
      headers,
      next: { revalidate: 10, tags: ["cat"] },
    }).then((r) => r.json())
  )[0].url;
  return catUrl;
};

const getDog = async () => {
  const dogUrl = (
    await fetch("https://dog.ceo/api/breeds/image/random", {
      next: { revalidate: 20, tags: ["dog"] },
    }).then((r) => r.json())
  ).message;
  return dogUrl;
};

export default async function Home() {
  const dogUrl = await getDog();
  const catUrl = await getCat();
  return (
    <main className="grid min-h-screen grid-cols-2 items-center justify-between p-24 gap-2">
      <Card>
        <Image src={dogUrl} width={500} height={500} alt="Dog" />
        <PurgeButton tag={"dog"} />
      </Card>
      <Card>
        <Image src={catUrl} width={500} height={500} alt="Cat" />
        <PurgeButton tag={"cat"} />
      </Card>
      <div className="w-full my-4 col-span-2 flex justify-center ">
        <PurgeButton url="/"></PurgeButton>
      </div>
    </main>
  );
}
