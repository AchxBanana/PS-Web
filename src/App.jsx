function Mybutton(){
  return(
    <a className="p-4 bg-sky-50 hover:m-96" href="https://youtu.be/dQw4w9WgXcQ?si=r-32cc38Ap9BNwr0">click me</a>
  )
}

function App() {

  return (
    <>
      <div className="bg-sky-500 w-52 h-52 rounded-full shadow-teal-200"></div>
      <Mybutton />
    </>
  )
}

export default App
