const Searcher = (props: any) => {
    const { handleChange, placeHolder, className, type } = props;

    return (
        <div>
            <input className={className} placeholder={placeHolder} onChange={handleChange} type={type} />
        </div>
        )
}

export default Searcher;