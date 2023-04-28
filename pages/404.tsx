const NotFound = () => {
  return (
    <>
      <div className="text-center pt-52">
        <h1 className="text-5xl">404</h1>
        <h2 className="text-lg pb-5">Page Not Found</h2>
      </div>

      <div className="flex justify-center p-10 border-solid shadow-2xl mx-40">
        <h1 className="text-3xl pb-10 px-10 justify-center text-center">
          Uh oh, it looks like you have hit a dead end. Good thing our lawyers
          are experts at finding loopholes.
        </h1>
      </div>
    </>
  );
};

export default NotFound;
