import photography from '../assets/images/professions/photography.jpg'
import construction from '../assets/images/professions/construction.jpg'
import programming from '../assets/images/professions/programming.jpg'
import gastronomy from '../assets/images/professions/gastronomy.jpg'
import singer from '../assets/images/professions/singer.jpg'

export const heroImageUser = profession => {
  switch (profession) {
    case 'photografy':
      return photography
    case 'construction':
      return construction
    case 'programming':
      return programming
    case 'gastronomy':
      return gastronomy
    case 'singer':
      return singer
    default:
      return photography
  }
}
