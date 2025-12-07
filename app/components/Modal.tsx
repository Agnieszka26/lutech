import { RefObject, useRef } from "react";
import Image, { StaticImageData } from "next/image";

const Modal = ({
  id,
  name,
  image,
}: {
  id: number;
  name: string;
  image: StaticImageData;
}) => {
  const modalRef: RefObject<HTMLDialogElement | null> = useRef(null);

  const openModal = () => {
    if (modalRef && modalRef.current) {
      modalRef.current.showModal();
    }
  };
  return (
    <>
      <button onClick={openModal}>
        <div className="avatar mb-6 w-24 h-24 md:w-48 md:h-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <Image
            src={image}
            alt={name}
            className="rounded-full object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </button>
      <dialog id={`modal_${id}`} className="modal" ref={modalRef}>
        <div className="modal-box max-w-7xl p-0 border-0 m-0 bg-transparent">
          <Image
            src={image}
            alt={name}
            style={{ objectFit: "cover" }}
            className="w-[1299px] aspect-video "
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
