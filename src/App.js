import React from 'react';
import styled from "styled-components";
import {Helmet} from "react-helmet";

import Header from "./components/Header";
import BarChart from "./components/BarChart";
import Cards from "./components/Cards";
import Data from "./Data";

import './App.css';
const Section = styled.section`
    border-radius: 15px;
    max-width: 1315px;
    width: 96%;
    margin: 35px auto;
`
const Container = styled.div`
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.06);
    padding: 20px!important;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    flex-direction: row;
`
const numberOfQuiz = Data.length - 1, highestData = Data.slice(1).reduce((p, c) => p[1] > c[1] ? p : c),
    highestScore = highestData[1], highestScoreTime = highestData[0].toLocaleDateString(),
    averageScore = (Data.slice(1).reduce((sum, p) => sum + p[1], 0) / numberOfQuiz).toFixed(2),
    averageAttendees = (Data.slice(1).reduce((sum, p) => sum + p[2], 0) / numberOfQuiz).toFixed(2);

const App = () => {
    return (
        <>
            <Helmet>
                <title>Team Avenger Scoreboard</title>
            </Helmet>
            <Header/>
            <Section>
                <Container>
                    <Cards numberOfQuiz={numberOfQuiz} highestScore={highestScore} highestScoreTime={highestScoreTime} averageScore={averageScore} averageAttendees={averageAttendees}/>
                </Container>
            </Section>
            <Section>
                <Container>
                    <BarChart/>
                </Container>
            </Section>

        </>
    );
}

export default App;
