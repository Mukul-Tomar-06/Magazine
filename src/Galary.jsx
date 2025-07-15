import './css/Galary.css'
function Galary(){
    let galary=['/img1.jpg','/img4.jpg','/img3.jpg','/img5.jpg','/img6.jpg','/img2.jpg','/img7.jpg','/img8.jpg','/img10.jpg','/img9.jpg','/img11.jpg','/img13.jpg','/img12.jpg']
    return (
        <div>
            <div className="galary">
                <div className="galary-yard">
                    {

                        galary.map((img)=>(
                            <div key={img} className='galary-img'>
                                <a href={img} target="_blank" rel="noopener noreferrer">
                                <img src={img} alt='galary-img'/>
                                </a>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
}
export default Galary;