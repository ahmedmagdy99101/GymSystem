const HomeSection = ({ Title, Paragraph, Image }) => {
    return (
        <div className='home-section'>
            <ul className='home-exer wrapper'>
                <li className='exer-text'>
                    <p className='exer-head'>{Title}</p>
                    <p className='exer-decription'>{Paragraph}</p>
                </li>
                <li><img className='exer-img' src={Image} /></li>
            </ul>
        </div>
    );
}
 
export default HomeSection;