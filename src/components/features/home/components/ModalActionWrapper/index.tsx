import { Modal, useHomeContext } from "components";
import { modalTypeMap } from "./data";

export function ModalActionWrapper () {
  const {
    openModal,
    setOpenModal,
    modalType,
    setModalType,
  } = useHomeContext();

  function closeCreateModalHandler(state: boolean) {
    setOpenModal(state);
    setTimeout(() => {
      setModalType('init');
    }, 600);
  }

  function NoRender() {
    return <></>
  }

  const ModalElement = modalTypeMap.get(modalType) ?? NoRender

  return (
    <>
      <Modal isOpen={openModal} setIsOpen={closeCreateModalHandler} title="Create Category">
        <ModalElement />
      </Modal>
    </>
  );
}