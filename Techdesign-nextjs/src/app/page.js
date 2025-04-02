import MenuBar from "./components/MenuBar";
import Dogcard from "./components/dogcard";
import Charactercard from "./components/charactercard";

export default async function HomePage() { 
//   const response = await fetch("https://dogapi.dog/api/v2/breeds")
//   const resJSON = await response.json()
//   const dogs = resJSON.data

//   console.log(dogs)
  
  const response = await fetch("https://amiiboapi.com/")
  const resJson = await response.json()
  const Character = resJson.data



  return (

      <div className ="Wrapper p-[16px]  ">
        <header className=" flex justify-between items-center mb-[16px]">
          <h1 className="text-[50px]">Your Tasks</h1>
          <img className=" w-[50px]" src="/Hamberger.jpg"/>
        </header>

        <main>
            {Character.map(Character => (
              <Charactercard name={Character.name} description={Character.description}
                key={Character.id} />
            ))}
    
        </main>

      </div>  
  );

}
