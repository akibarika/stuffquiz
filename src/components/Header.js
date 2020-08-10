import React, {Component} from "react";
import styled from 'styled-components';

const Navbar = styled.nav`
    min-height: 60px;
    box-shadow: -2px 0 7px #e3e2e4;
    z-index: 1025;
    background-color: #fff;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 1rem;
`

const InnerNav = styled.div`
  display: flex;
  width: 100%;
`
const A = styled.a`
    display: inline-block;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    text-decoration: none;
`
const Span = styled.span`
    padding-top: .5rem;
    font-size: 21px;
    font-weight: 700;
    color: #454454;
    text-transform: uppercase;
`

class Header extends Component {
    render() {
        return (
            <>
                <header>
                    <Navbar>
                        <InnerNav>
                            <A href="/">
                                <Span>
                                    Team Avenger scoreboard
                                </Span>
                            </A>
                        </InnerNav>
                    </Navbar>
                </header>
            </>
        )
    }
}

export default Header
