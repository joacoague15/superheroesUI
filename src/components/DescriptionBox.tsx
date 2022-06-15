import '../styles/descriptionBox.css';

const DescriptionBox = (props: any) => {
        return (
            <div className='description'>
                { props.children }
            </div>
        )
}

export default DescriptionBox;