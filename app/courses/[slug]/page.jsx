"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCourseDetails } from "@/app/services/index";

export default function CourseDetails({ params }) {
  const [course, setCourse] = useState(null);
  const router = useRouter();
  const { slug } = params;

  const fetchCourseDetails = async () => {
    try {
      const data = await getCourseDetails(slug);
      setCourse(data);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchCourseDetails();
    }
  }, [slug]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="md:p-6 p-2 bg-gray-100 min-h-screen pt-30 md:pt-30">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={course.courseCoverPhoto.url}
          alt={course.courseName}
          className="w-full h-[500px] object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {course.courseName}
          </h1>
          <p className="text-gray-600 mb-4">
            <strong>Created At:</strong>{" "}
            {new Date(course.createdAt).toLocaleDateString()}
          </p>
          <div
            className="text-gray-700 mb-6"
            dangerouslySetInnerHTML={{ __html: course.courseOverview.html }}
          />
          <div
            className="text-gray-700 mb-6"
            dangerouslySetInnerHTML={{ __html: course.courseDescription.html }}
          />
          {course.trainers && course.trainers.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Trainers</h2>
              <div className="flex flex-wrap gap-4">
                {course.trainers.map((trainer, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <img
                      src={trainer.trainersImage.url}
                      alt={trainer.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <p className="text-gray-700">{trainer.trainersName}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          <a
            href={course.courseLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ffd059] text-[#135b78] text-sm font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-primary-dark transition duration-200"
          >
            Watch Now
          </a>
        </div>
      </div>
    </div>
  );
}
