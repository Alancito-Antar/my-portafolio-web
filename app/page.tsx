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
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-red-400 bg-clip-text text-transparent mb-4">
            Senior Mobile & Web Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Building exceptional mobile and web experiences with React Native,
            Android, and modern web technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-gray-400">
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
              <span>Available for new projects</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>📍</span>
              <span>Buenos Aires, Argentina</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-2">
            Featured Projects
          </h2>
          <p className="text-gray-400">
            Explore my latest work and achievements
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-500 rounded-full animate-pulse"></div>
              <div
                className="w-4 h-4 bg-gray-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-4 h-4 bg-red-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <span className="text-gray-400 ml-4">Loading projects...</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        )}

        {projects.length === 0 && !loading && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-400">Check back later for updates!</p>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-white/10">
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-white">4+</div>
          <div className="text-gray-400 text-sm">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-gray-200">
            {projects.length}
          </div>
          <div className="text-gray-400 text-sm">Projects Completed</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-gray-300">3</div>
          <div className="text-gray-400 text-sm">Platforms</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-red-500">
            100%
          </div>
          <div className="text-gray-400 text-sm">Client Satisfaction</div>
        </div>
      </section>
    </div>
  );
}
