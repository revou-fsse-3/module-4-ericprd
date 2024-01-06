import { Dialog, Transition } from "@headlessui/react";
import { ModalProps } from "./type";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

export function Modal(props: ModalProps) {
  const {
    isOpen,
    setIsOpen,
    title,
    description,
    children,
  } = props;

  return (
    <Transition
      appear
      as={Fragment}
      show={isOpen}
    >
      <Dialog
        as="div"
        aria-label="dialog"
        className="fixed inset-0 z-20 overflow-y-auto flex justify-center items-center"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={twMerge('fixed inset-0 backdrop-blur-sm bg-black/25')} />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Panel
            as="div"
            className="p-7 rounded-md w-full max-w-lg bg-white z-10 space-y-5"
          >
            {title && <Dialog.Title as="p" className="text-center text-xl font-bold">{title}</Dialog.Title>}

            {description && (
              <Dialog.Description>
                {description}
              </Dialog.Description>
            )}

            {children}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}