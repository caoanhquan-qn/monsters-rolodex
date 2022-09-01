import './SearchBar.css';

type SearchBarProps = {
  term: string;
  onSearch: (a: string) => void;
  placeholder: string;
};

function SearchBar(props: SearchBarProps) {
  const { term, onSearch, placeholder } = props;
  return (
    <input
      className="search"
      type="search"
      value={term}
      onChange={(e) => onSearch(e.target.value)}
      placeholder={placeholder}
    />
  );
}

export default SearchBar;
