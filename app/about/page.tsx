"use client";

import React from "react";

export default function AboutPage() {
  return (
    <div className="flex justify-center">
      {/* Info */}
      <div className="bg-white/8 items-center w-[50%] hover:bg-pink-500/8 flex flex-col p-4 gap-y-4 rounded-xl shadow border border-black/10">
        <div className="flex flex-col gap-y-1">
          <h1 className="text-4xl text-center text-black font-bold">
            Hey there! I&apos;m Alan
          </h1>
          <p className="text-center text-black text-xs text-black/50">
            More things would come here, but the fun stuff is on the other tab.
            Ill add some images of my later (?)
          </p>
        </div>

        <p className="text-black/80 text-base text-center">
          Ssr mobile developer with +4 years of experience in Mobile Developing
          using React Native and Android Studio (Kotlin, Java) with strong
          knowledge of various programming languages. Skilled in working agile
          methodologies (SCRUM) and conducting bilingual client-facing
          conversations.
        </p>
      </div>
    </div>
  );
}
