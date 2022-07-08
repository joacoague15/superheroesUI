const Searcher = (props: any) => {
    const { handleChange, placeHolder, className, type, value } = props;

    return (
        <div>
            <input className={className} placeholder={placeHolder} onChange={handleChange} type={type} value={value} />
        </div>
        )
}

export default Searcher;