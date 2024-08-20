interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Orgchart',
    description: `Have you ever tried to figure out how the org is strucutred and ended up in crawling
    in the deepest vaults of the intranet in some nasty .ppt files? If the answer is yes,
    then this project could be interesting for you.`,
    imgSrc: '/static/images/orgchart.png',
    href: 'https://github.com/raven-rwho/orgchart',
  },
  {
    title: 'Location FInder',
    description: `This app is based on React Native and Firebase and allows the storage and retrieving of locations. 
    It consists of two screens. The first allows the storage and uploading of the location to a Firebase Realtime Database. 
    It is just meant as a proove of concept that can be anehanced to every kind of location 
    based "finder" app (e.g. stores, shops, restaurants, doctors, what ever)`,
    imgSrc: '/static/images/locationfinder.png',
    href: 'https://github.com/raven-rwho/location-finder',
  },
]

export default projectsData
