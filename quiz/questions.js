<div id="quiz">
    <h2 className="text-center font-weight-normal">{this.props.quiz.name}</h2>
    <hr />
    {questions.map(q =>
        <div key={q.id}>
            <div className="badge badge-info">Question 
            {this.props.pager.index + 1} of {this.props.pager.count}.</div>
            <h3 className="font-weight-normal">{this.props.pager.index + 1}. 
            <span>{q.name}</span></h3>
            <div className="row text-left options">
                {
                    q.options.map(option =>
                        <div key={option.id} className="col-6">
                        <div className="option">
                        <label className="font-weight-normal" htmlFor={option.id}>
                        <input id={option.id} checked={option.selected} type="checkbox" 
                         onChange={() => this.onAnswer(q, option)} />
                        {option.name}
                        </label>
                        </div>
                        </div>
                    )
                }
            </div>
        </div>
    )}
    <hr />
    <div className="text-center">
    {this.props.quiz.config.allowBack && <button id="first" 
     className="btn btn-default" onClick={this.props.move}>First</button>}
    {this.props.quiz.config.allowBack && <button id="prev" 
     className="btn btn-default" onClick={this.props.move}>Prev</button>}
    <button id="next" className="btn btn-primary" onClick={this.props.move}>Next</button>
    <button id="last" className="btn btn-default" onClick={this.props.move}>Last</button>
    </div>
</div >
