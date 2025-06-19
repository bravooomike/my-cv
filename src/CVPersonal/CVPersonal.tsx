import type { Personal } from "../types";

interface Props {
  personal: Personal;
}

export const CVPersonal = (props: Props) => {
  const { personal: { photo, name, lastName, position }}: Props = props;

  return (
    <>
      <aside className="cv-personal">
        <h2>Personal data</h2>
        <img
          className="cv-photo"
          src={photo}
          alt={`${name} ${lastName} - profile photo`}
        />
        <p>
          {name} {lastName}
        </p>
        <small>{position}</small>
      </aside>
    </>
  );
};
