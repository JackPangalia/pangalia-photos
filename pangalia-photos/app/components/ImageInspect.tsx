interface Props {
  imageUrl: string
  isShown: any
}

const ImageInspect = ({imageUrl, isShown}: Props) => {
  return (
    <img
      style = {isShown? {display: 'block'} : {display: 'none'}}
      src = {imageUrl}
      className = 'h-[30rem] w-[30rem]' 
    />
  )
}

export default ImageInspect;