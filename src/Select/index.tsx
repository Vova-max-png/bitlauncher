export default function Select(props: any) {
    return (
        <div className="select-wrapper">
            <h1>{props.title}</h1>
            <select name="" id="">
                {props.options.map((elem: any, index: number) => {
                    return <option key={index} value={elem}>{elem}</option>
                })}
            </select>
        </div>
    )
}