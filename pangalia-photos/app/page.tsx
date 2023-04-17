import Image from 'next/image'

const Home = () => {
  return (
    <>
      <section className = 'flex justify-center my-32'>
        <h2 className = 'text-3xl'>Explore Gallery, Flip through albums, add photos</h2>
      </section>

      <section className = 'grid grid-cols-4 gap-4 mx-4'>
        <img className = 'object-cover' src = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' />
        <img className = 'object-cover' src = 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80' />
        <img className = 'object-cover' src = 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg' />
        <img className = 'object-cover' src = 'https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg' />
        <img className = 'object-cover' src = 'https://cdn.esawebb.org/archives/images/screen/carinanebula3.jpg' />
        <img className = 'object-cover' src = 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
      </section>
    </>
  )
}

export default Home