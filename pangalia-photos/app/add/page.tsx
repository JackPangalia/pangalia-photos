const Add = () => {
  return (
    <> 
      <h1 className = 'flex justify-center my-32 text-3xl mr-auto ml-auto'>Add Your Photos</h1>
      <form className = 'flex justify-center flex-col items-center gap-4'>
        <div className = 'space-x-4'>
          <input 
            className = 'border-2 border-black text-center p-2'
            type = 'text'
            placeholder = 'email address'
          />

          <input  
            className = 'border-2 border-black text-center p-2 '

            type = 'text'
            placeholder = 'password'
          />
        </div>

        <input 
          className = 'border-2 p-2 border-black'
          type = 'file'
        />

        <button 
          type ='submit'
          className = 'border-2 border-black text-center px-5 py-2'
        >Submit</button>
      </form>
    </>
  )
}

export default Add 