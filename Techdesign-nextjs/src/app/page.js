import MenuBar from "./components/MenuBar";
import Dogcard from "./components/dogcard";
import Catcard from "./components/catcard";

// export default async function HomePage() { 
//   const response = await fetch("https://dogapi.dog/api/v2/breeds")
//   const resJSON = await response.json()
//   const dogs = resJSON.data

//   console.log(dogs)
  
  const response = await fetch("https://http.cat/")
  const resJson = await response.json()
  const characters = resJson.data



  return (

      <div className ="Wrapper p-[16px]  ">
        <header className=" flex justify-between items-center mb-[16px]">
          <h1 className="text-[50px]">Your Tasks</h1>
          <img className=" w-[50px]" src="/Hamberger.jpg"/>
        </header>

        <main>
            {cat.map(cat => (
              <Catcard name={cat.name} description={cat.description}
                key={cat.id} />
            ))}
    
        </main>

      </div>  
  );
