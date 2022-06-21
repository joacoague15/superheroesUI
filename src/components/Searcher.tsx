import '../styles/searcherStyle.css';

const Searcher = (props: any) => {
    const { handleChange } = props;

    return (
        <div>
            <input id='searcher' placeholder='Search your hero...' onChange={handleChange} type="text" name="name" />
        </div>
        )
}

export default Searcher;