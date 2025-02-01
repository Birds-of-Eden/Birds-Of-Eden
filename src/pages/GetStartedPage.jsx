// src/pages/GetStartedPage.jsx

const GetStartedPage = () => {
  return (
    <div>
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-r from-violet-950 to-violet-900">
        <section className="container mx-auto text-center text-white">
          <h1 className="mb-4 text-4xl font-bold">
            Get Started with Eden Birds
          </h1>
          <p className="mb-8 text-lg">
            We are excited to help you transform your ideas into reality with
            our innovative technology solutions.
          </p>
          <p>
            Contact us at{" "}
            <a href="mailto:info@birdsofeden.com" className="text-blue-400">
              info@edenbirds.com
            </a>{" "}
            to get started.
          </p>
        </section>
      </main>
    </div>
  );
};

export default GetStartedPage;
