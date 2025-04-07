import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "../styles/Cotrols";
import {
  faArrowLeft,
  faArrowRight,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { next, prev } from "@/redux/slices/idx-slice";
import { random } from "@/redux/slices/base-slice";

const Controls = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onNext = () => {
    dispatch(next());
  };
  const onPrev = () => {
    dispatch(prev());
  };
  const onRandom = () => {
    dispatch(random());
  };
  return (
    <S.Container>
      <S.Button onClick={onPrev}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </S.Button>
      <S.Button onClick={onNext}>
        <FontAwesomeIcon icon={faArrowRight} />
      </S.Button>
      <S.Button onClick={onRandom}>
        <FontAwesomeIcon icon={faRefresh} />
      </S.Button>
    </S.Container>
  );
};

export default Controls;
