import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from  './ApprovalCard'

const App = () => {
    return (
        <div className="ui comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Elshan"
                    comment="Salam1"
                    avatar={Faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Tester"
                    comment="Salam2"
                    avatar={Faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Shahin"
                    comment="Salam3"
                    avatar={Faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));