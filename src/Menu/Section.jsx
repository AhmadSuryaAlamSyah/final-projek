const Section = () => {
  return (
    <div>
      <div className="flex flex-col mx-auto items-center  sm:my-7">
        <img className="sm:w-1/2" src="image/Rectangle 1.svg" alt="bg" />
        <p className="w-full text-center text-3xl font-bold text-violet-500">InpoLoker</p>
        <p className="w-full text-center text-lg font-bold font-italic">Your skill is required for many jobs</p>
      </div>
      <svg className="-mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#8b5cf6"
          fill-opacity="1"
          d="M0,128L48,144C96,160,192,192,288,176C384,160,480,96,576,112C672,128,768,224,864,272C960,320,1056,320,1152,314.7C1248,309,1344,299,1392,293.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-violet-500 w-full -mt-3 py-10">
        <h1 className="text-white text-3xl font-bold text-center">About US</h1>
        <p className="text-white text-center font-bold">InpoLoker</p>
        <div className="sm:flex mt-2  items-center">
          <div className="flex flex-col items-center sm:w-1/2 lg:order-2">
            <img className="lg:scale-125" src="image/ceo.png" width={250} alt="bg" />
            <p className="text-white text-center font-semibold mt-1">CEO JOKO</p>
          </div>
          <div className="flex flex-col items-center text-center mt-7 sm:mt-0 px-6 sm:w-1/2 lg:order-1">
            <h2 className="text-white text-2xl font-bold mb-1">Your skill is required for many jobs</h2>
            <p className="text-white text-lg text-left">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis et ab nihil quisquam cupiditate ratione, delectus ipsum voluptatibus facilis. Cum beatae et, consectetur repudiandae quidem laboriosam ut nobis! Quibusdam,
            </p>
            <a className="text-violet-500 bg-gray-50 hover:bg-gray-300 hover:scale-95 py-4 px-8 sm:px-10  rounded-lg text-sm font-bold mt-4" href="/loker">
              Loker
            </a>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="-mt-1">
        <path
          fill="#8b5cf6"
          fill-opacity="1"
          d="M0,160L48,176C96,192,192,224,288,197.3C384,171,480,85,576,64C672,43,768,85,864,85.3C960,85,1056,43,1152,42.7C1248,43,1344,85,1392,106.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="py-16 px-32 -mt-20  mb-10">
        <p className="text-center text-3xl font-bold mb-3">Testimoni</p>
        <p className="text-base mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit delectus eveniet nam hic placeat, inventore nihil fuga vero blanditiis molestiae nobis est nemo explicabo ab qui aspernatur vitae dolor corporis? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Obcaecati consequatur delectus earum error eaque hic fuga maxime ipsa. Laborum nihil totam, cupiditate iste error nobis distinctio suscipit placeat dolorum nulla. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aspernatur ex dolorum nesciunt provident qui vitae voluptatum natus amet, dolor consequuntur, in dolorem repellendus quidem beatae eius sint ab quo. Nostrum.
        </p>
        <div className="flex flex-col items-center">
          <img className="mx-auto" src="image/Image.png" width={70} height={70} alt="bg" />
          <p className="mt-2 font-semibold">John Smith / CEO of XYZ Company</p>
        </div>
      </div>

      <div className="flex flex-col items-center pb-16 w-full bg-slate-100 pt-4">
        <h1 className="mb-5 text-3xl font-bold">Temukan loker di sekitar anda</h1>
        <img src="image/indonesia.svg" alt="peta" />
      </div>
    </div>
  );
};
export default Section;
