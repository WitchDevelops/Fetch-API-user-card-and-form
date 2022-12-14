import { Link, useMatch, useResolvedPath } from 'react-router-dom';
export default function Navbar() {
    
    return <nav className="nav">
        <Link to="/" className="site-title">Dominika Wojewska</Link>
        <ul>
            <CustomLink to="/form">Formularz rejestracyjny</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}>{children}</Link>
        </li>
    )
}