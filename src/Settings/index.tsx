import Checkbox from "../Checkbox"
import Select from "../Select"
import Radio from "../Radio"

export default function Settings() {
    return (
        <div className="settings">
            <h1>Main</h1>
            <Checkbox title="Dark mode" checked={true} />
            <Checkbox title="Auto start" checked={false} />
            <h1>Language</h1>
            <Radio first="English" second="Russian"></Radio>
        </div>
    )
}