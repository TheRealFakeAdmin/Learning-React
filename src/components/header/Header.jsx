import "./Header.scss";

export default function Header({ title }) {
    return (
        <header className="header">
            <h1>{title}</h1>
        </header>
    );
}
