import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Grid from './Grid'
import StringMethods from './codeBlockPage/StringMethods'
import Events from './codeBlockPage/Events'
import Loop from './codeBlockPage/Loop'
import Arrays from './codeBlockPage/Arrays'
import Functions from './codeBlockPage/Functions'
import Objects from './codeBlockPage/Objects'

function App() {
  let [connection, setConnection] = useState(null);
  let [appHeader, setAppHeader] = useState('Choose Code Block');
  let [userId, setUserId] = useState(null);
  let [userRole, setUserRole] = useState(null);

  useEffect(() => {
    let ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
      setConnection(ws);
    };

    //when client reseve message from server
    ws.onmessage = (event) => {
      console.log(event);
      const { type, data } = JSON.parse(event.data);
      console.log(type)
      console.log(data)
      if (type == 'auth') {
        setUserId(data.id);
        setUserRole(data.role);
      } else if (type == 'input') {

        document.getElementById(data.page + "_input").value = data.input;
      }
    };

    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    return () => {
      ws.close();
    };
  }, []);

  const showSmileyFace = () => {
    document.getElementById('sadFace').style.display = "none";
    document.getElementById('smileyFace').style.display = "block";
  }

  const showSadFace = () => {
    document.getElementById('smileyFace').style.display = "none";
    document.getElementById('sadFace').style.display = "block";
  }

  const pagesCheckAnswer = {
    'Arrays': (newInput, setCurrentAnswer) => {
      setCurrentAnswer(newInput);
      connection.send(JSON.stringify({ page: 'Arrays', input: newInput }));
    },
    'Events': (newInput, setCurrentAnswer) => {
      setCurrentAnswer(newInput);
      connection.send(JSON.stringify({ page: 'Events', input: newInput }));
    },
    'Functions': (newInput, setCurrentAnswer) => {
      setCurrentAnswer(newInput);
      connection.send(JSON.stringify({ page: 'Functions', input: newInput }));
    },
    'Loop': (newInput, setCurrentAnswer) => {
      setCurrentAnswer(newInput);
      connection.send(JSON.stringify({ page: 'Loop', input: newInput }));
    },
    'Objects': (newInput, setCurrentAnswer) => {
      setCurrentAnswer(newInput);
      connection.send(JSON.stringify({ page: 'Objects', input: newInput }));
    },
    'StringMethods': (newInput, setCurrentAnswer) => {
      setCurrentAnswer(newInput);
      connection.send(JSON.stringify({ page: 'StringMethods', input: newInput }));
    },

  };
  const pagesShowResult = {
    'Arrays': (currentAnswer) => {
      if ('cars[1]' == currentAnswer) {
        showSmileyFace();
      } else {
        showSadFace();
      }
    },
    'Events': (currentAnswer) => {
      if ('onclick' == currentAnswer) {
        showSmileyFace();
      } else {
        showSadFace();
      }
    },
    'Functions': (currentAnswer) => {
      if ('myFunction()' == currentAnswer) {
        showSmileyFace();
      } else {
        showSadFace();
      }
    },
    'Loop': (currentAnswer) => {
      if ('of fruits' == currentAnswer) {
        showSmileyFace();
      } else {
        showSadFace();
      }
    },
    'Objects': (currentAnswer) => {
      if ('person.firstName' == currentAnswer) {
        showSmileyFace();
      } else {
        showSadFace();
      }
    },
    'StringMethods': (currentAnswer) => {
      if ('toUpperCase()' == currentAnswer) {
        showSmileyFace();
      } else {
        showSadFace();
      }
    }
  }

  return (
    <>
      <header id='app-header'>
        <p>{appHeader}</p>
        <p className='currRole'>
          Welcome back,
          <br />
          Your role is: {userRole}
        </p>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Grid pageName='Choose Code Block' setAppHeader={setAppHeader} />} />
            <Route path="/StringMethods" element={<StringMethods showResult={pagesShowResult.StringMethods} checkAnswer={pagesCheckAnswer.StringMethods} pageName='StringMethods' connection={connection} setAppHeader={setAppHeader} userRole={userRole} />} />
            <Route path="/Functions" element={<Functions showResult={pagesShowResult.Functions} checkAnswer={pagesCheckAnswer.Functions} pageName='Functions' connection={connection} setAppHeader={setAppHeader} userRole={userRole} />} />
            <Route path="/Objects" element={<Objects showResult={pagesShowResult.Objects} checkAnswer={pagesCheckAnswer.Objects} pageName='Objects' connection={connection} setAppHeader={setAppHeader} userRole={userRole} />} />
            <Route path="/Events" element={<Events showResult={pagesShowResult.Events} checkAnswer={pagesCheckAnswer.Events} pageName='Events' connection={connection} setAppHeader={setAppHeader} userRole={userRole} />} />
            <Route path="/Arrays" element={<Arrays showResult={pagesShowResult.Arrays} checkAnswer={pagesCheckAnswer.Arrays} pageName='Arrays' connection={connection} setAppHeader={setAppHeader} userRole={userRole} />} />
            <Route path="/Loop" element={<Loop showResult={pagesShowResult.Loop} checkAnswer={pagesCheckAnswer.Loop} pageName='Loop' connection={connection} setAppHeader={setAppHeader} userRole={userRole} />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App