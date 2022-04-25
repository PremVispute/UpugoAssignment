import React, { memo, useEffect, useRef } from 'react'

const UserDetailsModal = ({ visible, user, onDismiss }) => {
  const modalRef = useRef()

  useEffect(() => {
    // an effect to call onDismiss when mouse clicked outside of modal content area
    const handleClickEvent = e => {
      if (visible && !modalRef?.current?.contains(e?.target)) {
        onDismiss()
      }
    }
    document.addEventListener('click', handleClickEvent, true)

    return () => {
      document.removeEventListener('click', handleClickEvent, true)
    }
  }, [visible])

  return visible ? (
    <>
      <div
        id="user-modal"
        className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}>
        <div
          ref={modalRef} // ref to determine content area clicks
          id="user-modal-content"
          className="p-8 relative w-full my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 rounded-t">
              <h3 className="text-3xl font-semibold">{user?.name}</h3>
            </div>
            {/*body*/}
            <div className="px-8 mb-8 flex flex-col lg:flex-row">
              <div className="basis-1/2">
                <div className="relative mb-6 flex-auto text-lg">
                  <p className="text-2xl mb-2">Personal Details</p>
                  <div>{user?.email}</div>
                  <div>{user?.phone}</div>
                </div>

                <div className="relative mb-6 flex-auto text-lg">
                  <p className="text-2xl mb-2">Company Details</p>
                  <div>{user?.company?.name}</div>
                  <div>{user?.company?.catchPhrase}</div>
                </div>
              </div>
              <div className="basis-1/2">
                <img
                  src={user?.pic}
                  className="w-full h-auto object-cover object-center"
                  alt="user-pic"
                />
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onDismiss}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  ) : null
}

UserDetailsModal.defaultProps = {
  visible: false,
  user: {},
  onDismiss: () => {},
}

export default memo(UserDetailsModal)
