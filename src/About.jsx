import './css/About.css';
function About(){
    return (
<div>
    <div className='about-page'>
        <div className='jenner-info'>
            <h1>Jenner Family</h1>
            <p>The Jenner family, as part of the larger Kardashian-Jenner clan, is known for its presence in entertainment and media. The family's origins trace back to Kris Jenner and her marriages to Robert Kardashian and later Bruce Jenner (now Caitlyn Jenner). Kris and Robert Kardashian had four children: Kourtney, Kim, Khloé, and Rob Kardashian. Kris and Caitlyn Jenner have two daughters together: Kendall and Kylie Jenner.</p>
        </div>
        <div className='family-tree'>
            <img src="/kris.jpg" alt="Kris Jenner" />
            
        </div>
        <div className='child-tree'>
                <img src="/img11.jpg" alt="Kim Kardashian" />
                <img src="/img10.jpg" alt="Khloé Kardashian" />
                <img src="/kendal.jpg" alt="kendal Jenner" />
                <img src="/kylie.jpg" alt="Kylie Jenner" />
        </div>
    <section className="intro-card row">
    <img src="/kris.jpg" alt="Kris Jenner" />
    <div className="info">
        <h1>Kris Jenner</h1>
        <p><strong>Born:</strong> San Diego, California</p>
        <p><strong>Date of Birth:</strong> November 5, 1955</p>
        <p><strong>Siblings:</strong> Karen Houghton</p>
    </div>
</section>

<section className="intro-card row-reverse">
    <img src="/img11.jpg" alt="Kim Kardashian" />
    <div className="info">
        <h1>Kim Kardashian</h1>
        <p><strong>Born:</strong> Los Angeles, California</p>
        <p><strong>Date of Birth:</strong> October 21, 1980</p>
        <p><strong>Siblings:</strong> Kourtney, Khloé, Rob</p>
    </div>
</section>

<section className="intro-card row">
    <img src="/img10.jpg" alt="Khloé Kardashian" />
    <div className="info">
        <h1>Khloé Kardashian</h1>
        <p><strong>Born:</strong> Los Angeles, California</p>
        <p><strong>Date of Birth:</strong> June 27, 1984</p>
        <p><strong>Siblings:</strong> Kim, Kourtney, Rob</p>
    </div>
</section>

<section className="intro-card row-reverse">
    <img src="/kylie.jpg" alt="Kylie Jenner" />
    <div className="info">
        <h1>Kylie Jenner</h1>
        <p><strong>Born:</strong> Los Angeles, California</p>
        <p><strong>Date of Birth:</strong> August 10, 1997</p>
        <p><strong>Siblings:</strong> Kendall, Kim, Khloé, Kourtney, Rob</p>
    </div>
</section>

<section className="intro-card row">
    <img src="/kendal.jpg" alt="Kendall Jenner" />
    <div className="info">
        <h1>Kendall Jenner</h1>
        <p><strong>Born:</strong> Los Angeles, California</p>
        <p><strong>Date of Birth:</strong> November 3, 1995</p>
        <p><strong>Siblings:</strong> Kylie, Kim, Khloé, Kourtney, Rob</p>
    </div>
</section>



    
    </div>
</div>
    );
}
export default About;