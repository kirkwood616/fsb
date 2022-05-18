import "./ResultsBar.css";

interface Props {
  length: number;
  nameSearch: string;
  tagSearch: string;
}

function ResultsBar({ length, nameSearch, tagSearch }: Props) {
  const isSearch = (): JSX.Element => {
    if (nameSearch || tagSearch) {
      return (
        <>
          {length} {length === 1 ? "Result" : "Results"}
        </>
      );
    } else {
      return <>All Students</>;
    }
  };

  return <div className={nameSearch || tagSearch ? "ResultsBar" : "ResultsBar inactive"}>{isSearch()}</div>;
}

export default ResultsBar;
