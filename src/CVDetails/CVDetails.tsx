import type { Details } from "../types";
import "./CVDetails.scss";

interface Props {
  details: Details;
}

export const CVDetails = ({ details: { experience, education } }: Props) => {
  return (
    <>
      <section className="cv-details">
        <h2>Experience</h2>
        <ul>
          {experience.map((el) => (
            <li key={el.id}>
              <strong>{el.year}</strong> – {el.description}
            </li>
          ))}
        </ul>

        <h2>Education</h2>
        <ul>
          {education.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

// export const CVDetails = (props: Props) => {
//   const {
//     details: { experience, education },
//   }: Props = props;
//   return (
//     <>
//       <section className="cv-details">
//         <h2>Experience</h2>
//         <ul>
//           {experience.map((el) => (
//             <li key={el.id}>
//               <strong>{el.year}</strong> – {el.description}
//             </li>
//           ))}
//         </ul>

//         <h2>Education</h2>
//         <ul>
//           {education.map((education, index) => (
//             <li key={index}>{education}</li>
//           ))}
//         </ul>
//       </section>
//     </>
//   );
// };
