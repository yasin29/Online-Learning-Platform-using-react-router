import React from 'react';
import { Spinner } from 'react-bootstrap';
import useQuotes from '../../hook/useQuotes';

const QuoteGenerator = () => {
    const [quotes] = useQuotes();
    const arrLen = quotes.length;
    let min = 0;
    let max = arrLen;
    let qt = quotes[Math.floor(Math.random() * (max - min) + min)];
    const headContainer = {
        position: ' relative',
        margin: '2% auto',
        borderRadius: '10%',
        background: '#222',
        height: '100%',
        color: 'white'
    }
    return (
        <div className="mt-2">
            <h1 style={headContainer}>HELLO! Welcome to InfoTech Career-Path</h1>
            {quotes.length ? <blockquote className="blockquote">
                <span>
                    <q style={{ fontFamily: 'Source Code Pro', fontSize: '1.3rem' }}>{qt.quote} </q>
                    <footer className="quote-author blockquote-footer mt-1">
                        <cite>{qt.author}</cite></footer>
                </span>
            </blockquote> : <Spinner animation="grow" variant="info" />}
        </div>
    );
};

export default QuoteGenerator;

