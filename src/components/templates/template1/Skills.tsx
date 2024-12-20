export function Skills() {
  const skills = [
    "HTML, CSS, Javascript",
    "Typescript",
    "React js",
    "Next js",
    "Sanity",
    "Tailwind CSS",
    "Figma",
    "Git and Github (Basics)",
    "Python (Basics)",
    "Java (Basics + OOP)",
    "C++ (Data structures and algorithms)",
  ];

  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold mb-3 text-sky-600">SKILLS</h2>
      <ul className="list-disc pl-5 grid grid-cols-2 gap-2 font-semibold">
        {skills.map((skill, index) => (
          <li key={index} className="text-sm">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
