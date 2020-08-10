import React, {Component} from "react";
import styled from "styled-components";
import {Assignment, EmojiEvents,People,Grade} from '@material-ui/icons';

const Card = styled.div`
    width: 50%;
    margin-top: 0;
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
`

const CardContainer = styled.div`
    padding: 10px 0;
    width: 100%;
    margin: 0 auto;
    color: #424153;
`
const CardHeader = styled.div`
    font-size: 18px;
    text-align: center;
    position: relative;
`
const CardHeaderText = styled.div`
    font-size: 18px;
    padding-left: 69px;
    display: block;
    color: #6d6d87;
    margin-top: 13px;
    text-align: left;
`
const CardIcon = styled.div`
    width: 45px;
    height: 45px;
    padding: 12px;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;
`
const CardText1 = styled.div`
    color: #434456;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
`
const CardText2 = styled.div`
    color: #9999b8;
    font-size: 15px;
`
const CardText3 = styled.div`
    color: #9999b8;
    font-size: 14px;
    width: 160px;
    margin-top: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
`

class Cards extends Component {
    render() {
        return (
            <>
                <Card>
                    <CardContainer>
                        <CardHeader>
                            <CardIcon>
                                <Assignment style={{ color: '#767aff' }} fontSize="large"/>
                            </CardIcon>
                            <CardHeaderText>
                                <CardText1>
                                    We did
                                </CardText1>
                                <CardText2>
                                    {this.props.numberOfQuiz}
                                </CardText2>
                                <CardText3>
                                    Times in Total
                                </CardText3>
                            </CardHeaderText>
                        </CardHeader>
                    </CardContainer>
                </Card>
                <Card>
                    <CardContainer>
                        <CardHeader>
                            <CardIcon>
                                <EmojiEvents style={{ color: '#f7a42c' }} fontSize="large"/>
                            </CardIcon>
                            <CardHeaderText>
                                <CardText1>Highest</CardText1>
                                <CardText2>{this.props.highestScore}</CardText2>
                                <CardText3>{`on ${this.props.highestScoreTime}`}</CardText3>
                            </CardHeaderText>
                        </CardHeader>
                    </CardContainer>
                </Card>
                <Card>
                    <CardContainer>
                        <CardHeader>
                            <CardIcon>
                                <Grade style={{ color: '#f266a3' }} fontSize="large"/>
                            </CardIcon>
                            <CardHeaderText>
                                <CardText1>Average Score</CardText1>
                                <CardText2>{this.props.averageScore}</CardText2>
                                <CardText3>{`Based on total ${this.props.numberOfQuiz} runs`}</CardText3>
                            </CardHeaderText>
                        </CardHeader>
                    </CardContainer>
                </Card>
                <Card>
                    <CardContainer>
                        <CardHeader>
                            <CardIcon>
                                <People style={{ color: '#02cd8e' }} fontSize="large"/>
                            </CardIcon>
                            <CardHeaderText>
                                <CardText1>Average Attendees</CardText1>
                                <CardText2>{this.props.averageAttendees}</CardText2>
                                <CardText3>{`Based on total ${this.props.numberOfQuiz} runs`}</CardText3>
                            </CardHeaderText>
                        </CardHeader>
                    </CardContainer>
                </Card>
            </>
        )
    }
}

export default Cards
