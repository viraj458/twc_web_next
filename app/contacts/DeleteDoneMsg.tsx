
export default function DeleteDoneMsg(){
  return (
    <div>
      <div className="flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm fixed inset-0">
        <div className="px-6 py-8 bg-white rounded-2xl">
          <h1 className=" text-[#083F46] font-bold flex justify-center">
            Your contact has been deleted successfully!
          </h1>
          <button
            type="button"
            className="rounded-full border-[2px] px-5 py-[4px] bg-[#083F46] text-white mt-5 mx-28"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}
