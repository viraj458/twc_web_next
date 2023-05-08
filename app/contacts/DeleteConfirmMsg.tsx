
export default function DeleteConfirmMsg() {
  return (
    <div>
      <div className="flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm fixed inset-0 ">
        <div className="px-6 py-8 bg-white rounded-2xl">
          <h1 className=" text-[#083F46] font-bold flex justify-center">
            Do you want to delete this contact?
          </h1>
          <button
            type="button"
            className="rounded-full border-[2px] border-[#083F46] px-5 py-[4px] bg-[#083F46] text-white mt-5 mx-14"
          >
            Yes
          </button>
          <button
            type="button"
            className="rounded-full border-[2px] border-[#083F46] px-5 py-[4px] bg-white text-[#083F46] mt-5 mx-14"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
