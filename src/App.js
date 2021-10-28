import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/homepage';
import PortItem from './components/Work/port-items/PortItem';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

import { ScrollButton } from './scrolls/ScrollButton';
import RefreshAtTop from './scrolls/RefreshAtTop'

import AntiSmoking from './components/Work/port-pages/AntiSmoking';
import DashboardNHS from './components/Work/port-pages/DashboardNHS';
import SafetyApp from './components/Work/port-pages/SafetyApp';
import items from './components/Work/data';
import Skillset from './components/Skillset/Skillset';


function App() {
    return (
        <Router>
            <RefreshAtTop/>
            <ScrollButton showBelow={250}/>
            <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route path="/work">
                        <PortItem  items={items}/>
                    </Route>
                    <Route path="/project/Intelligent-Hospital">
                        <DashboardNHS />
                    </Route>
                    <Route path="/project/Quit-Smoking-App">
                        <AntiSmoking />
                    </Route>
                    <Route path="/project/Wellbeing-App">
                        <SafetyApp />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/skillset">
                        <Skillset />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
            </Switch>
        </Router>
    );
}

export default App;