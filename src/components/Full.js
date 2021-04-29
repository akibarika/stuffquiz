import React, {Component} from "react";
import styled from "styled-components";
import {EventAvailable} from '@material-ui/icons';

const Card = styled.div`
  width: 100%;
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
  position: relative;
`
const CardHeaderText = styled.div`
  color: #434456;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`

const CarList = styled.li`
  font-size: 18px;
  font-weight: 500;
  padding: 10px 0;
  border-bottom: 1px solid #9999b8;
  list-style: none;
`
const CardIcon = styled.div`
  display: inline-block;
  vertical-align: top;
  padding-right: 10px;
`
const CarListSpan = styled.span`
  display: inline-block;
  vertical-align: top;
  line-height: 39px;
`
const FullScoreList = (props) => {
    return props.full.map((s) =>
        <CarList><CardIcon>
            <EventAvailable style={{color: '#f7a42c'}} fontSize="large"/>
        </CardIcon>
            <CarListSpan>{s[0].toLocaleDateString()}</CarListSpan>
        </CarList>
    )
}

class Full extends Component {
    render() {
        return (
            <>
                <Card>
                    <CardContainer>
                        <CardHeader>
                            <CardHeaderText>
                                Full Score history
                            </CardHeaderText>
                        </CardHeader>
                        <FullScoreList full={this.props.full}/>
                    </CardContainer>
                </Card>
            </>
        )
    }
}

export default Full
