import "./CVHeader.scss";

interface Props {
  name: string;
  lastName: string;
}

export const CVHeader = ({ name, lastName }: Props) => {
  return (
    <>
      <header className="cv-header">
        <h1>
          CV - {name} {lastName}
        </h1>
      </header>
    </>
  );
};
