import { useNavigate } from 'react-router-dom';

const useGoPrev = () => {
  const navigate = useNavigate();

  const goPrev = () => {
    navigate(-1);
  };

  return { goPrev };
};
export default useGoPrev;
