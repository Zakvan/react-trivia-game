import { takeEvery, call, put } from "redux-saga/effects";

export default function* watcherSaga() {
  yield takeEvery("DATA_REQUESTED", workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: "DATA_LOADED", payload });
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}

function getData() {
  // return fetch(
  //   "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
  // ).then(response => response.json());
  return {
    response_code: 0,
    results: [
      {
        category: "Entertainment: Video Games",
        type: "boolean",
        difficulty: "hard",
        question:
          "In &quot;The Sims&quot; series, the most members in a household you can have is 8.",
        correct_answer: "True",
        incorrect_answers: ["False"]
      },
      {
        category: "Science & Nature",
        type: "boolean",
        difficulty: "hard",
        question:
          "You can calculate Induced Voltage using: &epsilon; =-N * (d&Phi;B)/(d)",
        correct_answer: "False",
        incorrect_answers: ["True"]
      },
      {
        category: "General Knowledge",
        type: "boolean",
        difficulty: "hard",
        question:
          "This is the correct spelling of &quot;Supercalifragilisticexpialidocious&quot;.",
        correct_answer: "True",
        incorrect_answers: ["False"]
      },
      {
        category: "Science & Nature",
        type: "boolean",
        difficulty: "hard",
        question:
          "It was once believed that injecting shark cartilage into people would prevent them from contracting cancer.",
        correct_answer: "True",
        incorrect_answers: ["False"]
      },
      {
        category: "Science & Nature",
        type: "boolean",
        difficulty: "hard",
        question: "Scientists can grow teeth from urine.",
        correct_answer: "True",
        incorrect_answers: ["False"]
      },
      {
        category: "History",
        type: "boolean",
        difficulty: "hard",
        question: "The Battle of Trafalgar took place on October 23rd, 1805",
        correct_answer: "False",
        incorrect_answers: ["True"]
      },
      {
        category: "Science & Nature",
        type: "boolean",
        difficulty: "hard",
        question:
          "The chemical element Lithium is named after the country of Lithuania.",
        correct_answer: "False",
        incorrect_answers: ["True"]
      },
      {
        category: "Science: Mathematics",
        type: "boolean",
        difficulty: "hard",
        question:
          "L&#039;H&ocirc;pital was the mathematician who created the homonymous rule that uses derivatives to evaluate limits with indeterminations.",
        correct_answer: "False",
        incorrect_answers: ["True"]
      },
      {
        category: "Politics",
        type: "boolean",
        difficulty: "hard",
        question:
          "George Clinton, Vice President of the United States (1805-1812), is an ancestor of President Bill Clinton.",
        correct_answer: "False",
        incorrect_answers: ["True"]
      },
      {
        category: "Entertainment: Music",
        type: "boolean",
        difficulty: "hard",
        question:
          "The song Scatman&#039;s World was released after Scatman (Ski-Ba-Bop-Ba-Dop-Bop).",
        correct_answer: "True",
        incorrect_answers: ["False"]
      }
    ]
  };
}
