import React from "react";
import PurgeButton from "../PurgeButton";

type Props = {};

export const revalidate = 30;

// export async function generateStaticParams() {
//   return [];
// }

const CachedPage = (props: Props) => {
  console.log("Running stuff");
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center flex-wrap gap-4">
      <span className="w-full flex justify-center">
        CachedPage {new Date().toISOString()}{" "}
      </span>
      <PurgeButton url="/cached"></PurgeButton>
    </div>
  );
};

export default CachedPage;
