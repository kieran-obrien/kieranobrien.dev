const CertModal = ({ certName, certImg }) => {
  return (
    <div className="flex-col m-4 p-4 wrap hover:scale-110 transition duration-150">
      <p>{certName}</p>
      <button
        className=""
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <i class="ri-file-paper-2-fill text-3xl sm:text-4xl text-[var(--primary)] m-3 text-shadow-md/30 hover:text-shadow-md/70 transition-shadow duration-300 hover:text-[var(--secondary)] active:text-[var(--muted)]"></i>
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box w-10/12 max-w-5xl">
          <img src={certImg} className="w-full"></img>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default CertModal;
