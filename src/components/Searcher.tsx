const Searcher = (props: any) => {
    const { handleChange } = props;

    return (
        <div>
            <label>
                Search for the hero you want to recruit:
                <input onChange={handleChange} type="text" name="name" />
            </label>
        </div>
        )
}

export default Searcher;