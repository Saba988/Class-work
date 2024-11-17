export default function Home(){
  return(
    <div className="grid grid-cols-3 grid-rows[200px_100px_200px] gap-3">
      <div className="bg-yellow-600 justify-center items-center flex rounded-lg shadow-xl min-h-[50px] col-span-3">HEADER</div>
     <div className="bg-yellow-300 row-span-2 content-center justify-center items-center flex rounded-lg shadow-xl min-h-[50px]">Side Bar</div>
      
      <div className="bg-yellow-400  justify-center items-center flex rounded-lg shadow-xl min-h-[50px] col-span-2">Content 2</div>
      <div className="bg-yellow-50  justify-center items-center flex rounded-lg shadow-xl min-h-[50px]">Content 3</div>
      <div className="bg-yellow-200  justify-center items-center flex rounded-lg shadow-xl min-h-[50px]">Content 4</div>
      <div className="bg-yellow-500 justify-center items-center flex rounded-lg shadow-xl min-h-[50px] col-span-3">Footer</div>
    </div>
    )
}