import { TextField } from '@material-ui/core';
import React from 'react';
import { Controller } from 'react-hook-form';
import Modal from 'react-modal';
import Form from './form';
import classes from "./addNewsModal.module.css"


const customStyles = {
    overlay: {
      position: 'fixed',
      zIndex: 10
    }
  };
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#modal')

function AddNewsModal({ isOpen, close }) {


    function closeModal() {
        close();
    }

    return (
        <div className={classes.modalPage}>

            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                className={classes.modal_main}
                contentLabel="Example Modal"
            >
                <span className={classes.title}>Добавить новость</span>
                <Form/>

                
            </Modal>
        </div>
    );
}

export default AddNewsModal;

