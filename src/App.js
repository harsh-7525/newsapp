import React,{useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js'

const alankey='faa7572dbaa0e6bb67311fb8b373b5012e956eca572e1d8b807a3e2338fdd0dc/stage';


const App=()=>{
    const [newsArticles ,setNewsArticles]=useState([]);
    const classes=useStyles();
    const [activeArticle,setActiveArticle]=useState(-1);
    useEffect(()=> { 
        alanBtn({
        key: alankey,  
        onCommand:({command,articles,number})=>{
            if(command==='newHeadlines'){
              setNewsArticles(articles);
              setActiveArticle(-1)
             } 
             else if( command === 'highlight') {
                 setActiveArticle((prevActiveArticle)=> prevActiveArticle+1);
             }
             else if (command === 'open') {
                const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
                const article = articles[parsedNumber - 1];
      
                if (parsedNumber > 20) {
                  alanBtn().playText('Please try that again...');
                } else if (article) {
                  window.open(article.url, '_blank');
                  alanBtn().playText('Opening...');
                } else {
                  alanBtn().playText('Please try that again...');
                }
              }
            },
          });
        }, [])

        return (
            <div>
             <div className={classes.logoContainer}>
                   <img src="https://alan.app/voice/images/previews/preview.jpg"  className={classes.alanLogo} alt="Alan logo" />
             </div>
             < NewsCards articles={newsArticles}  activeArticle={activeArticle} />
            </div>
        )
    }


export default App;

