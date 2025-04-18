import Image from "next/image";
import React, { Fragment } from "react";

export default function ProjectImages({ images }: { images: string[] }) {
  return (
    <div className="flex flex-row gap-4 overflow-x-auto">
      {images.map((x) => (
        <Fragment key={x}>
          <Image
            className="hidden rounded-md md:block"
            alt={x}
            src={x}
            width={400}
            height={800}
          />
          <Image
            className="md:hidden rounded-md"
            alt={x}
            src={x}
            width={200}
            height={400}
          />
        </Fragment>
      ))}
    </div>
  );
}
