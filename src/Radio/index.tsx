export default function Radio(props: any) {
    return (
        <div className="radio-wrapper">
            <label htmlFor="radio1">{props.first}</label>
            <input type="radio" value={props.first} name="radio" id="radio1"/>
            <label htmlFor="radio1">{props.second}</label>
            <input type="radio" value={props.second} name="radio" />
        </div>
    )
}