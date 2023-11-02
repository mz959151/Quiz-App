const mapStateToProps = state => { return {state,quiz } };

const mapDispatchToProps = dispatch => ({
  onQuizLoad: payload => dispatch({ type: ActionTypes.QuizLoad, payload }),
  onPagerUpdate: payload => dispatch({ type: ActionTypes.PagerUpdate, payload })
});
state = {
quizes: [
  { id: 'data/javascript.json', name: 'Javascript' },
  { id: 'data/aspnet.json', name: 'Asp.Net' },
  { id: 'data/csharp.json', name: 'C Sharp' },
  { id: 'data/designPatterns.json', name: 'Design Patterns' }
],
quizId: 'data/javascript.json'
};

pager = {
index: 0,
size: 1,
count: 1
}

componentDidMount() {
this.load(this.state.quizId);
}

load(quizId) {
let url = quizId || this.props.quizId;
fetch(`../${url}`).then(res => res.json()).then(res => {
  let quiz = res;
  quiz.questions.forEach(q => {
    q.options.forEach(o => o.selected = false);
  });
  quiz.config = Object.assign(this.props.quiz.config || {}, quiz.config);
  this.pager.count = quiz.questions.length / this.pager.size;
  this.props.onQuizLoad(quiz);
  this.props.onPagerUpdate(this.pager);
});
}