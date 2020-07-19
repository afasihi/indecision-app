import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
	<Modal
		isOpen={!!props.selectedOption}
		onRequestClose={props.handleCloseModal}
		contentLabel="Selected Option"
		closeTimeoutMS= {400}
		className="modal"
	>
	<h3 className="modal_title">Selected Option</h3>
	{props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
	<button className="button" onClick={props.handleCloseModal}>Okey</button>
	</Modal>
);
export default OptionModal;