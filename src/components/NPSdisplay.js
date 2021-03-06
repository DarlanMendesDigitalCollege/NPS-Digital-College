import './NPSdisplay.css';
import smile from '../../src/assets/img/smileNPS.png';
import feliz from '../../src/assets/img/feliz.png';
import medio from '../../src/assets/img/medio.png';
import triste from '../../src/assets/img/triste.png';
import { useEffect, useState } from 'react';

const NPSdisplay = ({ nps }) => {

    const [npsResult] = useState([
        { title: " Excelência", avatar: feliz , text: "São as empresas que satisfazem seus clientes, atendendo às suas expectativas e garantindo uma boa experiência ao usuário, conquistando consumidores fiéis que recomendam e defendem a marca.", color: "#2dc937" },
        { title: "Qualidade", avatar: feliz , text: "Empresas qualificadas nessa zona contam com clientes satisfeitos com a marca, mas que ressaltaram pontos que deixaram a desejar. Realizar uma avaliação da jornada do cliente é importante para que a empresa possa identificar possíveis falhas.", color: "#99c140" },
        { title: "Aperfeiçoamento", avatar:  medio , text: "Empresas com score de aperfeiçoamento devem ter muita atenção com os feedbacks dos seus clientes. Estar situado nesta zona significa que muitos clientes não tiveram uma boa expperiencia e não ficaram satisfeitos com a empresa. Refazer processos, melhorar estratégias e conhecer melhor as espectativas dos clientes são pontos importantes a serem avaliados.", color: "#f0c055" },
        { title: "Crítica", avatar:  triste , text: "Empresas classificadas como Zona Crítica devem tomar ações rápidas emrelação às suas estratégias. Essa categoria indica que muitos clientes ficaram insatisfeitos com a empresa e que não recomendariam a marca. Eles  serão os primeiros a reclamarem, a divulgarem feedbacks negativos sobre suas experiências, podendo engajar uma comunidade de outros clientes.", color: "#dc4242" }
    ])





    useEffect(() => {
        
    }, [nps]);
    return (

        <div className="Container-NPS-display"
            style={{
                backgroundColor: nps >= 75 ? npsResult[0].color :
                    nps >= 50 ? npsResult[1].color :
                        nps >= 0 ? npsResult[2].color :
                            nps >= -100 ? npsResult[3].color :
                                "gray"
            }}

        >
            <div className='NPS-display-title'>
                <img src={nps >= 75 ? npsResult[0].avatar :
                    nps >= 50 ? npsResult[1].avatar :
                        nps >= 0 ? npsResult[2].avatar :
                            nps >= -100 ? npsResult[3].avatar : ""} />

                            
                <div className='NPS-display-title-text'> <br/><div><h3>zona de</h3></div> <h1>{nps >= 75 ? npsResult[0].title :
                    nps >= 50 ? npsResult[1].title :
                        nps >= 0 ? npsResult[2].title :
                            nps >= -100 ? npsResult[3].title : "Espera"}</h1>
                </div>
            </div>
            <hr />
            <div className='NPS-display-result'>  {nps>=-100&&nps<=100? nps : "NPS"} %  </div>
            <div className='NPS-display-text'> {nps >= 75 ? npsResult[0].text :
                nps >= 50 ? npsResult[1].text :
                    nps >= 0 ? npsResult[2].text :
                        nps >= -100 ? npsResult[3].text : "Liste o banco ou insira manualmente"} </div>
        </div>

    );
}
export default NPSdisplay;