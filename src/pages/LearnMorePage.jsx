// src/pages/LearnMorePage.jsx

const LearnMorePage = () => {
  return (
    <div>
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-r from-violet-950 to-violet-900">
        <section className="container mx-auto text-center text-white">
          <h1 className="mb-4 text-4xl font-bold">
            Learn More About Eden Birds
          </h1>
          <p className="mb-8 text-lg">
            Birds Of Eden is dedicated to delivering innovative software
            solutions that enhance efficiency, productivity, and user
            experience.
          </p>
          <p>
            Explore our website or contact us at{" "}
            <a href="mailto:info@edenbirds.com" className="text-blue-400">
              info@edenbirds.com
            </a>{" "}
            for more information.
          </p>
        </section>
      </main>
    </div>
  );
};

export default LearnMorePage;
