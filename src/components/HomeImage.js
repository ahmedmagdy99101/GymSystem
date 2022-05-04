const HomeImage = () => {
    const handleLearnMore = () => {
        window.addEventListener("click", (e) => {
            if(e.target.className === "headline-button"){
                window.scrollTo({
                    top: 700,
                    behavior: 'smooth'
                });
            }
            console.log(e.target.className);
        })
    }

    return (
        <div>
            <div className='image-section'></div>
            <div className='headline'>
                <p className='headline-head'>Gym Manager is live now!</p><br /><br />
                <p className='headline-text'>Information about your exercises, sessions,
                subscription all in one place now</p>
                <button onClick={handleLearnMore} className='headline-button'>Learn More</button>
            </div>
        </div>
    );
}
 
export default HomeImage;