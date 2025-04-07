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
      className={`bg-white/8 cursor-pointer w-100 h-100 hover:bg-white/20 flex flex-col items-center p-4 gap-y-2 justify-center rounded-lg shadow border border-white/20`}
      onClick={() => router.push(`/${id}`)}
    >
      <Image
        className="hidden md:block rounded-full"
        src={
          icon_url ||
          "https://dynamoprojects.com/wp-content/uploads/2022/12/no-image.jpg"
        }
        alt="Project Icon"
        width={120}
        height={120}
      />
      <Image
        className="md:hidden rounded-full"
        src={
          icon_url ||
          "https://dynamoprojects.com/wp-content/uploads/2022/12/no-image.jpg"
        }
        alt="Project Icon"
        width={80}
        height={80}
      />
      <div className="flex flex-col gap-y-1">
        <p className="text-white text-lg">{name}</p>
        {small_description && (
          <p className="text-white text-base">{small_description}</p>
        )}
      </div>
    </button>
  );
}
