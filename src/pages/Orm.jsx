const Orm = () => {
  return (
    <section className="bg-gray-50 py-12 dark:bg-slate-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-4xl transform rounded-lg bg-white p-8 shadow-lg transition-transform hover:scale-105 dark:bg-slate-800">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-purple-500 md:text-4xl">
            ORM Services
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Object-Relational Mapping (ORM) is a technique that allows
            developers to interact with relational databases using an
            object-oriented approach. Instead of writing raw SQL queries, ORM
            frameworks map database tables to classes and rows to objects,
            making database operations more intuitive and manageable within
            programming languages. This abstraction simplifies CRUD (Create,
            Read, Update, Delete) operations and improves code maintainability.
          </p>

          <ul className="mt-6 space-y-4">
            <li className="flex items-start">
              <span className="text-gray-700 dark:text-gray-300">
                One of the main advantages of ORM is that it reduces the need
                for repetitive SQL queries by providing high-level methods to
                interact with the database. Developers can use object-oriented
                syntax to retrieve, insert, update, and delete records without
                worrying about database-specific SQL syntax. Additionally, ORM
                tools often include features like schema migrations, validation,
                and relationships between tables, further streamlining database
                management.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-700 dark:text-gray-300">
                Despite its advantages, ORM is not always the best choice for
                every project. In applications requiring high-performance
                database operations with complex queries, raw SQL may be more
                efficient than ORM-generated queries. Some ORMs also introduce
                additional overhead, which can affect performance when dealing
                with large datasets or real-time applications.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-700 dark:text-gray-300">
                Popular ORM tools include Sequelize and Prisma for JavaScript,
                SQLAlchemy and Django ORM for Python, Hibernate for Java, and
                Entity Framework for C#. Each ORM has its own strengths and is
                designed to work seamlessly with different programming languages
                and databases. Choosing the right ORM depends on factors like
                project requirements, scalability, and database compatibility.
              </span>
            </li>
          </ul>

          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
            While ORM provides many advantages, it may not be the best choice
            for every scenario. For high-performance applications that require
            complex queries and fine-tuned database optimization, raw SQL or
            query builders like Knex.js may be more efficient.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Orm;
