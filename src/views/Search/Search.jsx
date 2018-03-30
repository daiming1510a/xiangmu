import React, { Component } from 'react'
import './Search.css'
class Search extends Component {
    constructor() {
        super()
        this.state = {
            historylist: []
        }
    }
    componentDidMount() {
        if (localStorage.getItem('searchHistory')) {
            this.setState({
                historylist: JSON.parse(localStorage.getItem('searchHistory'))
            })
        }
    }
    toSearch() {
        if (!this.refs.keyWords.value) return;
        let keyWords = this.refs.keyWords.value;
        let ls = localStorage;
        if (ls.getItem('searchHistory')) {
            let shArr = JSON.parse(ls.getItem('searchHistory'));
            if (shArr.indexOf(keyWords) > -1) return;
            shArr.push(keyWords);
            ls.setItem("searchHistory", JSON.stringify(shArr))
        } else {
            ls.setItem('searchHistory', JSON.stringify([keyWords]))
        }
        this.props.history.push('/index/result', {
            key_words: this.refs.keyWords.value
        })


    }
    toResult(keyWords) {
        this.props.history.push('/index/result', {
            key_words: keyWords
        })
    }
    clearHistory(){
        localStorage.removeItem('searchHistory')//进行清空
        this.setState({
            historylist:[]
        })
    }
    render() {
        let { historylist } = this.state;
        return (
            <div id='search'>
                <header><input type="text" ref='keyWords' /><button onClick={this.toSearch.bind(this)}>搜索</button></header>
                <section className='recent-search'>
                    <p>最近搜索  <span className='icon iconfont icon-qq' onClick={this.clearHistory.bind(this)}>清空</span></p>
                    {historylist.length == 0 ? <p>暂无搜索记录。。。。</p> :
                        <ul>
                            {
                                this.state.historylist.map((item, index) => {
                                    return (
                                        <li key={index} onClick={() => this.toResult(item)}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    }
                </section>
                <section className='content-search'>
                    <p>大家都在搜</p>
                    <ol>
                        <li>巧克力</li>
                    </ol>
                </section>
            </div>
        )
    }
}
export default Search