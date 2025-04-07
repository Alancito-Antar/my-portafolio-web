import { Project } from "@/lib/project/types";
import Image from "next/image";
import React from "react";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";

export default function ProjectHeader({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-x-4">
      <Image
        className="rounded-full"
        width={80}
        height={80}
        src={
          project.icon_url ||
          "https://dynamoprojects.com/wp-content/uploads/2022/12/no-image.jpg"
        }
        alt="Project Icon"
      />

      <div className="flex-1 gap-y-1">
        {/* Name */}
        <div className="flex gap-x-4">
          <h1 className="text-black text-3xl">{project.name}</h1>
          <div className="h-4 rounded-lg bg-blue-500 px-2">
            <p className="text-white text-xs capitalize">{project.type}</p>
          </div>
        </div>
        {/* Teck stack */}
        <div className="flex items-center flex-wrap gap-x-2">
          {project.tech_stack?.map((x) => (
            <div
              className="flex items-center justify-center px-2 self-center py-1 rounded-full items-center bg-black/10"
              key={x}
            >
              <p className="text-black text-sm">{x}</p>
            </div>
          ))}
        </div>
        {/* Stores */}
        <div className="flex mt-1 items-center gap-x-2">
          {project.appstore_url ? (
            <a href={project.appstore_url} target="_blank" rel="noreferrer">
              <FaAppStore size={32} color="black" />
            </a>
          ) : null}
          {project.google_play_url ? (
            <a href={project.google_play_url} target="_blank" rel="noreferrer">
              <FaGooglePlay size={32} color="black" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
