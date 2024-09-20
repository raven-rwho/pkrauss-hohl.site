interface Presentation {
    title: string,
    description: string,
    href?: string,
    imgSrc: string,
  }
  
  const presentationsData: Presentation[] = [
    {
      title: 'A Big Ball of Mud',
      description: `Do you know most common architectural pattern in Software development?
      No, it isn't Micro-Services or Eventbus. It is the Big Ball of Mud! because it simply works
      This is a summarizing presentation of one of my favourite papers..`,
      href: 'https://big-ball-of-mud-presentation.vercel.app/1',
      imgSrc: '/static/images/mud.png',
    },
    {
      title: 'Implementing and scaling Data Mesh by using Palantir Foundry',
      description: `With this slides I tell the story of using Palantir Foundry to introduce 
      Data Mesh and data as a product over the last years at Axel Springer NMT. Midjourney 
      helped a lot to create the visuals to support the story - and yes I do like comics`,
      href: 'https://big-data-minds-2024-presentation.vercel.app/1',
      imgSrc: '/static/images/foundry_mesh.png',
    },
  ]
  
  export default presentationsData
  