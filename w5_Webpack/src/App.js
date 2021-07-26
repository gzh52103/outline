import React,{useState} from 'react';

import './App.scss';

import home from './assets/mvvm.jpg'
console.log('home=',home);

function App(){
    const [goodslist, setstate] = useState([{
        name:'goods1',
        imgurl:'assets/home.png'
    },{
        name:'goods2',
        imgurl:'assets/mine_active.png'
    },{
        name:'goods3',
        imgurl:'assets/mvvm.jpg'
    }]);
    return (
        <div>
            <h1>Hello Webpack</h1>
            <img src="/assets/mine_active.png" />
            <img src={home} />
            {
                goodslist.map(item=>{
                    // console.log('imgurl=',require('./'+item.imgurl))
                    return <img src={require('./'+item.imgurl).default} />
                })
            }
            <p style={{color:'#f00'}}>className: 2103</p>
        </div>
    )
}

export default App;