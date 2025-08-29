import { Project } from "@/lib/project/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function ProjectCard({
  id,
  name,
  icon_url,
  small_description,
  type,
}: Project) {
  const router = useRouter();

  const getTypeColor = (projectType: string | undefined) => {
    switch (projectType) {
      case "contractor":
        return "bg-gray-700/30 text-gray-200 border-gray-600/40";
      case "freelance":
        return "bg-red-500/20 text-red-300 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  const getTypeIcon = (projectType: string | undefined) => {
    switch (projectType) {
      case "contractor":
        return "🏢";
      case "freelance":
        return "💼";
      default:
        return "🚀";
    }
  };

  return (
    <div
      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-500/20"
      onClick={() => router.push(`/${id}`)}
    >
      {/* Header with Icon */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Image
              className="rounded-lg ring-2 ring-white/20 group-hover:ring-gray-400/50 transition-all duration-300"
              src={
                icon_url ||
                "https://dynamoprojects.com/wp-content/uploads/2022/12/no-image.jpg"
              }
              alt="Project Icon"
              width={48}
              height={48}
            />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center">
              <span className="text-xs">✨</span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold text-lg group-hover:text-gray-200 transition-colors duration-300">
              {name}
            </h3>
            <div
              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(
                type
              )} mt-1`}
            >
              <span className="mr-1">{getTypeIcon(type)}</span>
              {type ? type.charAt(0).toUpperCase() + type.slice(1) : "Project"}
            </div>
          </div>
        </div>

        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      {/* Description */}
      {small_description && (
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {small_description}
        </p>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="flex items-center space-x-2 text-xs text-gray-400">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
          <span>Active</span>
        </div>

        <button className="text-gray-300 hover:text-red-400 text-sm font-medium transition-colors duration-300 flex items-center space-x-1">
          <span>View Details</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </button>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-500/5 to-gray-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
}
