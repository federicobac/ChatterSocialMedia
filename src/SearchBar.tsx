interface SearchBarProps {
    value: string,
    onChange: (value: string) => void,
    onClick: () => Promise<void>;
}

export default function SearchBar({value, onChange, onClick}: SearchBarProps) {
    return (
        <>
            <input
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder="Search for posts"
            />

            <button onClick={onClick}>
                Search
            </button>
        </>
    )
}