"use server";
import { revalidatePath, revalidateTag } from "next/cache";

export const revalidate = async (tag: string) => {
  console.log("revalidate", tag);
  revalidateTag(tag);
};

export const revalidateUrl = async (path: string) => {
  revalidatePath(path);
};
