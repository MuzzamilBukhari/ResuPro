import EducationType from "@/types/Education";

export function Education() {
  const education: EducationType[] = [
    {
      id: 1,
      degree: "BS in Software Engineering",
      institution: "DCS, UoK",
      details: "CGPA: 3.3 | Jan'22 - Current",
    },
    {
      id: 2,
      degree: "Inter Pre-enginering",
      institution: "Jinnah Govt College",
      details: "Per 88.9% | 2021",
    },
    {
      id: 3,
      degree: "Matriculation CS",
      institution: "Premier School",
      details: "Per 71.3% | 2019",
    },
  ];

  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold mb-3 text-sky-600">EDUCATION</h2>
      <ul className="list-disc pl-5">
        {education.map((edu) => (
          <li key={edu.id} className="text-sm">
            <div className="flex justify-between">
              <div>
                <span>{edu.degree}</span> |{" "}
                <span className="ml-2">{edu.institution}</span>
              </div>
              <div>{edu.details}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
