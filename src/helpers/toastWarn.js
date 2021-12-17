import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

export default function toastWarn(inputValue) {
  return toast.warn(`По вашему запросу ${inputValue} ничего нет!`, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

toastWarn.propTypes = {
  inputValue: PropTypes.string,
};
