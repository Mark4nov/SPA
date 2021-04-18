import getData from '../utils/getData';
import getHash from '../utils/getHash';

const Character = async() =>{
    const data = await getData(getHash());
    const view= `
    <div class="Character-inner">
        <article class="Characters-card">
            <img src="${data.image}" alt="${data.name}"/>
            <h2>${data.name}</h2>
        </article>
        <article class="Characters-card">
            <h3>Episodes: ${data.episode.length}</h3>
            <h3>Status: ${data.status}</h3>
            <h3>Species: ${data.species}</h3>
            <h3>Gender: ${data.gender}</h3>
            <h3>Origin: ${data.origin.name}</h3>
            <h3>Last Location: ${data.location.name}</h3>
        </article>
    </div>
    `;
    return view;
}

export default Character;