export function getData() {
  return { type: "DATA_REQUESTED" };
}

export function updateAnswer(currentIndex, answer) {
  return {
    type: "UPDATE_ANSWER_REQUESTED",
    payload: { currentIndex: currentIndex, answer: answer }
  };
}
