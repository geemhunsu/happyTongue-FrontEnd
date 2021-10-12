import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const {
    shape, // 이미지 모양. 기본은 원
    src, // 이미지 주소
    size, // 이미지 크기. 가로세로 동일
    margin,
    padding,
    width,
    height,
    border_radius,
    is_center,
  } = props;

	const styles = {
		src,
		size,
		margin,
		padding,
    width,
    height,
    border_radius,
    is_center,
	}

	if (shape === "rectangle") {
		return <ImageRectangle {...styles}></ImageRectangle>;
	}
	
  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }

};

Image.defaultProps = {
  shape: null,
  src: "https://mblogthumb-phinf.pstatic.net/20140830_73/hkjwow_1409374816444cxF8E_JPEG/%B0%DF%BA%F3_%281%29.jpg?type=w2",
  size: 36,
  width: "100%",
  height: "auto",
  margin: null,
  padding: null,
  border_radius: null,
  is_center: false,
};

const ImageRectangle = styled.div`  
  width: ${props => props.width};
  height: ${props => props.height};
  background-image: url("${(props) => props.src}");
  background-size: cover;
  ${props => props.is_center ?
  `background-position: center;` : "" };
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border-radius: ${props => props.border_radius};
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

export default Image;
