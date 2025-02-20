import { useState } from "react";

const images = [
  {
    id: 1,
    src: "https://source.unsplash.com/random/800x600?project1",
    alt: "Project 1",
  },
  {
    id: 2,
    src: "https://source.unsplash.com/random/800x600?project2",
    alt: "Project 2",
  },
  {
    id: 3,
    src: "https://source.unsplash.com/random/800x600?project3",
    alt: "Project 3",
  },
  {
    id: 4,
    src: "https://source.unsplash.com/random/800x600?project4",
    alt: "Project 4",
  },
  {
    id: 5,
    src: "https://source.unsplash.com/random/800x600?project5",
    alt: "Project 5",
  },
  {
    id: 6,
    src: "https://source.unsplash.com/random/800x600?project6",
    alt: "Project 6",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="mb-6 text-center text-3xl font-bold">Project Gallery</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image) => (
          <div key={image.id} className="group relative">
            <img
              src={image.src}
              alt={image.alt}
              className="h-64 w-full transform cursor-pointer rounded-lg object-cover shadow-md transition duration-300 ease-in-out group-hover:scale-105"
              onClick={() => setSelectedImage(image.src)}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 transition group-hover:opacity-100">
              <p className="text-lg font-semibold text-white">View</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-h-[90vh] max-w-full rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
