import Navbar from "./Navbar/Navbar";

export default function Header() {
    return (
        <header className="sticky z-2 top-0 bg-bg-page border-b-2 border-primary">
            <Navbar />
        </header>
    );
}