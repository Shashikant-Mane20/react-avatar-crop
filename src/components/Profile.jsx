// import { useRef, useState } from "react";
// import { BiPencil } from "react-icons/bi";
// import Modal from "./Modal";

// const Profile = () => {
//   const avatarUrl = useRef(
//     "https://avatarfiles.alphacoders.com/161/161002.jpg"
//   );
//   const [modalOpen, setModalOpen] = useState(false);

//   const updateAvatar = (imgSrc) => {
//     avatarUrl.current = imgSrc;
//   };

//   return (
//     <div className="flex flex-col items-center pt-12">
//       <div className="relative">
//         <img
//           src={avatarUrl.current}
//           alt="Avatar"
//           className="w-[150px] h-[150px] rounded-full border-2 border-gray-400"
//         />
//         <button
//           className="absolute -bottom-3 left-0 right-0 m-auto w-fit p-[.35rem] rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600"
//           title="Change photo"
//           onClick={() => setModalOpen(true)}
//         >
//           <BiPencil />
//         </button>
//       </div>
//       <h2 className="text-white font-bold mt-6">Mack Aroney</h2>
//       <p className="text-gray-500 text-xs mt-2">Software Engineer</p>
//       {modalOpen && (
//         <Modal
//           updateAvatar={updateAvatar}
//           closeModal={() => setModalOpen(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default Profile;


// import { useRef, useState } from "react";
// import { BiPencil } from "react-icons/bi";
// import Modal from "./Modal";

// const Profile = () => {
//   const avatarUrl = useRef(
//     "https://avatarfiles.alphacoders.com/161/161002.jpg"
//   );
//   const [modalOpen, setModalOpen] = useState(false);

//   const updateAvatar = (imgSrc) => {
//     avatarUrl.current = imgSrc;
//   };

//   return (
//     <div className="flex flex-col items-center pt-8 md:pt-12">
//       <div className="relative">
//         <img
//           src={avatarUrl.current}
//           alt="Avatar"
//           className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full border-2 border-gray-400"
//         />
//         <button
//           className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 p-1 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600"
//           title="Change photo"
//           onClick={() => setModalOpen(true)}
//         >
//           <BiPencil className="text-white text-sm sm:text-base md:text-lg" />
//         </button>
//       </div>
//       <h2 className="text-white font-bold mt-4 md:mt-6 text-lg sm:text-xl md:text-2xl">
//         Mack Aroney
//       </h2>
//       <p className="text-gray-500 text-xs sm:text-sm mt-1 md:mt-2">
//         Software Engineer
//       </p>
//       {modalOpen && (
//         <Modal
//           updateAvatar={updateAvatar}
//           closeModal={() => setModalOpen(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default Profile;

import { useRef, useState, useEffect } from "react";
import { BiPencil } from "react-icons/bi";
import Modal from "./Modal";

const Profile = () => {
  const avatarUrl = useRef(
    localStorage.getItem("avatar") || "https://avatarfiles.alphacoders.com/161/161002.jpg"
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [avatar, setAvatar] = useState(avatarUrl.current);

  const updateAvatar = (imgSrc) => {
    avatarUrl.current = imgSrc;
    setAvatar(imgSrc);
    localStorage.setItem("avatar", imgSrc); // Store the new avatar in localStorage
  };

  useEffect(() => {
    const savedAvatar = localStorage.getItem("avatar");
    if (savedAvatar) {
      setAvatar(savedAvatar); // Load avatar from localStorage on component mount
    }
  }, []);

  return (
    <div className="flex flex-col items-center pt-12">
      <div className="relative">
        <img
          src={avatar}
          alt="Avatar"
          className="w-[150px] h-[150px] rounded-full border-2 border-gray-400"
        />
        <button
          className="absolute -bottom-3 left-0 right-0 m-auto w-fit p-[.35rem] rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600"
          title="Change photo"
          onClick={() => setModalOpen(true)}
        >
          <BiPencil />
        </button>
      </div>
      <h2 className="text-white font-bold mt-6">Shashikant Mane</h2>
      <p className="text-gray-500 text-xs mt-2">FullStack Developer</p>
      {modalOpen && (
        <Modal
          updateAvatar={updateAvatar}
          closeModal={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Profile;

