const CertModal = ({ certName, certImg }) => {
  return (
    <div class="relative w-auto max-w-md hover:scale-110 transition duration-150 shadow-2xl">
      <img src={certImg} className="w-40 h-auto opacity-25 rounded-lg"></img>
      <div className="absolute flex inset-0 items-center justify-center align-center flex-col m-4 p-10 wrap">
        <p className="text-lg">
          <b>{certName}</b>
        </p>

        <button
          className=""
          onClick={() => document.getElementById(certName).showModal()}
        >
          <i className="ri-file-paper-2-fill text-3xl sm:text-4xl text-[var(--primary)] m-3 text-shadow-md/30 hover:text-shadow-md/70 transition-shadow duration-300 hover:text-[var(--secondary)] active:text-[var(--muted)]"></i>
        </button>
        <dialog id={certName} className="modal">
          <div className="modal-box w-10/12 max-w-5xl">
            <img src={certImg} className="w-full"></img>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default CertModal;
