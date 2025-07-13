export default function OurStorySection() {
  return (
    <section className="relative bg-white mt-0">
      {/* Floating Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center -top-320 sm:-top-140">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-12 sm:mx-auto mx-3 max-w-3xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase">
            Our Story
          </h3>
          <p className="text-gray-700 mb-3">
            Remedius Mobile Health was founded in 2022 by a group of healthcare
            professionals and technologists that were working together at Kabale
            Regional Referral Hospital who saw the potential for technology to
            transform the way healthcare was delivered in the country.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative z-0 max-w-6xl mx-auto mt-0 pt-40 sm:pt-50 pb-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <h4 className="text-lg font-bold text-gray-900 mb-2">Innovation</h4>
          <p className="text-gray-700">
            At Remedius Mobile Health, we believe that our culture is a key
            driver of our success. We are a team of passionate and dedicated
            individuals who are committed to improving the healthcare industry
            through the use of technology.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <h4 className="text-lg font-bold text-gray-900 mb-2">
            Collaboration
          </h4>
          <p className="text-gray-700">
            Our culture is centered on innovation, collaboration, and continuous
            improvement. We encourage our team members to think creatively and
            come up with new ideas, and we foster an environment of open
            communication and teamwork. We believe that by working together, we
            can achieve better results and make a greater impact.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <h4 className="text-lg font-bold text-gray-900 mb-2">Diversity</h4>
          <p className="text-gray-700">
            We are also committed to diversity and inclusion. We value and
            respect the unique perspectives and backgrounds of our team members,
            and we believe that a diverse workforce is a key component of our
            success.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <h4 className="text-lg font-bold text-gray-900 mb-2">Well-being</h4>
          <p className="text-gray-700">
            We prioritize the well-being of our team members and strive to
            create a positive work environment that is supportive, flexible, and
            enjoyable. We offer a range of benefits and perks, including
            flexible work schedules, opportunities for professional development,
            and a collaborative and friendly atmosphere.
          </p>
        </div>
      </div>
    </section>
  );
}
