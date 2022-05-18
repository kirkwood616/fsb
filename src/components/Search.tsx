import { Dispatch, SetStateAction } from "react";
import "./Search.css";

interface Props {
  nameSearch: string;
  setNameSearch: Dispatch<SetStateAction<string>>;
  tagSearch: string;
  setTagSearch: Dispatch<SetStateAction<string>>;
}

function Search({ nameSearch, setNameSearch, tagSearch, setTagSearch }: Props) {
  return (
    <div className="Search">
      <input type="text" placeholder="Search by name" value={nameSearch} onChange={(e) => setNameSearch(e.target.value.toLowerCase())} />
      <input type="text" placeholder="Search by tag" value={tagSearch} onChange={(e) => setTagSearch(e.target.value)} />
    </div>
  );
}

export default Search;
