"use client";

import db from "@/lib/firebase/firestore";
import { Project } from "@/lib/project/types";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import ProjectCard from "../components/home/ProjectCard";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getProjects = async () => {
    setLoading(true);
    try {
      const querySnapshot = (await getDocs(collection(db, "projects"))).docs;
      setProjects(
        querySnapshot
          .map((doc) => {
            const project: Project = { ...doc.data(), id: doc.id } as Project;
            return project;
          })
          .sort((a, b) => {
            // Put contractor first
            if (a.type === "contractor" && b.type !== "contractor") return -1;
            if (a.type !== "contractor" && b.type === "contractor") return 1;
            return 0;
          })
      );
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="flex flex-col gap-y-10">
      {loading && <div className="text-black">Loading...</div>}

      <div className="overflow-y-auto items-center justify-center flex flex-wrap gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
