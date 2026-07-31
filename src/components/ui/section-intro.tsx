export function SectionIntro({title, intro}: {title: string; intro: string}) {
  return (
    <div className="sectionIntro">
      <h1>{title}</h1>
      <p>{intro}</p>
    </div>
  );
}
