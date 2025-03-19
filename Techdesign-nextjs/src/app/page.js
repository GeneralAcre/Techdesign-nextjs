import MenuBar from "./components/MenuBar";


export default function HomePage() { 
  return (

      <div className ="Wrapper p-[16px]  ">
        <header className=" flex justify-between items-center mb-[16px]">
          <h1 className="text-[50px]">Your Tasks</h1>
          <img className=" w-[50px]" src="/Hamberger.jpg"/>
        </header>

        <main className=" flex flex-col gap-[8px]">
         <input type="text" placeholder="seacrh" className="px-[15px] border-black-100 border-1 rounded-[100px] w-[100%] " />
        <img className= "BD rounded -[50px] w-[100%] p-[10px] " src="/img1.png" />
        <img className= "BD rounded -[50px] w-[100%] p-[10px]" src="/img2.png" />

        </main>

      </div>  
  );
}