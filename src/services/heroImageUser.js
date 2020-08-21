import photography from '../assets/images/professions/photography.jpg'
import construction from '../assets/images/professions/construction.jpg'
import programming from '../assets/images/professions/programming.jpg'
import gastronomy from '../assets/images/professions/gastronomy.jpg'
import singer from '../assets/images/professions/singer.jpg'
import accountant from '../assets/images/professions/accountant.jpg'
import dentist from '../assets/images/professions/dentist.jpg'
import designer from '../assets/images/professions/designer.jpg'
import engineer from '../assets/images/professions/engineer.jpg'
import laborer from '../assets/images/professions/laborer.jpg'
import lawyer from '../assets/images/professions/lawyer.jpg'
import mechanic from '../assets/images/professions/mechanic.jpg'
import medicine from '../assets/images/professions/medicine.jpg'
import teacher from '../assets/images/professions/teacher.jpg'

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
    case 'accountant':
      return accountant
    case 'dentist':
      return dentist
    case 'engineer':
      return engineer
    case 'designer':
      return designer
    case 'laborer':
      return laborer
    case 'lawyer':
      return lawyer
    case 'mechanic':
      return mechanic
    case 'medicine':
      return medicine
    case 'teacher':
      return teacher
    default:
      return photography
  }
}
