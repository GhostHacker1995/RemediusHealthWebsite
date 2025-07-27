"use client";

import { allCourses } from "@/app/services/index";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CourseCard() {
  const [courses, setCourses] = useState([]);
  const router = useRouter();

  const fetchCourses = async () => {
    try {
      const data = await allCourses();
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleSeeMore = (slug) => {
    router.push(`/courses/${slug}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 bg-gray-100">
      {courses.map((course) => (
        <div
          key={course.id}
          className="w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <div className="relative">
            <img
              src={course.courseCoverPhoto.url}
              alt={course.courseName}
              width={400}
              height={250}
              className="object-cover h-[250px] w-full rounded-t-lg"
            />
            <span className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-semibold py-1 px-2 rounded shadow-md">
              NEW
            </span>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-[#135b78] transition duration-200">
              {course.courseName}
            </h3>

            <div
              className="text-sm text-gray-600 mb-4 line-clamp-3"
              dangerouslySetInnerHTML={{ __html: course.courseOverview.html }}
            />

            <button
              onClick={() => handleSeeMore(course.slug)}
              className="inline-block mt-4 bg-[#ffd059] text-[#135b78] text-sm font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-primary-dark transition duration-200"
            >
              See More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
