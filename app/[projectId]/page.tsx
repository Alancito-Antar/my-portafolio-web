"use client";

import React, { useCallback, useEffect, useState } from "react";
import ProjectHeader from "../components/project/ProjectHeader";
import { Project } from "@/lib/project/types";
import { doc, getDoc } from "firebase/firestore";
import db from "@/lib/firebase/firestore";
import { useRouter, usePathname } from "next/navigation";
import ProjectImages from "../components/project/ProjectImages";
import { FaChevronLeft } from "react-icons/fa";

export default function ProjectId() {
  const pathname = usePathname();
  const router = useRouter();

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getProjectById = useCallback(async () => {
    setLoading(true);
    const projectId = pathname.split("/")[1];
    if (!projectId) {
      setLoading(false);
      setProject(null);
      return;
    }

    try {
      const projectDoc = (
        await getDoc(doc(db, "projects", projectId as string))
      ).data() as Project;

      setProject(projectDoc);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [pathname]);

  useEffect(() => {
    getProjectById();
  }, [getProjectById]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col gap-y-4">
      <header className="border-b border-white/20 pb-1">
        <button
          className="flex items-center cursor-pointer gap-x-2"
          onClick={() => router.back()}
        >
          <FaChevronLeft />
          <div>Back</div>
        </button>
      </header>
      {/* Project Header */}
      <ProjectHeader project={project} />
      {/* About */}
      <p className="text-white">{project.about}</p>
      {/* Images */}
      <ProjectImages images={project.images || []} />
    </div>
  );
}
