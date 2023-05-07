function Navbar() {
  return (
    <div className="w-100% p-3 backdrop:blur bg-transparent mx-auto">
      <div className="flex bg-white bg-opacity-10 backdrop-blur-lg  drop-shadow-lg rounded-lg">
        <ul className="flex gap-20 mx-auto font-bold my-5 text-white">
          <li className="hover:cursor-pointer">Home</li>
          <li className="hover:cursor-pointer">Contact</li>
          <li className="hover:cursor-pointer">About</li>
        </ul>
      </div>
      
    </div>
  );
}

export default Navbar;
