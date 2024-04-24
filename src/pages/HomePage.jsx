import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex min-h-96 justify-center items-center">
      <div className="text-center">
        <h1 className="font-bold sm:text-lg lg:text-3xl">Selamat Datang</h1>
        <div>
          <Link to="/anggota" relative="path">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold my-2 py-2 px-4 rounded">
              Master Data
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
