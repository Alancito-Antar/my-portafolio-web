import { Project } from "@/lib/project/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function ProjectCard({
  id,
  name,
  icon_url,
  small_description,
}: Project) {
  const router = useRouter();

  return (
    <button
      className={`bg-white/8 cursor-pointer w-100 hover:bg-pink-500/8 flex flex-col p-4 gap-y-2 rounded-xl shadow border border-black/10`}
      onClick={() => router.push(`/${id}`)}
    >
      <div className="flex flex-col items-start gap-y-1">
        <p className="text-black text-lg">{name}</p>
        {small_description && (
          <p className="text-black text-base">{small_description}</p>
        )}
      </div>

      <div className="flex justify-end">
        <Image
          className="hidden md:block rounded-full"
          src={
            icon_url ||
            "https://dynamoprojects.com/wp-content/uploads/2022/12/no-image.jpg"
          }
          alt="Project Icon"
          width={60}
          height={60}
        />
        <Image
          className="md:hidden rounded-full"
          src={
            icon_url ||
            "https://dynamoprojects.com/wp-content/uploads/2022/12/no-image.jpg"
          }
          alt="Project Icon"
          width={40}
          height={40}
        />
      </div>
    </button>
  );
}
