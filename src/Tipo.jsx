import NUBES from './IMG/CIRRO.jpg'
import NUBES2 from './IMG/CIRROII.jpg'
import NUBES3 from './IMG/CIRROIII.jpg'
import NUBES4 from './IMG/ME.jpg'
import NUBES5 from './IMG/MEII.jpg'
import NUBES6 from './IMG/MEIII.jpg'
import NUBES7 from './IMG/BAI.jpg'
import NUBES8 from './IMG/BAII.jpg'
import NUBES9 from './IMG/BAIII.jpg'
function Tipo( { Tip, Des} ){
  return(
      <>
          <h3>{Tip}<br/>
          Las nubes se clasifican en tres categorías principales según su altitud:</h3>
          <p>{Des}

          <h2>Nubes altas (5.000-13.000 metros)</h2>
            <ol>
            <li>Cirros (Ci): Delgadas, blancas y filamentosas, como plumas.</li>
            <li>Cirrocúmulos (Cc): Pequeños grupos o capas de cirros.</li>
            <li>Cirroestratos (Cs): Capas delgadas y transparentes que cubren todo el cielo.</li>
            </ol>          
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <figure>
              <img src={NUBES} alt="Imagen 1" />
                <figcaption>Nubes cirros</figcaption>
            </figure>
            <figure>
             <img src={NUBES2} alt="Imagen 2" />
                <figcaption>Nube Cirrocúmulos </figcaption>
            </figure>
            <figure>
             <img src={NUBES3} alt="Imagen 3" />
                <figcaption>Nube Cirroestratos </figcaption>
            </figure>
            </div>

          <h2>Nubes medias (2.000-5.000 metros)</h2>
          <ol>
          <li>Altocúmulos (Ac): Capas o parches de nubes blancas o grises con sombras.</li>
          <li>Altoestratos (As): Capas grises u azuladas que cubren parte o todo el cielo.</li>
          <li>Nimboestratos (Ns): Capas grises oscuras que producen lluvia o nieve.</li>
          </ol>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <figure>
              <img src={NUBES5} alt="Imagen 1" />
                <figcaption>Nubes Altocúmulos </figcaption>
            </figure>
            <figure>
             <img src={NUBES4} alt="Imagen 2" />
                <figcaption>Nube Altoestratos  </figcaption>
            </figure>
            <figure>
             <img src={NUBES6} alt="Imagen 3" />
                <figcaption>Nube Nimboestratos  </figcaption>
            </figure>
            </div>
          <h2>Nubes bajas (hasta 2.000 metros)</h2>
          <ol>
          <li>Estratocúmulos (Sc): Parches de nubes grises o blancas con bases planas.</li>
          <li>Estratos (St): Capas uniformes y grises que cubren todo el cielo.</li>
          <li>Cúmulos (Cu): Nubes blancas y esponjosas con bases planas y cimas redondeadas.</li>
          <li>Cumulonimbos (Cb): Nubes imponentes y de desarrollo vertical que pueden producir tormentas eléctricas, granizo y tornados.</li>
          </ol>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <figure>
              <img src={NUBES7} alt="Imagen 1" />
                <figcaption>Nubes Estratocúmulos </figcaption>
            </figure>
            <figure>
             <img src={NUBES8} alt="Imagen 2" />
                <figcaption>Nube Cúmulos  </figcaption>
            </figure>
            <figure>
             <img src={NUBES9} alt="Imagen 3" />
                <figcaption>Nube Cumulonimbos  </figcaption>
            </figure>
            </div>
          </p>
      </>
  )
}
export default Tipo
