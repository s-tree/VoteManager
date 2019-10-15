import './VoteCurrency.css'
import React from 'react'
import axios from 'axios'
import QS from 'qs'
import {SERVER_URL_VOTE_QUERY_DETAIL} from './ServerCenter/ServerUtil.js'

class VoteMain extends React.Component{

    constructor(){
        super()
        this.state = {
            voteData:"",
            voteListUI:""
        }
    }

    componentDidMount(){
        this.queryAllVotes()
    }

    componentWillUnmount(){

    }

    queryAllVotes(){
        console.log(SERVER_URL_VOTE_QUERY_DETAIL)
        console.log(JSON.stringify({
            "voteId" : 1
        }))
        /**
         * //TODO
         */
        let params = QS.stringify({"voteId":1})
        axios.post(SERVER_URL_VOTE_QUERY_DETAIL,params)
        .then(res => res.data)
        .then(data => {
            if(!data.success){
                console.log(data.errorMessage)
                return
            }
            let content = JSON.parse(data.content)

            let voteList = content.voteItemList.map((item,index) => {
                console.log(item.imageUrl)
                return <VoteItemUI key={item.serialNum} data={item} />
            })

            voteList = <div className="div-voteitem"><ul className="ul-voteitem">{voteList}</ul></div>

            this.setState({
                voteData : content,
                voteListUI : voteList
            })

        })
        .catch(e => {
            console.log(e)
        })
    }

    render(){
        let nameUI = null
        if(this.state.voteData){
            console.log(this.state.voteData.name)
            nameUI = <h2>{this.state.voteData.name}</h2>
        }else{
            nameUI = <h2>暂无投票信息</h2>
        }
        
        return(
            <div className="main-div">
                <h1>Hello World</h1>
                {nameUI}
                {this.state.voteListUI}
            </div>
        );
    }

}

const VoteItemUI = function(porps){
    let item = porps.data
    console.log("item = " + JSON.stringify(item))
    console.log("imageUrl = " + item.imageUrl)
    return (
        <li className="li-voteitem">
            <div>
                <img className="img-voteitem" src={item.imageUrl} alt={item.info} onLoad={onLoad} onError={onImageLoadErr}/>
                <font className="font-voteitem"><h3>{item.info}</h3></font>
             </div>
         </li>
    )
} 

function onLoad(){
    console.log("on load img")
}

function onImageLoadErr(e){
    console.log("load faild = " + e)
}

export default VoteMain