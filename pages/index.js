import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home () {
	return (
      <div className="w3-content" style={{maxWidth: '1400px'}}>
        {/* Header */}
        <header className="w3-container w3-center w3-padding-32"> 
          <h1><b>BEM VINDAS AO NOSSO BLOG</b></h1>
          <p>Nós somos <span className="w3-tag">Júlia e Maria Clara</span></p>
        </header>
        {/* Grid */}
        <div className="w3-row">
          {/* Blog entries */}
          <div className="w3-col l8 s12">
            {/* Blog entry */}
            <div className="w3-card-4 w3-margin w3-white">
              <img src="public/paisagem.jpg" alt="Nature" style={{width: '100%'}} />
              <div className="w3-container">
                <h3><b>NOSSA PRIMEIRA VIAGEM</b></h3>
                <h5>New York, <span className="w3-opacity">14 de maio, 2018</span></h5>
              </div>
              <div className="w3-container">
                <p>Além de ser a cidade que nunca dorme, New York tem muitas experiências para desfrutar durante sua viagem. Vamos lhe falar sobre os melhores para que você tenha uma memória inesquecível de sua estadia.</p>
                <div className="w3-row">
                  <div className="w3-col m8 s12">
                    <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
                  </div>
                  <div className="w3-col m4 w3-hide-small">
                    <p><span className="w3-padding-large w3-right"><b>Comments</b> <span className="w3-tag">10000</span></span></p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            {/* Blog entry */}
            <div className="w3-card-4 w3-margin w3-white">
              <img src="public/maldivas.jpg" alt="Norway" style={{width: '100%'}} />
              <div className="w3-container">
                <h3><b>VIAGEM INESQUECIVEL</b></h3>
                <h5>Maldivas, <span className="w3-opacity">24 de dezembro, 2021</span></h5>
              </div>
              <div className="w3-container">
                <p>No post de hoje do blog, apresento a vocês um dos destinos mais bonitos e cobiçados do mundo – as Ilhas Maldivas. Tínhamos planos de conhecer esse lugar de águas calmas e cristalinas há muitos anos e desta vez, dentro de uma viagem maior, encaixamos a tão esperada visita.😍</p>
                <div className="w3-row">
                  <div className="w3-col m8 s12">
                    <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
                  </div>
                  <div className="w3-col m4 w3-hide-small">
                    <p><span className="w3-padding-large w3-right"><b>Comments</b> <span className="w3-badge">50000</span></span></p>
                  </div>
                </div>
              </div>
            </div>
            {/* END BLOG ENTRIES */}
          </div>
          {/* Introduction menu */}
          <div className="w3-col l4">
            {/* About Card */}
            <div className="w3-card w3-margin w3-margin-top">
              <img src="public/amigas.jpg" style={{width: '100%'}} />
              <div className="w3-container w3-white">
                <h4><b>Júlia e Maria Clara</b></h4>
                <p>Duas amigas que amam viajar pelo mundo e estão loucas para compartilhar suas experiências 🌎</p>
              </div>
            </div><hr />
            {/* Posts */}
            <div className="w3-card w3-margin">
              <div className="w3-container w3-padding">
                <h4>Popular Posts</h4>
              </div>
              <ul className="w3-ul w3-hoverable w3-white">
                <li className="w3-padding-16">
                  <img src="public/disney.jpg" alt="Image" className="w3-left w3-margin-right" style={{width: '50px'}} />
                  <span className="w3-large">Disney</span><br />
                  <span>28 de novembro, 2018</span>
                </li>
                <li className="w3-padding-16">
                  <img src="public/canada.jpg" alt="Image" className="w3-left w3-margin-right" style={{width: '50px'}} />
                  <span className="w3-large">Canada</span><br />
                  <span>06 de abril, 2020</span>
                </li> 
                <li className="w3-padding-16">
                  <img src="public/cancun.jpg" alt="Image" className="w3-left w3-margin-right" style={{width: '50px'}} />
                  <span className="w3-large">Cancun</span><br />
                  <span>20 de setembro, 2021</span>
                </li>   
                <li className="w3-padding-16 w3-hide-medium w3-hide-small">
                  <img src="public/los angeles.jpg" alt="Image" className="w3-left w3-margin-right" style={{width: '50px'}} />
                  <span className="w3-large">Los Angeles</span><br />
                  <span>02 de junho, 2019</span>
                </li>  
              </ul>
            </div>
            <hr /> 
            {/* Labels / tags */}
            <div className="w3-card w3-margin">
              <div className="w3-container w3-padding">
                <h4>Tags</h4>
              </div>
              <div className="w3-container w3-white">
                <p><span className="w3-tag w3-black w3-margin-bottom">Travel</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">New York</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">London</span>
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">IKEA</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">NORWAY</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">DIY</span>
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Ideas</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Baby</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Family</span>
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">News</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Clothing</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Shopping</span>
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Sports</span> <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Games</span>
                </p>
              </div>
            </div>
            {/* END Introduction Menu */}
          </div>
          {/* END GRID */}
        </div><br />
        {/* END w3-content */}
      </div>
    );
  }