import React from 'react';
import './App.css';
import { log } from 'console';
import { Accordion } from './components/Accordion';
import { Rating } from './components/Rating';
// Эта компонента
const App = () => {
    console.log('App rendered')
    // Что то делает полезное )
    return (
        <div>
            <PageTitle title='I love to coding:*' />
            <Rating value={0} />
            <Accordion collapsed={true} titleValue='Меню'/>
            <Accordion collapsed={false} titleValue='Users'/>
            <Rating value={3} />
        </div>
    );
}
type PageTitleProps = {
    title: string
}
const PageTitle = (props: PageTitleProps) => {
    console.log('AppTitle rendered')
    // Фрагмент это <> Что то пишеться</>
    return <h1>{props.title}</h1>
}




export default App;
