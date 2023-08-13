export default function Nav() {
    return (
        <nav>
            <div className="info">
                <img className="logo" src="../public/BitLauncherLogo.png" alt="Logo" />
                <h1 className="launcher-name">BitLauncher</h1>
            </div>
            <a href="/">Home</a>
            <a href="https://discord.gg/REGm2QASC7" target="_blank">Discord</a>
            <a href="/settings">Settings</a>
        </nav>
    )
}