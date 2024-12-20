import Certificate from "@/types/Certificate";

export function Certificates() {
  const certificates: Certificate[] = [
    {
      id: 1,
      name: "Git and Github",
      link:
        "https://www.coursera.org/account/accomplishments/verify/QWH2XMVZF5NA?",
    },
    {
      id: 2,
      name: "Intro to Web Dev with HTML, CSS & JS",
      link:
        "https://www.coursera.org/account/accomplishments/verify/Q394N72HYK4R",
    },
  ];

  return (
    <section>
      <h2 className="text-lg font-bold mb-3 text-sky-600">CERTIFICATES</h2>
      <ul className="list-disc pl-5">
        {certificates.map((cert, index) => (
          <li key={index} className="text-sm">
            <a href={cert.link} className="text-sky-600 hover:underline">
              {cert.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
