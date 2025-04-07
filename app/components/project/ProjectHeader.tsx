import { Project } from "@/lib/project/types";
import Image from "next/image";
import React from "react";

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
        <div className="relative">
          <h1 className="text-white text-3xl">{project.name}</h1>
          <div className="rounded-lg bg-blue-500 absolute top-[-20] right-[-40] px-2">
            <p className="text-white text-xs capitalize">{project.type}</p>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-x-2">
          {project.tech_stack?.map((x) => (
            <div
              className="flex items-center justify-center px-2 self-center py-1 rounded-full items-center bg-white/10"
              key={x}
            >
              <p className="text-white text-sm">{x}</p>
            </div>
          ))}
        </div>

        {/* <div className="flex-row items-center gap-x-2">
          {project.appstore_url ? (
            <Pressable onPress={() => handleStorePress(project.appstore_url!)}>
              <Ionicons name="logo-apple-appstore" size={32} color="white" />
            </Pressable>
          ) : null}
          {project.google_play_url ? (
            <Pressable
              onPress={() => handleStorePress(project?.google_play_url!)}
            >
              <Ionicons name="logo-android" size={32} color="white" />
            </Pressable>
          ) : null}
        </div> */}
      </div>
    </div>
  );
}
