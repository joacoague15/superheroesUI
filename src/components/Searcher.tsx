const Searcher = (props: any) => {
    const { handleSubmit, handleChange, disabled } = props;

    return (
        <div>
            <label>
                Who do you want to recruit:
                <input onChange={handleChange} type="text" name="name" />
            </label>
            <input disabled={disabled} onClick={handleSubmit} type="submit" value="Submit" />
        </div>
        )
}

export default Searcher;