import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    
  const [enquiryModalVisible, setEnquiryModalVisible] = useState(false);

  const showModal = () => {
    setEnquiryModalVisible(true);
  };

  const hideModal = () => {
    setEnquiryModalVisible(false);
  };

  return (
    <ModalContext.Provider value={{ enquiryModalVisible, showModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
