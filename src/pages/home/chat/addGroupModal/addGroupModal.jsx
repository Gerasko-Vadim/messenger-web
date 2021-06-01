import { TextField } from '@material-ui/core';
import React from 'react';
import { Controller } from 'react-hook-form';
import Modal from 'react-modal';
import FormAddGroup from './addGroupForm';
import "./addGroupModal.scss"
import { useSelector } from 'react-redux';


const customStyles = {
    overlay: {
      position: 'fixed',
      zIndex: 10
    }
  };
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#modal')

const AddGroupModal = ({ isOpen, close,listGroups })=> {
   

    const closeModal=()=> {
        close();
    }
    console.log(isOpen)

    return (
        <div className="modalPage">

            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                className="modal_main"
                contentLabel="Example Modal"
            >
                <span className="title">Создать группу</span>
                <FormAddGroup listGroups={listGroups && listGroups}/>

                
            </Modal>
        </div>
    );
}

export default AddGroupModal;

