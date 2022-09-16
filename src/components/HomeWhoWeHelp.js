import { useState } from 'react';
import Pagination from './Pagination';
import Decor from './elements/Decor';
import Header from './elements/Header';
import fundData from '../data/foundations.json';
import orgData from '../data/organizations.json';
import colData from '../data/collections.json';
 
export default function HomeWhoWeHelp() {

    const key = ["foundations", "organizations", "collections"]
    const [isShown, setIsShown] = useState("foundations");
    const [data, setData] = useState(fundData);

    const handleClick = (key) => {
        if (key === "foundations") {
            setIsShown(key)
            setData(fundData)
        } 
        if (key === "organizations"){
            setIsShown(key)
            setData(orgData)
        }
        if (key === "collections") {
            setIsShown(key)
            setData(colData)
        }
    }

    const text = {
        fundText: "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
        orgText: "Wszystkie najważniejsze organizacje pozarządowe w jednym miejscu. Dzięki wieloletniej współpracy gwarantujemy uczciwość i transparentność.",
        localText: "Spontaniczne zbiórki oraganizowane przez naszych zaufanych wolontariuszy. Sprawdź czego obecnia najabardziej potrzeba i wspomóż potrzebujących."
    }

    return (
        <section className='help' id='home-help'>
                <div className='help-header'>
                    <Header contents='Komu pomagamy?' />
                    <Decor />
                </div>
                <div className='menu'> 
                    <button id="button" type="button" onClick={() => handleClick(key[0])} className={`help-button ${isShown === "foundations" ? "choose-button" : ""}`}>Fundacjom</button>
                    <button id="button" type="button" onClick={() => handleClick(key[1])} className={`help-button ${isShown === "organizations" ? "choose-button" : ""}`}>Organizacjom pozarządowym</button>
                    <button type="button" onClick={() => handleClick(key[2])} className="help-button">Lokalnym zbiórkom</button>
                </div>
                {isShown === "foundations" && (<Pagination data={data} text={text.fundText} />)}
                {isShown === "organizations" && (<Pagination data={data} text={text.orgText} />)}
                {isShown === "collections" && (<Pagination data={data} text={text.localText} />)}
        </section>
    );
}