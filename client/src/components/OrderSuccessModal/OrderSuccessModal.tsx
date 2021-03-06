import * as React from 'react';
import * as Modal from 'react-modal';
import RaisedButton from 'material-ui/RaisedButton';
import { ModalProps } from '@typings/modal';
import '@styles/OrderSuccessModal.css';

const OrderSuccessModal: React.SFC<ModalProps> = ({ isOpen, toggle }) => (
  <Modal
    className="order-success-modal"
    isOpen={isOpen}
    onRequestClose={() => toggle('orderSuccessModalOpen')}
  >
    <div className="success">
      <h1>Success!</h1>
      <img src="/img/success.gif" />
      <br/>
      <p>
        Your order has been received. The items you've ordered will be sent to your address.
      </p>
      <RaisedButton
        onClick={() => toggle('orderSuccessModalOpen')}
        className="btn"
        label="OK"
        primary={true}
      />
    </div>
  </Modal>
);

export default OrderSuccessModal;
