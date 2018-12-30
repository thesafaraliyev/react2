import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from  './ApprovalCard'
import Exercise2 from './exercise2'
import CardContainer from './CardContainer'
import FileInput from './FileInput'
import TextInput from './TextInput'

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

const App2 = () =>{
    return (<div>
        <Exercise2
            title="Text1"
            message="Message text"
        />
    </div>);
}

const App3 = () =>{
    return (<div>
        <CardContainer>
            <FileInput />
        </CardContainer>

        <CardContainer>
            <TextInput />
        </CardContainer>
    </div>);
}

ReactDOM.render(<App3 />, document.querySelector('#root'));