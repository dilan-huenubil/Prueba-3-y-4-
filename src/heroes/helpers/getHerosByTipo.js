import { heroes } from '../data/heroes';

export const getHerosByTipo = (tipo) => {
    const aux = ['anime','comics'];
    if (!aux.includes(tipo)) {
        throw new Error(`El tipo no se encuentra: "${tipo}" `);
    }
    return heroes.filter(hero => hero.tipo === tipo);
}