import React from "react";

const Time = (time) => {
  let date = new Date();
  const post_time = date.getMilliseconds(time)/1000;

  if (post_time < 60) {
    return Math.floor(post_time) + "초전";
  } else if (post_time < 60 * 60) {
    return Math.floor(post_time) / 60 + "분전";
  } else if (post_time < 60 * 60 * 24) {
    return Math.floor(post_time) / (60 * 60) + "시간 전";
  } else if (post_time < 60 * 60 * 24 * 30) {
    return Math.floor(post_time) / (60 * 60 * 24) + "일 전";
  } else {
    return Math.floor(post_time) / (60 * 60 * 24 * 30) + "달 전";
  }
};

export default Time;
