const initialState = {
  remoteQuestions: [
    {
      category: "Entertainment: Video Games",
      type: "boolean",
      difficulty: "hard",
      question:
        "In &quot;The Sims&quot; series, the most members in a household you can have is 8.",
      correct_answer: "True",
      incorrect_answers: ["False"]
    }
  ]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "DATA_LOADED": {
      let remoteQuestions = action.payload.results;
      return {
        ...state,
        remoteQuestions
      };
    }
    case "UPDATE_ANSWER_REQUESTED": {
      let remoteQuestions = state.remoteQuestions.concat();
      let question = remoteQuestions[action.payload.currentIndex];
      question.answer = action.payload.answer;
      return Object.assign({}, state, { remoteQuestions });
      // return { ...state, remoteQuestions };
    }
  }

  return state;
}

export default rootReducer;
