import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";

export default function Layout(props) {
    const { children } = props;
    return (
        <div>
            <Header />
            <main className="main">
                <Home />
            </main>
            {children}
        </div>
    );
}